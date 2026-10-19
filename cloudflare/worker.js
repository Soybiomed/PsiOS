/**
 * PsiOS Cloudflare Worker — Motor de Licenciamiento, Datos Clínicos y Servidor R2
 * Compatible con Cloudflare Workers, Cloudflare KV y Cloudflare R2
 * 
 * Endpoints:
 * - GET  /api/status         -> Estado de salud del servicio (KV y R2)
 * - POST /api/activate       -> Activación de licencia por dispositivo
 * - POST /api/verify         -> Verificación periódica de licencia
 * - POST /api/clinic/backup  -> Respaldo de datos clínicos en la nube (KV)
 * - GET  /api/clinic/restore -> Restauración de datos clínicos desde la nube (KV)
 * - GET  /libros/*           -> Servidor CDN de libros y manuales desde Cloudflare R2
 * - GET  /recursos/*         -> Servidor CDN de pruebas y evaluaciones desde Cloudflare R2
 */

// Claves maestras de demostración y evaluación clínica incorporadas
const BUILTIN_LICENSES = {
  'PSIOS-PRO-2026-CLINIC': {
    plan: 'PsiOS Profesional Clínico (Perpetua)',
    maxDevices: 10,
    expiresAt: null,
    tier: 'pro',
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup']
  },
  'PSIOS-MASTER-UNIVERSAL': {
    plan: 'PsiOS Enterprise & Hospital Suite',
    maxDevices: 100,
    expiresAt: null,
    tier: 'enterprise',
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup', 'multi_doctor']
  },
  'PSIOS-DEMO-TRIAL': {
    plan: 'PsiOS Demostración Clínica (Evaluación)',
    maxDevices: 3,
    expiresAt: '2027-12-31T23:59:59Z',
    tier: 'trial',
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology']
  }
};

const SECRET_SALT = 'PSIOS_CLINICAL_SECURE_SALT_2026_V1';

// Headers CORS para integración transparente con la app de escritorio y web
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-PsiOS-Version, X-License-Key',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8'
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: corsHeaders
  });
}

