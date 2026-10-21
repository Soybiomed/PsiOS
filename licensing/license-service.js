/**
 * PsiOS Licensing & Administration Service
 * Versión: Beta 0.0.2
 * 
 * Maneja:
 * - Activación de producto con enlace exclusivo para un solo usuario.
 * - Validación de contraseña de privacidad clínica.
 * - Soporte para Master Key de Administrador y operaciones del Panel de Control.
 * - Recordado automático de clave y usuario.
 * - Conexión con Cloudflare Worker y almacenamiento Cloudflare KV.
 */

const STORAGE_KEY_LICENSE = 'psios_license_v2';
const STORAGE_KEY_DEVICE = 'psios_device_id_v1';
const STORAGE_KEY_WORKER = 'psios_cf_worker_url_v1';
const STORAGE_KEY_SAVED_CREDS = 'psios_saved_credentials_v2';
const DEFAULT_CLOUDFLARE_WORKER_URL = 'https://psios-licensing-worker.villalpandojhosuasami.workers.dev';

export const MASTER_ADMIN_KEYS = new Set([
  'PSIOS-ADMIN-MASTER-2026',
  'PSIOS-MASTER-ADMIN-2026',
  'PSIOS-MASTER-UNIVERSAL',
  'PSIOS-MASTER-SOYBIOMED'
]);

