/**
 * PsiOS Cloudflare Worker — Motor de Licenciamiento, Panel de Administración, Datos Clínicos y Servidor R2
 * Versión: v1.0.3
 * 
 * Endpoints:
 * - GET  /api/status               -> Estado de salud del servicio (KV y R2)
 * - POST /api/activate             -> Activación y enlace único de usuario por clave
 * - POST /api/verify               -> Verificación periódica de licencia
 * - POST /api/admin/login          -> Autenticación de Administrador con Master Key
 * - GET  /api/admin/keys           -> Listado completo de claves y usuarios enlazados
 * - POST /api/admin/keys/generate  -> Generador de nuevas claves de producto
 * - POST /api/admin/keys/unlink    -> Desvincular usuario de una clave
 * - POST /api/admin/keys/delete    -> Eliminar clave de producto
 * - POST /api/clinic/backup        -> Respaldo sincronizado de pacientes y citas (KV)
 * - POST /api/clinic/restore       -> Restauración de pacientes y citas desde la nube (KV)
 * - GET  /libros/*                 -> Servidor CDN de libros y manuales desde Cloudflare R2
 * - GET  /recursos/*               -> Servidor CDN de pruebas y evaluaciones desde Cloudflare R2
 */

// Claves maestras autorizadas para acceso al Panel de Administración
const MASTER_KEYS = new Set([
  'PSIOS-ADMIN-MASTER-2026',
  'PSIOS-MASTER-ADMIN-2026',
  'PSIOS-MASTER-UNIVERSAL',
  'PSIOS-MASTER-SOYBIOMED'
]);

// Claves de demostración predeterminadas
const BUILTIN_LICENSES = {
  'PSIOS-PRO-2026-CLINIC': {
    key: 'PSIOS-PRO-2026-CLINIC',
    plan: 'PsiOS Profesional Clínico (Perpetua)',
    maxDevices: 10,
    expiresAt: null,
    tier: 'pro',
    status: 'available',
    linkedUser: null,
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup']
  },
  'PSIOS-MASTER-UNIVERSAL': {
    key: 'PSIOS-MASTER-UNIVERSAL',
    plan: 'PsiOS Enterprise & Hospital Suite (Maestra)',
    maxDevices: 100,
    expiresAt: null,
    tier: 'enterprise',
    status: 'active',
    linkedUser: 'Administrador Maestro',
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup', 'multi_doctor', 'admin_panel']
  },
  'PSIOS-DEMO-TRIAL': {
    key: 'PSIOS-DEMO-TRIAL',
    plan: 'PsiOS Demostración Clínica (Evaluación)',
    maxDevices: 3,
    expiresAt: '2027-12-31T23:59:59Z',
    tier: 'trial',
    status: 'available',
    linkedUser: null,
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology']
  }
};

const SECRET_SALT = 'PSIOS_CLINICAL_SECURE_SALT_2026_V2';

// Headers CORS para integración transparente con la app de escritorio y web
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-PsiOS-Version, X-License-Key, X-Master-Key',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8'
};

function getMasterKeyFromRequest(request, body = {}, url = null) {
  const authHeader = request.headers.get('Authorization') || '';
  const bearerKey = authHeader.replace(/^Bearer\s+/i, '').trim();
  return (
    request.headers.get('X-Master-Key') ||
    request.headers.get('X-License-Key') ||
    bearerKey ||
    (url ? url.searchParams.get('masterKey') : null) ||
    body?.masterKey ||
    ''
  ).trim().toUpperCase();
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: corsHeaders
  });
}