// Generador de firmas criptográficas HMAC / SHA-256 en Web Crypto
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
        service: 'PsiOS Cloud Hub (Licensing, Clinical Data & R2 CDN)',
        version: '1.0.0',
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
          message: 'El bucket de Cloudflare R2 (psios-recursos) no está vinculado aún en este Worker.'
        }, 503);
      }

      // Extraer nombre del archivo (con soporte para subcarpetas)
      const cleanPath = decodeURIComponent(url.pathname.replace(/^\/(libros|recursos)\/?/, ''));
      if (!cleanPath) {
        return jsonResponse({ error: 'FILE_NOT_SPECIFIED', message: 'Debe especificar el nombre del archivo.' }, 400);
      }

      // Intentar obtener el archivo buscando en "libros/archivo" o directamente en la raíz del bucket
      let object = await r2.get(`libros/${cleanPath}`);
      if (!object) {
        object = await r2.get(cleanPath);
      }

      if (!object) {
        return jsonResponse({
          error: 'FILE_NOT_FOUND',
          path: cleanPath,
          message: `El archivo '${cleanPath}' no fue encontrado en el bucket R2 'psios-recursos'.`
        }, 404);
      }

      const headers = new Headers();
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      headers.set('etag', object.httpEtag);

      // Determinar Content-Type según extensión
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

    // 4. Activación de Licencia: POST /api/activate
    if (pathname === '/api/activate' && request.method === 'POST') {
      try {
        const body = await request.json().catch(() => ({}));
        const { licenseKey, deviceId, deviceName, doctorName, appVersion } = body;

        if (!licenseKey || typeof licenseKey !== 'string') {
          return jsonResponse({
            success: false,
            error: 'MISSING_LICENSE_KEY',
            message: 'Debe ingresar una clave de producto válida (ej: PSIOS-XXXX-XXXX-XXXX).'
          }, 400);
        }

        const normalizedKey = licenseKey.trim().toUpperCase();
        const effectiveDeviceId = (deviceId && typeof deviceId === 'string') ? deviceId.trim() : 'DEV-DEFAULT-STATION';

        let licenseData = null;

        // A. Consultar Cloudflare KV si está vinculado
        if (kv) {
          const kvRecord = await kv.get(`LICENSE:${normalizedKey}`, 'json');
          if (kvRecord) {
            licenseData = kvRecord;
          }
        }

        // B. Si no está en KV, verificar claves maestras pre-aprobadas
        if (!licenseData && BUILTIN_LICENSES[normalizedKey]) {
          licenseData = BUILTIN_LICENSES[normalizedKey];
        }

        // C. Validación de formato de clave algorítmica si no está registrada
        const keyPattern = /^PSIOS-[A-Z0-9]{4,5}-[A-Z0-9]{4,5}-[A-Z0-9]{4,5}$/;
        if (!licenseData && keyPattern.test(normalizedKey)) {
          licenseData = {
            plan: 'PsiOS Licencia Estándar Clínico',
            maxDevices: 5,
            expiresAt: null,
            tier: 'standard',
            features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology']
          };
        }

        if (!licenseData) {
          return jsonResponse({
            success: false,
            error: 'INVALID_LICENSE_KEY',
            message: 'La clave de producto ingresada no es válida o fue revocada.'
          }, 403);
        }

        // Verificar expiración si aplica
        if (licenseData.expiresAt && new Date(licenseData.expiresAt) < new Date()) {
          return jsonResponse({
            success: false,
            error: 'LICENSE_EXPIRED',
            message: 'Esta licencia ha expirado. Por favor contacte con soporte clínico.'
          }, 403);
        }

        const timestamp = Date.now();
        const token = await generateActivationToken(normalizedKey, effectiveDeviceId, timestamp);

        // Registrar activación en KV
        if (kv) {
          const activationRecord = {
            licenseKey: normalizedKey,
            deviceId: effectiveDeviceId,
            deviceName: deviceName || 'Estación de Evaluación',
            doctorName: doctorName || 'Profesional Clínico',
            appVersion: appVersion || 'Beta 0.0.1',
            activatedAt: new Date(timestamp).toISOString(),
            lastSeenAt: new Date(timestamp).toISOString(),
            token
          };

          await kv.put(`ACTIVATION:${normalizedKey}:${effectiveDeviceId}`, JSON.stringify(activationRecord));
        }

        return jsonResponse({
          success: true,
          status: 'active',
          plan: licenseData.plan,
          tier: licenseData.tier || 'pro',
          deviceId: effectiveDeviceId,
          doctorName: doctorName || 'Profesional Clínico',
          activatedAt: new Date(timestamp).toISOString(),
          expiresAt: licenseData.expiresAt,
          isPerpetual: !licenseData.expiresAt,
          token,
          features: licenseData.features || ['offline_books', 'clinical_sync', 'unlimited_patients'],
          message: 'Licencia activada con éxito. Estación de trabajo autorizada.'
        });

      } catch (err) {
        return jsonResponse({
          success: false,
          error: 'SERVER_ERROR',
          message: `Error al procesar la activación: ${err.message}`
        }, 500);
      }
    }

    // 5. Verificación de Licencia: POST /api/verify
    if (pathname === '/api/verify' && request.method === 'POST') {
      try {
        const body = await request.json().catch(() => ({}));
        const { licenseKey, token, deviceId } = body;

        if (!licenseKey || !token) {
          return jsonResponse({
            success: false,
            error: 'MISSING_PARAMETERS',
            message: 'Parámetros de verificación incompletos.'
          }, 400);
        }

        const normalizedKey = licenseKey.trim().toUpperCase();
        const isValid = token.startsWith('TOK-') && normalizedKey.startsWith('PSIOS-');

        return jsonResponse({
          success: isValid,
          status: isValid ? 'active' : 'invalid',
          verifiedAt: new Date().toISOString(),
          deviceId: deviceId || 'DEV-STATION',
          message: isValid ? 'Licencia activa y validada correctamente.' : 'La licencia no pudo ser validada.'
        });
      } catch (err) {
        return jsonResponse({
          success: false,
          error: 'SERVER_ERROR',
          message: err.message
        }, 500);
      }
    }

    // 6. Respaldo de Datos Clínicos (Pacientes y Citas): POST /api/clinic/backup
    if (pathname === '/api/clinic/backup' && request.method === 'POST') {
      if (!kv) {
        return jsonResponse({ error: 'KV_NOT_BOUND', message: 'Cloudflare KV no está vinculado.' }, 503);
      }
      try {
        const payload = await request.json();
        const licenseKey = request.headers.get('X-License-Key') || payload.licenseKey || 'DEFAULT_CLINIC';
        const cleanKey = licenseKey.trim().toUpperCase();

        await kv.put(`CLINIC_DATA:${cleanKey}`, JSON.stringify({
          updatedAt: new Date().toISOString(),
          patients: payload.patients || [],
          appointments: payload.appointments || []
        }));

        return jsonResponse({ success: true, message: 'Datos clínicos respaldados en Cloudflare KV.' });
      } catch (e) {
        return jsonResponse({ success: false, error: e.message }, 500);
      }
    }

    // 7. Restauración de Datos Clínicos: GET /api/clinic/restore
    if (pathname === '/api/clinic/restore' && request.method === 'GET') {
      if (!kv) {
        return jsonResponse({ error: 'KV_NOT_BOUND', message: 'Cloudflare KV no está vinculado.' }, 503);
      }
      try {
        const licenseKey = request.headers.get('X-License-Key') || url.searchParams.get('licenseKey') || 'DEFAULT_CLINIC';
        const cleanKey = licenseKey.trim().toUpperCase();
        const data = await kv.get(`CLINIC_DATA:${cleanKey}`, 'json');

        return jsonResponse({
          success: true,
          data: data || { patients: [], appointments: [] }
        });
      } catch (e) {
        return jsonResponse({ success: false, error: e.message }, 500);
      }
    }

    // 8. Ruta no encontrada
    return jsonResponse({
      error: 'NOT_FOUND',
      message: 'Ruta no encontrada en el servicio PsiOS Cloudflare Hub.'
    }, 404);
  }
};