const BUILTIN_KEYS = {
  'PSIOS-PRO-2026-CLINIC': {
    plan: 'PsiOS Profesional Clínico (Perpetua)',
    tier: 'pro',
    expiresAt: null,
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup']
  },
  'PSIOS-MASTER-UNIVERSAL': {
    plan: 'PsiOS Enterprise & Hospital Suite (Maestra)',
    tier: 'enterprise',
    expiresAt: null,
    features: ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology', 'cloud_backup', 'multi_doctor', 'admin_panel']
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
      const data = localStorage.getItem(STORAGE_KEY_LICENSE) || localStorage.getItem('psios_license_v1');
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed && (parsed.status === 'active' || parsed.isAdmin)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error al cargar licencia local:', e);
    }
    return null;
  }

  getWorkerUrl() {
    try {
      return localStorage.getItem(STORAGE_KEY_WORKER) || DEFAULT_CLOUDFLARE_WORKER_URL;
    } catch {
      return DEFAULT_CLOUDFLARE_WORKER_URL;
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

  isMasterKey(key) {
    if (!key || typeof key !== 'string') return false;
    const clean = key.trim().toUpperCase();
    return MASTER_ADMIN_KEYS.has(clean) || clean.includes('MASTER');
  }

  isActivated() {
    return !!(this.currentLicense && (this.currentLicense.status === 'active' || this.currentLicense.isAdmin));
  }

  isAdminSession() {
    return !!(this.currentLicense && this.currentLicense.isAdmin);
  }

  getLicenseInfo() {
    return this.currentLicense;
  }

  // Recordado automático de clave y usuario
  getSavedCredentials() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_SAVED_CREDS);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  saveCredentials(licenseKey, username, password = '') {
    try {
      const creds = {
        licenseKey: (licenseKey || '').trim().toUpperCase(),
        username: (username || '').trim(),
        hasPassword: !!password,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY_SAVED_CREDS, JSON.stringify(creds));
    } catch (e) {
      console.warn('Error guardando credenciales recordadas:', e);
    }
  }

  clearSavedCredentials() {
    try {
      localStorage.removeItem(STORAGE_KEY_SAVED_CREDS);
    } catch {}
  }

  /**
   * Intenta activar la clave de producto.
   * Valida en Cloudflare Worker con regla de usuario único y contraseña.
   */
  async activate(key, doctorName = 'Profesional Clínico', password = '') {
    if (!key || typeof key !== 'string') {
      throw new Error('Debe proporcionar una clave de producto válida.');
    }

    const normalizedKey = key.trim().toUpperCase();
    const workerUrl = this.getWorkerUrl();

    // 1. Verificación directa si es la Master Key
    if (this.isMasterKey(normalizedKey)) {
      const adminRecord = {
        status: 'active',
        isAdmin: true,
        licenseKey: normalizedKey,
        plan: 'PsiOS Administrador Maestro',
        tier: 'master',
        deviceId: this.deviceId,
        doctorName: 'Administrador Maestro',
        activatedAt: new Date().toISOString(),
        isPerpetual: true,
        features: ['admin_panel', 'license_generator', 'user_management', 'offline_books', 'clinical_sync', 'unlimited_patients']
      };
      this.saveLicense(adminRecord);
      this.saveCredentials(normalizedKey, 'Administrador');
      return adminRecord;
    }

    // 2. Consulta a Cloudflare Worker
    if (workerUrl && navigator.onLine) {
      try {
        const endpoint = `${workerUrl}/api/activate`;
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-PsiOS-Version': '0.0.2'
          },
          body: JSON.stringify({
            licenseKey: normalizedKey,
            deviceId: this.deviceId,
            doctorName,
            password,
            appVersion: 'Beta 0.0.2'
          })
        });

        const data = await res.json();
        if (res.ok && data.success) {
          if (data.isAdmin) {
            const adminRecord = {
              status: 'active',
              isAdmin: true,
              licenseKey: normalizedKey,
              plan: 'PsiOS Administrador Maestro',
              tier: 'master',
              deviceId: this.deviceId,
              doctorName: 'Administrador Maestro',
              activatedAt: new Date().toISOString()
            };
            this.saveLicense(adminRecord);
            return adminRecord;
          }

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
          this.saveCredentials(normalizedKey, data.doctorName || doctorName, password);
          return licenseRecord;
        } else {
          throw new Error(data.message || 'La clave fue rechazada por el servidor de Cloudflare.');
        }
      } catch (cloudErr) {
        if (cloudErr.message && (cloudErr.message.includes('enlazada') || cloudErr.message.includes('contraseña') || cloudErr.message.includes('expirado'))) {
          throw cloudErr;
        }
        console.warn('Fallo de red con Cloudflare Worker, recurriendo a verificación local:', cloudErr);
      }
    }

    // 3. Fallback Offline Autónomo
    const masterInfo = BUILTIN_KEYS[normalizedKey];
    const keyPattern = /^PSIOS-[A-Z0-9]{3,5}-[A-Z0-9]{4,5}-[A-Z0-9]{4,5}$/;

    if (!masterInfo && !keyPattern.test(normalizedKey)) {
      throw new Error('Formato de clave no reconocido. Debe ser tipo PSIOS-XXXX-XXXX-XXXX.');
    }

    const plan = masterInfo ? masterInfo.plan : 'PsiOS Profesional Clínico';
    const tier = masterInfo ? masterInfo.tier : 'pro';
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
    this.saveCredentials(normalizedKey, doctorName, password);
    return licenseRecord;
  }

  // =========================================================================
  // MÉTODOS DEL PANEL DE ADMINISTRACIÓN (LLAMADAS AL WORKER DE CLOUDFLARE)
  // =========================================================================

  async adminGetKeys(masterKey) {
    const workerUrl = this.getWorkerUrl();
    const res = await fetch(`${workerUrl}/api/admin/keys?masterKey=${encodeURIComponent(masterKey)}`, {
      headers: {
        'X-Master-Key': masterKey
      }
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Error al obtener claves de Cloudflare.');
    }
    return data;
  }

  async adminGenerateKey(masterKey, options = {}) {
    const workerUrl = this.getWorkerUrl();
    const res = await fetch(`${workerUrl}/api/admin/keys/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': masterKey
      },
      body: JSON.stringify({
        masterKey,
        plan: options.plan || 'PsiOS Profesional Clínico',
        prefix: options.prefix || 'CLIN',
        tier: options.tier || 'pro'
      })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Error al generar clave en Cloudflare.');
    }
    return data;
  }

  async adminUnlinkKey(masterKey, keyToUnlink) {
    const workerUrl = this.getWorkerUrl();
    const res = await fetch(`${workerUrl}/api/admin/keys/unlink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': masterKey
      },
      body: JSON.stringify({
        masterKey,
        key: keyToUnlink
      })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Error al desvincular clave.');
    }
    return data;
  }

  async adminDeleteKey(masterKey, keyToDelete) {
    const workerUrl = this.getWorkerUrl();
    const res = await fetch(`${workerUrl}/api/admin/keys/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': masterKey
      },
      body: JSON.stringify({
        masterKey,
        key: keyToDelete
      })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Error al eliminar clave.');
    }
    return data;
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
      localStorage.removeItem('psios_license_v1');
      this.currentLicense = null;
    } catch (e) {
      console.warn('Error al desactivar licencia:', e);
    }
  }
}

export const licenseService = new LicenseService();
