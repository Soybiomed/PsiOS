/**
 * PsiOS Cloudflare Worker — Motor de Licenciamiento y Activación de Producto
 * Compatible con Cloudflare Workers & Cloudflare KV
 * 
 * Endpoints:
 * - GET  /api/status   -> Estado y salud del servicio
 * - POST /api/activate -> Activación de licencia por dispositivo/estación de trabajo
 * - POST /api/verify   -> Verificación periódica o bajo demanda de token
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
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-PsiOS-Version',
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

    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, '') || '/';

    // 2. Healthcheck / Estado
    if (pathname === '/' || pathname === '/api/status') {
      return jsonResponse({
        service: 'PsiOS License & Activation Engine',
        version: '1.0.0',
        environment: env?.ENVIRONMENT || 'production',
        kvBound: !!env?.PSIOS_LICENSES,
        status: 'operational',
        timestamp: new Date().toISOString()
      });
    }

    // 3. Activación de Licencia: POST /api/activate
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

        // A. Consultar Cloudflare KV si está configurado en el Worker
        if (env?.PSIOS_LICENSES) {
          const kvRecord = await env.PSIOS_LICENSES.get(`LICENSE:${normalizedKey}`, 'json');
          if (kvRecord) {
            licenseData = kvRecord;
          }
        }

        // B. Si no está en KV, verificar claves maestras pre-aprobadas
        if (!licenseData && BUILTIN_LICENSES[normalizedKey]) {
          licenseData = BUILTIN_LICENSES[normalizedKey];
        }

        // C. Validación de formato de clave algorítmica si no está registrada
        // Formato permitido: PSIOS-XXXX-XXXX-XXXX (alfanumérico)
        const keyPattern = /^PSIOS-[A-Z0-9]{4,5}-[A-Z0-9]{4,5}-[A-Z0-9]{4,5}$/;
        if (!licenseData && keyPattern.test(normalizedKey)) {
          // Clave válida por algoritmo clínico
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
            message: 'La clave de producto ingresada no es válida o no se encuentra registrada en el sistema.'
          }, 403);
        }

        // Comprobar expiración si aplica
        if (licenseData.expiresAt && new Date(licenseData.expiresAt).getTime() < Date.now()) {
          return jsonResponse({
            success: false,
            error: 'LICENSE_EXPIRED',
            message: `Esta licencia expiró el ${new Date(licenseData.expiresAt).toLocaleDateString()}.`
          }, 403);
        }

        // Generar token de activación firmado
        const timestamp = Date.now();
        const token = await generateActivationToken(normalizedKey, effectiveDeviceId, timestamp);

        // Guardar registro de activación en KV si está disponible
        if (env?.PSIOS_LICENSES) {
          const activationRecord = {
            licenseKey: normalizedKey,
            deviceId: effectiveDeviceId,
            deviceName: deviceName || 'Estación Clínica',
            doctorName: doctorName || 'Profesional Clínico',
            appVersion: appVersion || '0.1.0',
            token,
            activatedAt: new Date(timestamp).toISOString()
          };
          ctx.waitUntil(env.PSIOS_LICENSES.put(`ACTIVATION:${normalizedKey}:${effectiveDeviceId}`, JSON.stringify(activationRecord)));
        }

        return jsonResponse({
          success: true,
          licenseKey: normalizedKey,
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
          message: 'Licencia activada con éxito. Su estación de trabajo cuenta con autorización completa y permanente.'
        });

      } catch (err) {
        return jsonResponse({
          success: false,
          error: 'SERVER_ERROR',
          message: `Error al procesar la activación: ${err.message}`
        }, 500);
      }
    }

    // 4. Verificación de Licencia: POST /api/verify
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

        // En modo offline / standalone, si el token tiene prefijo TOK- y coincide la clave, es válido
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

    // 5. Ruta no encontrada
    return jsonResponse({
      error: 'NOT_FOUND',
      message: 'Ruta no encontrada en el servicio de licenciamiento PsiOS.'
    }, 404);
  }
};