// Generador de hashes SHA-256 para contraseñas de privacidad
async function hashPassword(password) {
  if (!password) return '';
  const enc = new TextEncoder();
  const raw = `${password}::${SECRET_SALT}`;
  const digest = await crypto.subtle.digest('SHA-256', enc.encode(raw));
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Generador de firmas criptográficas HMAC / SHA-256 para tokens de activación
async function generateActivationToken(key, deviceId, timestamp) {
  const enc = new TextEncoder();
  const raw = `${key}::${deviceId}::${timestamp}::${SECRET_SALT}`;
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(SECRET_SALT),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', keyMaterial, enc.encode(raw));
  const hex = Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
  return `TOK-${hex.substring(0, 32).toUpperCase()}`;
}

// Generador de claves algorítmicas formateadas
function generateProductKey(prefix = 'PRO') {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  const getChunk = (len = 4) => {
    let s = '';
    const bytes = new Uint8Array(len);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < len; i++) {
      s += chars[bytes[i] % chars.length];
    }
    return s;
  };
  return `PSIOS-${prefix}-${getChunk(4)}-${getChunk(4)}`;
}

// Obtener o inicializar el índice de claves en KV
async function getKeyIndex(kv) {
  if (!kv) return Object.keys(BUILTIN_LICENSES);
  const raw = await kv.get('PSIOS_KEY_INDEX', 'json');
  if (Array.isArray(raw) && raw.length > 0) {
    return raw;
  }
  const defaultKeys = Object.keys(BUILTIN_LICENSES);
  await kv.put('PSIOS_KEY_INDEX', JSON.stringify(defaultKeys));
  return defaultKeys;
}

async function saveKeyIndex(kv, index) {
  if (!kv) return;
  const unique = Array.from(new Set(index));
  await kv.put('PSIOS_KEY_INDEX', JSON.stringify(unique));
}

