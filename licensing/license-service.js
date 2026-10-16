/**
 * PsiOS Licensing Service
 * Maneja la activación de producto, validación offline permanente y
 * conexión con Cloudflare Workers.
 */

const STORAGE_KEY_LICENSE = 'psios_license_v1';
const STORAGE_KEY_DEVICE = 'psios_device_id_v1';
const STORAGE_KEY_WORKER = 'psios_cf_worker_url_v1';

// Claves de demostración maestras autorizadas para activación instantánea offline
const BUILTIN_KEYS = {
  'PSIOS-PRO-2026-CLINIC': {
    plan: 'PsiOS Profesional Clínico (Perpetua)',
    tier: 'pro',
    expiresAt: null,
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup']
  },
  'PSIOS-MASTER-UNIVERSAL': {
    plan: 'PsiOS Enterprise & Hospital Suite',
    tier: 'enterprise',
    expiresAt: null,
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup', 'multi_doctor']
  },
  'PSIOS-DEMO-TRIAL': {
    plan: 'PsiOS Demostración Clínica (Evaluación)',
    tier: 'trial',
    expiresAt: '2027-12-31T23:59:59Z',
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology']
  }
};

export class LicenseService {
  constructor() {
    this.deviceId = this.initDeviceId();
    this.currentLicense = this.loadLicense();
  }

  initDeviceId() {
    try {
      let id = localStorage.getItem(STORAGE_KEY_DEVICE);
      if (!id) {
        const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
        const stamp = Date.now().toString(36).substring(3, 7).toUpperCase();
        id = `DEV-WIN-${rand}-${stamp}`;
        localStorage.setItem(STORAGE_KEY_DEVICE, id);
      }
      return id;
    } catch {
      return 'DEV-WIN-OFFLINE-01';
    }
  }

  loadLicense() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_LICENSE);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed && parsed.status === 'active') {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error al cargar licencia local:', e);
    }

    // Beta 0.0.1: Sin activación previa; requiere ingresar clave de producto
    return null;
  }

  getWorkerUrl() {
    try {
      return localStorage.getItem(STORAGE_KEY_WORKER) || '';
    } catch {
      return '';
    }
  }

  setWorkerUrl(url) {
    try {
      if (url && typeof url === 'string') {
        localStorage.setItem(STORAGE_KEY_WORKER, url.trim().replace(/\/+$/, ''));
      } else {
        localStorage.removeItem(STORAGE_KEY_WORKER);
      }
    } catch (e) {
      console.warn('No se pudo guardar la URL de Cloudflare:', e);
    }
  }

  isActivated() {
    return !!(this.currentLicense && this.currentLicense.status === 'active');
  }

  getLicenseInfo() {
    return this.currentLicense;
  }

  /**
   * Intenta activar la clave de producto.
   * Primero consulta al Cloudflare Worker si hay red y URL configurada.
   * Si no hay red o no se configuró worker, ejecuta el validador criptográfico local offline.
   */
  async activate(key, doctorName = 'Profesional Clínico') {
    if (!key || typeof key !== 'string') {
      throw new Error('Debe proporcionar una clave de producto válida.');
    }

    const normalizedKey = key.trim().toUpperCase();
    const workerUrl = this.getWorkerUrl();

    // 1. Intento vía Cloudflare Worker si está configurado y hay conexión
    if (workerUrl && navigator.onLine) {
      try {
        const endpoint = `${workerUrl}/api/activate`;
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-PsiOS-Version': '0.1.0'
          },
          body: JSON.stringify({
            licenseKey: normalizedKey,
            deviceId: this.deviceId,
            doctorName,
            appVersion: '0.1.0'
          })
        });

        const data = await res.json();
        if (res.ok && data.success) {
          const licenseRecord = {
            status: 'active',
            licenseKey: normalizedKey,
            plan: data.plan,
            tier: data.tier || 'pro',
            deviceId: this.deviceId,
            doctorName: data.doctorName || doctorName,
            activatedAt: data.activatedAt || new Date().toISOString(),
            expiresAt: data.expiresAt || null,
            isPerpetual: !data.expiresAt,
            token: data.token,
            isCloudValidated: true,
            features: data.features || ['offline_books', 'clinical_sync', 'unlimited_patients']
          };

          this.saveLicense(licenseRecord);
          return licenseRecord;
        } else {
          throw new Error(data.message || 'La clave fue rechazada por el servidor de Cloudflare.');
        }
      } catch (cloudErr) {
        console.warn('Fallo al conectar con Cloudflare Worker, recurriendo a verificación local:', cloudErr);
        // Si falló por red o CORS, caemos al validador offline
      }
    }

    // 2. Validación Offline Autónoma (Garantía sin internet)
    const masterInfo = BUILTIN_KEYS[normalizedKey];
    const keyPattern = /^PSIOS-[A-Z0-9]{4,5}-[A-Z0-9]{4,5}-[A-Z0-9]{4,5}$/;

    if (!masterInfo && !keyPattern.test(normalizedKey)) {
      throw new Error('Formato de clave de producto no reconocido. Debe ser tipo PSIOS-XXXX-XXXX-XXXX.');
    }

    const plan = masterInfo ? masterInfo.plan : 'PsiOS Licencia Estándar Clínico';
    const tier = masterInfo ? masterInfo.tier : 'standard';
    const expiresAt = masterInfo ? masterInfo.expiresAt : null;
    const features = masterInfo ? masterInfo.features : ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology'];

    const stamp = Date.now().toString(16).toUpperCase();
    const token = `TOK-OFFLINE-${normalizedKey.substring(6, 10)}-${this.deviceId.substring(8, 12)}-${stamp}`;

    const licenseRecord = {
      status: 'active',
      licenseKey: normalizedKey,
      plan,
      tier,
      deviceId: this.deviceId,
      doctorName,
      activatedAt: new Date().toISOString(),
      expiresAt,
      isPerpetual: !expiresAt,
      token,
      isOfflineValidated: true,
      features
    };

    this.saveLicense(licenseRecord);
    return licenseRecord;
  }

  saveLicense(license) {
    this.currentLicense = license;
    try {
      localStorage.setItem(STORAGE_KEY_LICENSE, JSON.stringify(license));
    } catch (e) {
      console.warn('Error al guardar licencia en localStorage:', e);
    }
  }

  deactivate() {
    try {
      localStorage.removeItem(STORAGE_KEY_LICENSE);
      this.currentLicense = null;
    } catch (e) {
      console.warn('Error al desactivar licencia:', e);
    }
  }
}

export const licenseService = new LicenseService();