export default {
  async fetch(request, env, ctx) {
    // 1. Manejo de preflight CORS (OPTIONS)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    const kv = env.PSIOS_LICENSES || env.KV;
    const r2 = env.PSIOS_RESOURCES || env.R2;

    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, '') || '/';

    // 2. Healthcheck / Estado del servicio
    if (pathname === '/' || pathname === '/api/status') {
      return jsonResponse({
        service: 'PsiOS Cloud Hub (Licensing, Admin Panel, Clinical Sync & R2 CDN)',
        version: 'v1.0.3',
        environment: env?.ENVIRONMENT || 'production',
        kvBound: !!kv,
        r2Bound: !!r2,
        status: 'operational',
        timestamp: new Date().toISOString()
      });
    }

    // 3. Servidor CDN de Libros y Recursos desde Cloudflare R2: GET /libros/* o GET /recursos/*
    if ((pathname.startsWith('/libros') || pathname.startsWith('/recursos')) && request.method === 'GET') {
      if (!r2) {
        return jsonResponse({
          error: 'R2_NOT_BOUND',
          message: 'El bucket de Cloudflare R2 no está vinculado en este Worker.'
        }, 503);
      }

      const cleanPath = decodeURIComponent(url.pathname.replace(/^\/(libros|recursos)\/?/, ''));
      if (!cleanPath) {
        return jsonResponse({ error: 'FILE_NOT_SPECIFIED', message: 'Debe especificar el nombre del archivo.' }, 400);
      }

      let object = await r2.get(`libros/${cleanPath}`);
      if (!object) object = await r2.get(cleanPath);

      if (!object) {
        return jsonResponse({
          error: 'FILE_NOT_FOUND',
          path: cleanPath,
          message: `El archivo '${cleanPath}' no fue encontrado en el bucket R2.`
        }, 404);
      }

      const headers = new Headers();
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      headers.set('etag', object.httpEtag);

      const lower = cleanPath.toLowerCase();
      if (lower.endsWith('.pdf')) {
        headers.set('Content-Type', 'application/pdf');
      } else if (lower.endsWith('.png')) {
        headers.set('Content-Type', 'image/png');
      } else if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) {
        headers.set('Content-Type', 'image/jpeg');
      } else if (lower.endsWith('.glb')) {
        headers.set('Content-Type', 'model/gltf-binary');
      } else {
        headers.set('Content-Type', 'application/octet-stream');
      }

      return new Response(object.body, { headers });
    }

    // 4. Activación de Licencia y Enlace Único de Usuario: POST /api/activate
    if (pathname === '/api/activate' && request.method === 'POST') {
      try {
        const body = await request.json().catch(() => ({}));
        const { licenseKey, deviceId, deviceName, doctorName, password, appVersion } = body;

        if (!licenseKey || typeof licenseKey !== 'string') {
          return jsonResponse({
            success: false,
            error: 'MISSING_LICENSE_KEY',
            message: 'Debe ingresar una clave de producto válida.'
          }, 400);
        }

        const normalizedKey = licenseKey.trim().toUpperCase();
        const effectiveDeviceId = (deviceId && typeof deviceId === 'string') ? deviceId.trim() : 'DEV-DEFAULT-STATION';

        // 4.A. VERIFICAR SI ES LA KEY MAESTRA DEL ADMINISTRADOR
        if (MASTER_KEYS.has(normalizedKey)) {
          return jsonResponse({
            success: true,
            isAdmin: true,
            plan: 'PsiOS Administrador Maestro',
            tier: 'master',
            deviceId: effectiveDeviceId,
            doctorName: 'Administrador Maestro',
            activatedAt: new Date().toISOString(),
            isPerpetual: true,
            features: ['admin_panel', 'license_generator', 'user_management', 'offline_books', 'clinical_sync', 'unlimited_patients'],
            message: 'Acceso Maestro Concedido. Bienvenido al Panel de Administración.'
          });
        }

        let licenseData = null;

        // Consultar Cloudflare KV
        if (kv) {
          licenseData = await kv.get(`LICENSE:${normalizedKey}`, 'json');
        }

        // Si no está en KV, consultar las claves builtin
        if (!licenseData && BUILTIN_LICENSES[normalizedKey]) {
          licenseData = { ...BUILTIN_LICENSES[normalizedKey] };
        }

        if (!licenseData) {
          return jsonResponse({
            success: false,
            error: 'INVALID_LICENSE_KEY',
            message: 'La clave de producto ingresada no existe o no ha sido generada por el Administrador Maestro en Cloudflare.'
          }, 403);
        }

        // 4.A.1 Verificar estado pausado
        if (licenseData.status === 'paused') {
          return jsonResponse({
            success: false,
            error: 'LICENSE_PAUSED',
            message: 'Esta licencia ha sido pausada temporalmente por el Administrador Maestro en Cloudflare. Contacte a soporte para reactivarla.'
          }, 403);
        }

        // 4.A.2 Verificar expiración si aplica
        if (licenseData.expiresAt && new Date(licenseData.expiresAt) < new Date()) {
          const expiredDate = new Date(licenseData.expiresAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
          return jsonResponse({
            success: false,
            error: 'LICENSE_EXPIRED',
            message: `Esta licencia ha expirado (venció el ${expiredDate}). Solicite al Administrador Maestro la ampliación o renovación de vigencia.`
          }, 403);
        }

        // 4.B. REGLA DE ORO DE ENLACE ÚNICO: Cada clave SOLO puede estar enlazada con UN usuario
        const candidateUser = (doctorName || '').trim();
        if (licenseData.linkedUser && candidateUser) {
          const cleanExisting = licenseData.linkedUser.trim().toLowerCase();
          const cleanCandidate = candidateUser.toLowerCase();

          if (cleanExisting !== cleanCandidate) {
            return jsonResponse({
              success: false,
              error: 'KEY_ALREADY_LINKED',
              message: `Esta clave de producto ya está enlazada al usuario "${licenseData.linkedUser}". Cada clave es personal e intransferible para un único usuario.`
            }, 403);
          }
        }

        // 4.C. CONTROL DE LÍMITE DE EQUIPOS POR USUARIO
        const maxDevs = typeof licenseData.maxDevices === 'number' ? Math.max(1, licenseData.maxDevices) : 1;
        let registeredDevices = Array.isArray(licenseData.devices) 
          ? [...licenseData.devices] 
          : (licenseData.deviceId ? [licenseData.deviceId] : []);

        if (!registeredDevices.includes(effectiveDeviceId)) {
          if (registeredDevices.length >= maxDevs) {
            return jsonResponse({
              success: false,
              error: 'MAX_DEVICES_EXCEEDED',
              message: `Se ha alcanzado el límite de equipos permitidos (${registeredDevices.length} de ${maxDevs} equipos). Esta clave ya está activa en otro equipo para el usuario "${licenseData.linkedUser || candidateUser}". Contacte al Administrador Maestro para ampliar el límite de equipos o restablecer los dispositivos vinculados.`
            }, 403);
          }
          registeredDevices.push(effectiveDeviceId);
        }
        licenseData.devices = registeredDevices;
        licenseData.maxDevices = maxDevs;

        // 4.D. VERIFICACIÓN DE CONTRASEÑA DE PRIVACIDAD
        const providedPassword = (password || '').trim();
        if (licenseData.passwordHash && providedPassword) {
          const incomingHash = await hashPassword(providedPassword);
          if (incomingHash !== licenseData.passwordHash) {
            return jsonResponse({
              success: false,
              error: 'INVALID_PASSWORD',
              message: 'La contraseña de privacidad ingresada es incorrecta para esta cuenta.'
            }, 401);
          }
        } else if (!licenseData.passwordHash && providedPassword) {
          // Registrar contraseña por primera vez
          licenseData.passwordHash = await hashPassword(providedPassword);
        }

        // Enlazar usuario si aún no estaba enlazado
        if (candidateUser) {
          licenseData.linkedUser = candidateUser;
          if (licenseData.status !== 'paused') {
            licenseData.status = 'active';
          }
        }
        if (body.userProfile) {
          licenseData.userProfile = body.userProfile;
        }

        const timestamp = Date.now();
        const token = await generateActivationToken(normalizedKey, effectiveDeviceId, timestamp);

        licenseData.lastSeenAt = new Date(timestamp).toISOString();
        licenseData.deviceId = effectiveDeviceId;
        if (!licenseData.activatedAt && candidateUser) {
          licenseData.activatedAt = new Date(timestamp).toISOString();
        }

        // Guardar actualización en KV
        if (kv) {
          await kv.put(`LICENSE:${normalizedKey}`, JSON.stringify(licenseData));
          const index = await getKeyIndex(kv);
          if (!index.includes(normalizedKey)) {
            index.push(normalizedKey);
            await saveKeyIndex(kv, index);
          }
        }

        return jsonResponse({
          success: true,
          status: licenseData.status || 'active',
          plan: licenseData.plan,
          tier: licenseData.tier || 'pro',
          deviceId: effectiveDeviceId,
          devices: registeredDevices,
          maxDevices: maxDevs,
          doctorName: licenseData.linkedUser || candidateUser || 'Profesional Clínico',
          activatedAt: licenseData.activatedAt || new Date(timestamp).toISOString(),
          expiresAt: licenseData.expiresAt,
          isPerpetual: !licenseData.expiresAt,
          token,
          hasPassword: !!licenseData.passwordHash,
          userProfile: licenseData.userProfile || null,
          features: licenseData.features || ['offline_books', 'clinical_sync', 'unlimited_patients'],
          message: 'Licencia verificada y enlazada correctamente.'
        });

      } catch (err) {
        return jsonResponse({
          success: false,
          error: 'SERVER_ERROR',
          message: `Error al procesar activación: ${err.message}`
        }, 500);
      }
    }

    // 5. Verificación Periódica: POST /api/verify
    if (pathname === '/api/verify' && request.method === 'POST') {
      try {
        const body = await request.json().catch(() => ({}));
        const { licenseKey, token } = body;
        const normalizedKey = (licenseKey || '').trim().toUpperCase();

        if (MASTER_KEYS.has(normalizedKey)) {
          return jsonResponse({ success: true, status: 'active', isAdmin: true });
        }

        const isValid = token && token.startsWith('TOK-') && normalizedKey.startsWith('PSIOS-');
        return jsonResponse({
          success: isValid,
          status: isValid ? 'active' : 'invalid',
          verifiedAt: new Date().toISOString()
        });
      } catch (e) {
        return jsonResponse({ success: false, error: e.message }, 500);
      }
    }

    // 5.B. Consulta de Estado en Vivo de Licencia: GET /api/license/live-status
    if (pathname === '/api/license/live-status' && (request.method === 'GET' || request.method === 'POST')) {
      const qKey = (url.searchParams.get('licenseKey') || '').trim().toUpperCase();
      const qDev = (url.searchParams.get('deviceId') || '').trim();
      if (!qKey) {
        return jsonResponse({ error: 'MISSING_KEY', valid: false }, 400);
      }
      if (MASTER_KEYS.has(qKey)) {
        return jsonResponse({ valid: true, isAdmin: true, status: 'active' });
      }

      try {
        let record = null;
        if (kv) {
          record = await kv.get(`LICENSE:${qKey}`, 'json');
        }
        if (!record && BUILTIN_LICENSES[qKey]) {
          record = { ...BUILTIN_LICENSES[qKey] };
        }
        if (!record) {
          return jsonResponse({ valid: false, reason: 'revoked', message: 'Esta clave de licencia ya no existe en el sistema o fue eliminada por el Administrador Maestro.' });
        }

        if (record.status === 'paused') {
          return jsonResponse({ valid: false, reason: 'paused', status: 'paused', message: 'Tu licencia de PsiOS ha sido pausada temporalmente por el Administrador Maestro en el Panel de Control.' });
        }

        if (record.expiresAt && new Date(record.expiresAt) < new Date()) {
          const expDate = new Date(record.expiresAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
          return jsonResponse({ valid: false, reason: 'expired', status: 'expired', message: `Tu licencia de PsiOS ha expirado (venció el ${expDate}). Solicita al Administrador Maestro renovar la vigencia.` });
        }

        const devList = Array.isArray(record.devices) ? record.devices : (record.deviceId ? [record.deviceId] : []);
        if (qDev && !devList.includes(qDev)) {
          return jsonResponse({ valid: false, reason: 'device_removed', message: 'Esta computadora ha sido desvinculada por el Administrador Maestro (se restablecieron los equipos autorizados). Tu sesión se ha cerrado para liberar el cupo del equipo.' });
        }

        return jsonResponse({ valid: true, status: record.status || 'active', maxDevices: record.maxDevices || 1, devices: devList });
      } catch (e) {
        return jsonResponse({ valid: false, error: e.message }, 500);
      }
    }

    // =========================================================================
    // 6. ENDPOINTS DEL PANEL DE ADMINISTRACIÓN (MASTER KEY CONTROL)
    // =========================================================================

    // 6.A. Login de Administrador: POST /api/admin/login
    if (pathname === '/api/admin/login' && request.method === 'POST') {
      try {
        const body = await request.json().catch(() => ({}));
        const masterKey = (body.masterKey || '').trim().toUpperCase();

        if (!MASTER_KEYS.has(masterKey)) {
          return jsonResponse({
            success: false,
            error: 'INVALID_MASTER_KEY',
            message: 'La Clave Maestra ingresada no tiene privilegios de Administrador.'
          }, 403);
        }

        return jsonResponse({
          success: true,
          message: 'Autenticación Maestra Exitosa.',
          adminSession: {
            role: 'superadmin',
            masterKey,
            authenticatedAt: new Date().toISOString()
          }
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // 6.B. Listar todas las claves y usuarios enlazados: GET /api/admin/keys
    if (pathname === '/api/admin/keys' && (request.method === 'GET' || request.method === 'POST')) {
      const masterKey = getMasterKeyFromRequest(request, {}, url);
      if (!masterKey || !MASTER_KEYS.has(masterKey)) {
        return jsonResponse({ error: 'UNAUTHORIZED', message: 'Se requiere Clave Maestra de Administrador.' }, 401);
      }

      try {
        const index = await getKeyIndex(kv);
        const keysList = [];

        for (const k of index) {
          let record = null;
          if (kv) {
            record = await kv.get(`LICENSE:${k}`, 'json');
          }
          if (!record && BUILTIN_LICENSES[k]) {
            record = { ...BUILTIN_LICENSES[k] };
          }
          if (record) {
            let status = record.status || (record.linkedUser ? 'active' : 'available');
            if (record.status === 'paused') {
              status = 'paused';
            } else if (record.expiresAt && new Date(record.expiresAt) < new Date()) {
              status = 'expired';
            }

            keysList.push({
              key: k,
              plan: record.plan || 'PsiOS Profesional Clínico',
              tier: record.tier || 'pro',
              status,
              linkedUser: record.linkedUser || null,
              userProfile: record.userProfile || null,
              hasPassword: !!record.passwordHash,
              deviceId: record.deviceId || '—',
              devices: Array.isArray(record.devices) ? record.devices : (record.deviceId ? [record.deviceId] : []),
              maxDevices: typeof record.maxDevices === 'number' ? Math.max(1, record.maxDevices) : 1,
              createdAt: record.createdAt || record.activatedAt || '2026-10-01T00:00:00Z',
              activatedAt: record.activatedAt || null,
              lastSeenAt: record.lastSeenAt || null,
              expiresAt: record.expiresAt || null
            });
          }
        }

        return jsonResponse({
          success: true,
          total: keysList.length,
          active: keysList.filter(x => x.linkedUser && x.status !== 'paused' && x.status !== 'expired').length,
          available: keysList.filter(x => !x.linkedUser).length,
          paused: keysList.filter(x => x.status === 'paused' || x.status === 'expired').length,
          keys: keysList
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // 6.C. Generador de Claves de Activación: POST /api/admin/keys/generate
    if (pathname === '/api/admin/keys/generate' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const masterKey = getMasterKeyFromRequest(request, body, url);

      if (!masterKey || !MASTER_KEYS.has(masterKey)) {
        return jsonResponse({ error: 'UNAUTHORIZED', message: 'Se requiere Clave Maestra de Administrador.' }, 401);
      }

      try {
        const planType = body.plan || 'PsiOS Profesional Clínico';
        const prefix = body.prefix || 'CLIN';
        const newKey = generateProductKey(prefix);

        const newLicenseRecord = {
          key: newKey,
          plan: planType,
          tier: body.tier || 'pro',
          maxDevices: typeof body.maxDevices === 'number' ? Math.max(1, body.maxDevices) : (parseInt(body.maxDevices, 10) || 1),
          expiresAt: body.expiresAt || null,
          status: 'available',
          linkedUser: null,
          passwordHash: null,
          devices: [],
          note: body.note || '',
          createdAt: new Date().toISOString(),
          features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup']
        };

        if (kv) {
          await kv.put(`LICENSE:${newKey}`, JSON.stringify(newLicenseRecord));
          const index = await getKeyIndex(kv);
          if (!index.includes(newKey)) {
            index.unshift(newKey); // Poner la más reciente al principio
            await saveKeyIndex(kv, index);
          }
        }

        return jsonResponse({
          success: true,
          message: 'Nueva clave de producto generada y guardada en Cloudflare KV.',
          key: newKey,
          license: newLicenseRecord
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // 6.D. Desvincular Usuario de una Clave: POST /api/admin/keys/unlink
    if (pathname === '/api/admin/keys/unlink' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const masterKey = getMasterKeyFromRequest(request, body, url);

      if (!masterKey || !MASTER_KEYS.has(masterKey)) {
        return jsonResponse({ error: 'UNAUTHORIZED', message: 'Se requiere Clave Maestra de Administrador.' }, 401);
      }

      const targetKey = (body.key || '').trim().toUpperCase();
      if (!targetKey) {
        return jsonResponse({ error: 'MISSING_KEY', message: 'Debe especificar la clave a desvincular.' }, 400);
      }

      try {
        if (kv) {
          const record = await kv.get(`LICENSE:${targetKey}`, 'json') || { key: targetKey };
          record.linkedUser = null;
          record.passwordHash = null;
          record.status = 'available';
          record.devices = [];
          record.deviceId = null;
          record.unlinkedAt = new Date().toISOString();
          await kv.put(`LICENSE:${targetKey}`, JSON.stringify(record));
        }

        return jsonResponse({
          success: true,
          message: `La clave ${targetKey} ha sido desvinculada y ahora está disponible para un nuevo usuario.`
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // 6.E. Eliminar Clave: POST /api/admin/keys/delete
    if (pathname === '/api/admin/keys/delete' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const masterKey = getMasterKeyFromRequest(request, body, url);

      if (!masterKey || !MASTER_KEYS.has(masterKey)) {
        return jsonResponse({ error: 'UNAUTHORIZED', message: 'Se requiere Clave Maestra de Administrador.' }, 401);
      }

      const targetKey = (body.key || '').trim().toUpperCase();
      try {
        if (kv) {
          await kv.delete(`LICENSE:${targetKey}`);
          const index = await getKeyIndex(kv);
          const updatedIndex = index.filter(k => k !== targetKey);
          await saveKeyIndex(kv, updatedIndex);
        }

        return jsonResponse({
          success: true,
          message: `La clave ${targetKey} ha sido eliminada permanentemente del sistema.`
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // 6.F. Actualizar Configuración de Clave (Duración, Pausa, Equipos): POST /api/admin/keys/update
    if (pathname === '/api/admin/keys/update' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const masterKey = getMasterKeyFromRequest(request, body, url);

      if (!masterKey || !MASTER_KEYS.has(masterKey)) {
        return jsonResponse({ error: 'UNAUTHORIZED', message: 'Se requiere Clave Maestra de Administrador.' }, 401);
      }

      const targetKey = (body.key || '').trim().toUpperCase();
      if (!targetKey) {
        return jsonResponse({ error: 'MISSING_KEY', message: 'Debe especificar la clave a actualizar.' }, 400);
      }

      try {
        let record = null;
        if (kv) {
          record = await kv.get(`LICENSE:${targetKey}`, 'json');
        }
        if (!record && BUILTIN_LICENSES[targetKey]) {
          record = { ...BUILTIN_LICENSES[targetKey] };
        }
        if (!record) {
          return jsonResponse({ error: 'KEY_NOT_FOUND', message: 'Clave no encontrada en Cloudflare KV.' }, 404);
        }

        // 1. Actualizar fecha de vencimiento / vigencia
        if ('expiresAt' in body) {
          record.expiresAt = body.expiresAt; // ISO string o null para perpetua
        }

        // 2. Actualizar estado (pausar o reanudar)
        if (body.status) {
          record.status = body.status; // 'active', 'paused', 'available'
        }

        // Si se extendió la vigencia con fecha futura y NO se solicitó pausar, reactivar si estaba expirada
        if (body.expiresAt && new Date(body.expiresAt) > new Date() && body.status !== 'paused' && record.status !== 'paused') {
          if (record.status === 'expired') {
            record.status = record.linkedUser ? 'active' : 'available';
          }
        }

        // 3. Actualizar límite de equipos permitidos para este usuario
        if (body.maxDevices !== undefined) {
          record.maxDevices = Math.max(1, parseInt(body.maxDevices, 10) || 1);
        }

        // 4. Restablecer dispositivos si se solicita
        if (body.resetDevices) {
          record.devices = [];
          record.deviceId = null;
        }

        record.updatedAt = new Date().toISOString();

        if (kv) {
          await kv.put(`LICENSE:${targetKey}`, JSON.stringify(record));
        }

        return jsonResponse({
          success: true,
          message: `Configuración de clave ${targetKey} actualizada correctamente en Cloudflare KV.`,
          license: record
        });
      } catch (err) {
        return jsonResponse({ success: false, error: err.message }, 500);
      }
    }

    // =========================================================================
    // 7. SINCRONIZACIÓN DE DATOS CLÍNICOS (ESCRITORIO & WEB VIA CLOUDFLARE KV)
    // =========================================================================

    // 7.A. Respaldo de Pacientes y Citas: POST /api/clinic/backup
    if (pathname === '/api/clinic/backup' && request.method === 'POST') {
      if (!kv) {
        return jsonResponse({ error: 'KV_NOT_BOUND', message: 'Cloudflare KV no está vinculado.' }, 503);
      }
      try {
        const payload = await request.json();
        const licenseKey = (request.headers.get('X-License-Key') || payload.licenseKey || '').trim().toUpperCase();
        const password = (payload.password || '').trim();

        if (!licenseKey) {
          return jsonResponse({ error: 'MISSING_LICENSE_KEY', message: 'Clave requerida para sincronización.' }, 400);
        }

        // Si no es la Master Key, verificar contraseña de privacidad si la clave la tiene configurada
        if (!MASTER_KEYS.has(licenseKey)) {
          const lic = await kv.get(`LICENSE:${licenseKey}`, 'json');
          if (lic && lic.passwordHash && password) {
            const h = await hashPassword(password);
            if (h !== lic.passwordHash) {
              return jsonResponse({ error: 'UNAUTHORIZED', message: 'Contraseña de privacidad clínica no válida.' }, 401);
            }
          }
        }

        const patients = Array.isArray(payload.patients) ? payload.patients : [];
        const appointments = Array.isArray(payload.appointments) ? payload.appointments : [];

        const clinicRecord = {
          updatedAt: payload.updatedAt || new Date().toISOString(),
          username: payload.username || 'Profesional Clínico',
          licenseKey,
          patients,
          appointments
        };

        await kv.put(`CLINIC_DATA:${licenseKey}`, JSON.stringify(clinicRecord));

        return jsonResponse({
          success: true,
          updatedAt: clinicRecord.updatedAt,
          patientsCount: patients.length,
          appointmentsCount: appointments.length,
          message: 'Datos clínicos sincronizados exitosamente en Cloudflare KV.'
        });
      } catch (e) {
        return jsonResponse({ success: false, error: e.message }, 500);
      }
    }

    // 7.B. Restauración de Pacientes y Citas: POST o GET /api/clinic/restore
    if (pathname === '/api/clinic/restore' && (request.method === 'GET' || request.method === 'POST')) {
      if (!kv) {
        return jsonResponse({ error: 'KV_NOT_BOUND', message: 'Cloudflare KV no está vinculado.' }, 503);
      }
      try {
        let licenseKey = (request.headers.get('X-License-Key') || url.searchParams.get('licenseKey') || '').trim().toUpperCase();
        let password = '';

        if (request.method === 'POST') {
          const body = await request.json().catch(() => ({}));
          licenseKey = (body.licenseKey || licenseKey).trim().toUpperCase();
          password = (body.password || '').trim();
        }

        if (!licenseKey) {
          return jsonResponse({ error: 'MISSING_LICENSE_KEY', message: 'Clave requerida para restaurar datos.' }, 400);
        }

        // Si la clave tiene contraseña en KV, verificarla
        if (!MASTER_KEYS.has(licenseKey) && password) {
          const lic = await kv.get(`LICENSE:${licenseKey}`, 'json');
          if (lic && lic.passwordHash) {
            const h = await hashPassword(password);
            if (h !== lic.passwordHash) {
              return jsonResponse({ error: 'UNAUTHORIZED', message: 'Contraseña de privacidad incorrecta.' }, 401);
            }
          }
        }

        const data = await kv.get(`CLINIC_DATA:${licenseKey}`, 'json');

        return jsonResponse({
          success: true,
          data: data || { patients: [], appointments: [], updatedAt: null }
        });
      } catch (e) {
        return jsonResponse({ success: false, error: e.message }, 500);
      }
    }

    // 8. Ruta no encontrada
    return jsonResponse({
      error: 'NOT_FOUND',
      message: 'Ruta no encontrada en el servicio PsiOS Cloud Hub.'
    }, 404);
  }
};
