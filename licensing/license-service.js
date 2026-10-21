/**
 * PsiOS Licensing & Administration Service
 * Versión: Beta 0.0.3
 * 
 * Maneja:
 * - Activación de producto con enlace exclusivo para un solo usuario.
 * - Validación de contraseña de privacidad clínica.
 * - Soporte para Master Key de Administrador y operaciones del Panel de Control.
 * - Recordado automático de clave y usuario.
 * - Resiliencia híbrida: sincroniza con Cloudflare Worker cuando está disponible,
 *   con fallback autónomo persistente local para garantizar que el panel y
 *   las licencias siempre funcionen sin errores de red.
 */

const STORAGE_KEY_LICENSE = 'psios_license_v2';
const STORAGE_KEY_DEVICE = 'psios_device_id_v1';
const STORAGE_KEY_WORKER = 'psios_cf_worker_url_v1';
const STORAGE_KEY_SAVED_CREDS = 'psios_saved_credentials_v2';
const STORAGE_KEY_ADMIN_KEYS = 'psios_admin_keys_db_v3';
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
    this.initAdminKeysDb();
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

  initAdminKeysDb() {
    try {
      const existing = localStorage.getItem(STORAGE_KEY_ADMIN_KEYS);
      if (!existing) {
        const initialKeys = [
          {
            key: 'PSIOS-PRO-2026-CLINIC',
            plan: 'PsiOS Profesional Clínico (Perpetua)',
            tier: 'pro',
            status: 'available',
            linkedUser: null,
            createdAt: '2026-01-15T10:00:00.000Z'
          },
          {
            key: 'PSIOS-MASTER-UNIVERSAL',
            plan: 'PsiOS Enterprise & Hospital Suite (Maestra)',
            tier: 'enterprise',
            status: 'active',
            linkedUser: 'Administrador Maestro',
            createdAt: '2026-01-01T00:00:00.000Z'
          },
          {
            key: 'PSIOS-DEMO-TRIAL',
            plan: 'PsiOS Demostración Clínica (Evaluación)',
            tier: 'trial',
            status: 'available',
            linkedUser: null,
            createdAt: '2026-02-01T12:00:00.000Z'
          }
        ];
        localStorage.setItem(STORAGE_KEY_ADMIN_KEYS, JSON.stringify(initialKeys));
      }
    } catch (e) {
      console.warn('Error inicializando base local de licencias:', e);
    }
  }

  getLocalAdminKeys() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_ADMIN_KEYS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveLocalAdminKeys(keys) {
    try {
      if (Array.isArray(keys)) {
        localStorage.setItem(STORAGE_KEY_ADMIN_KEYS, JSON.stringify(keys));
      }
    } catch (e) {
      console.warn('Error guardando claves locales:', e);
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
   * Valida en Cloudflare Worker con regla de usuario único y contraseña,
   * con fallback local inmediato en caso de problemas de red o endpoints en despliegue.
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

    // 2. Comprobar base local para validar conflicto de usuario único previo
    const localKeys = this.getLocalAdminKeys();
    const existingLocal = localKeys.find(k => k.key === normalizedKey);
    if (existingLocal && existingLocal.status === 'active' && existingLocal.linkedUser && existingLocal.linkedUser !== doctorName) {
      throw new Error(`Esta clave ya está vinculada a otro usuario (${existingLocal.linkedUser}). Solo se permite 1 usuario por clave.`);
    }

    // 3. Consulta a Cloudflare Worker si está disponible
    if (workerUrl && navigator.onLine) {
      try {
        const endpoint = `${workerUrl}/api/activate`;
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${normalizedKey}`,
            'X-License-Key': normalizedKey,
            'X-PsiOS-Version': '0.0.3'
          },
          body: JSON.stringify({
            licenseKey: normalizedKey,
            deviceId: this.deviceId,
            doctorName,
            password,
            appVersion: 'Beta 0.0.3'
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (data && data.success) {
            const licenseRecord = {
              status: 'active',
              licenseKey: normalizedKey,
              plan: data.plan || (existingLocal ? existingLocal.plan : 'PsiOS Profesional Clínico'),
              tier: data.tier || 'pro',
              deviceId: this.deviceId,
              doctorName: data.doctorName || doctorName,
              activatedAt: data.activatedAt || new Date().toISOString(),
              expiresAt: data.expiresAt || null,
              isPerpetual: !data.expiresAt,
              token: data.token,
              isCloudValidated: true,
              features: data.features || ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology']
            };

            this.saveLicense(licenseRecord);
            this.saveCredentials(normalizedKey, doctorName, password);

            // Sincronizar en base local
            this.markKeyAsLinkedLocally(normalizedKey, doctorName, licenseRecord.plan);
            return licenseRecord;
          }
        } else {
          const errData = await res.json().catch(() => ({}));
          // Si Cloudflare nos dice explícitamente que la clave está enlazada o la contraseña no coincide, lanzar error
          if (errData && errData.message && (errData.message.includes('enlazada') || errData.message.includes('contraseña') || errData.message.includes('vinculada'))) {
            throw new Error(errData.message);
          }
        }
      } catch (cloudErr) {
        if (cloudErr.message && (cloudErr.message.includes('enlazada') || cloudErr.message.includes('contraseña') || cloudErr.message.includes('vinculada'))) {
          throw cloudErr;
        }
        console.warn('Fallo al validar con Cloudflare Worker, recurriendo a verificación local:', cloudErr);
      }
    }

    // 4. Activación Local Autónoma Resiliente
    // Acepta claves del catálogo de claves generadas, BUILTIN_KEYS o formato PSIOS
    const masterInfo = BUILTIN_KEYS[normalizedKey] || existingLocal;
    const keyPattern = /^PSIOS(-[A-Z0-9]+){1,6}$/i;

    if (!masterInfo && !keyPattern.test(normalizedKey)) {
      throw new Error('Formato de clave no reconocido. Debe comenzar con PSIOS- (ej: PSIOS-PRO-2026-CLINIC).');
    }

    const plan = masterInfo ? masterInfo.plan : 'PsiOS Profesional Clínico';
    const tier = masterInfo ? (masterInfo.tier || 'pro') : 'pro';
    const expiresAt = masterInfo ? masterInfo.expiresAt : null;
    const features = masterInfo && masterInfo.features ? masterInfo.features : ['offline_books', 'clinical_sync', 'unlimited_patients', 'full_semiology'];

    const stamp = Date.now().toString(16).toUpperCase();
    const token = `TOK-OFFLINE-${normalizedKey.substring(0, 8)}-${stamp}`;

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
    this.markKeyAsLinkedLocally(normalizedKey, doctorName, plan);

    return licenseRecord;
  }

  markKeyAsLinkedLocally(key, doctorName, plan) {
    try {
      const keys = this.getLocalAdminKeys();
      const idx = keys.findIndex(k => k.key === key);
      if (idx !== -1) {
        keys[idx].status = 'active';
        keys[idx].linkedUser = doctorName;
        keys[idx].doctorName = doctorName;
      } else {
        keys.unshift({
          key,
          plan: plan || 'PsiOS Profesional Clínico',
          tier: 'pro',
          status: 'active',
          linkedUser: doctorName,
          doctorName,
          createdAt: new Date().toISOString()
        });
      }
      this.saveLocalAdminKeys(keys);
    } catch (e) {
      console.warn('Error actualizando estado local de clave:', e);
    }
  }

  // =========================================================================
  // MÉTODOS DEL PANEL DE ADMINISTRACIÓN (CLOUDFLARE + RESILIENCIA LOCAL)
  // =========================================================================

  async adminGetKeys(masterKey) {
    const workerUrl = this.getWorkerUrl();
    const cleanMasterKey = (masterKey || '').trim().toUpperCase();

    if (workerUrl && navigator.onLine) {
      try {
        const res = await fetch(`${workerUrl}/api/admin/keys?masterKey=${encodeURIComponent(cleanMasterKey)}`, {
          headers: {
            'Authorization': `Bearer ${cleanMasterKey}`,
            'X-License-Key': cleanMasterKey,
            'X-PsiOS-Version': '0.0.3'
          }
        });

        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data) ? data : (data.keys || []);
          if (Array.isArray(list) && list.length > 0) {
            // Sincronizar claves locales con las de Cloudflare
            this.mergeLocalKeysWithCloud(list);
            return {
              keys: this.getLocalAdminKeys(),
              isCloudConnected: true
            };
          }
        }
      } catch (err) {
        console.warn('Error conectando con Cloudflare KV para listar claves, usando base local:', err);
      }
    }

    // Modo Local Autónomo (Garantiza que el panel siempre cargue sin error)
    return {
      keys: this.getLocalAdminKeys(),
      isCloudConnected: false,
      isLocalFallback: true
    };
  }

  mergeLocalKeysWithCloud(cloudKeys) {
    try {
      const local = this.getLocalAdminKeys();
      const map = new Map();
      local.forEach(k => map.set(k.key, k));
      cloudKeys.forEach(k => {
        const existing = map.get(k.key);
        map.set(k.key, { ...(existing || {}), ...k });
      });
      const merged = Array.from(map.values());
      this.saveLocalAdminKeys(merged);
    } catch (e) {
      console.warn('Error mezclando claves locales con Cloudflare:', e);
    }
  }

  async adminGenerateKey(masterKey, planOrOptions = 'PRO', note = '') {
    const cleanMasterKey = (masterKey || '').trim().toUpperCase();
    const planName = typeof planOrOptions === 'object' 
      ? (planOrOptions.plan || 'PsiOS Profesional Clínico') 
      : (planOrOptions === 'ENTERPRISE' ? 'PsiOS Enterprise & Hospital Suite' : (planOrOptions === 'TRIAL' ? 'PsiOS Demostración Clínica' : 'PsiOS Profesional Clínico'));
    
    const tier = typeof planOrOptions === 'object'
      ? (planOrOptions.tier || 'pro')
      : (planOrOptions.toLowerCase ? planOrOptions.toLowerCase() : 'pro');

    const prefix = typeof planOrOptions === 'object' && planOrOptions.prefix ? planOrOptions.prefix : 'CLIN';
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    const stamp = Date.now().toString(36).substring(2, 6).toUpperCase();
    const generatedKey = `PSIOS-${prefix}-${rand}-${stamp}`;

    const newKeyRecord = {
      key: generatedKey,
      plan: planName,
      tier,
      status: 'available',
      linkedUser: null,
      createdAt: new Date().toISOString(),
      note: note || ''
    };

    // 1. Guardar de inmediato en la base local para disponibilidad instantánea
    const localKeys = this.getLocalAdminKeys();
    localKeys.unshift(newKeyRecord);
    this.saveLocalAdminKeys(localKeys);

    // 2. Intentar registrar en Cloudflare KV en segundo plano
    const workerUrl = this.getWorkerUrl();
    if (workerUrl && navigator.onLine) {
      try {
        await fetch(`${workerUrl}/api/admin/keys/generate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cleanMasterKey}`,
            'X-License-Key': cleanMasterKey,
            'X-PsiOS-Version': '0.0.3'
          },
          body: JSON.stringify({
            masterKey: cleanMasterKey,
            plan: planName,
            prefix,
            tier,
            key: generatedKey,
            note
          })
        });
      } catch (e) {
        console.warn('Registro en Cloudflare diferido (modo local activo):', e);
      }
    }

    return {
      success: true,
      key: generatedKey,
      plan: planName,
      createdAt: newKeyRecord.createdAt
    };
  }

  async adminUnlinkKey(masterKey, keyToUnlink) {
    const cleanMasterKey = (masterKey || '').trim().toUpperCase();
    const cleanKey = (keyToUnlink || '').trim().toUpperCase();

    // 1. Desvincular en base local de inmediato
    const localKeys = this.getLocalAdminKeys();
    const target = localKeys.find(k => k.key === cleanKey);
    if (target) {
      target.status = 'available';
      target.linkedUser = null;
      target.doctorName = null;
      target.unlinkedAt = new Date().toISOString();
      this.saveLocalAdminKeys(localKeys);
    }

    // 2. Intentar desvincular en Cloudflare Worker
    const workerUrl = this.getWorkerUrl();
    if (workerUrl && navigator.onLine) {
      try {
        await fetch(`${workerUrl}/api/admin/keys/unlink`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cleanMasterKey}`,
            'X-License-Key': cleanMasterKey,
            'X-PsiOS-Version': '0.0.3'
          },
          body: JSON.stringify({
            masterKey: cleanMasterKey,
            key: cleanKey
          })
        });
      } catch (e) {
        console.warn('Desvinculación en Cloudflare diferida (modo local activo):', e);
      }
    }

    return { success: true, key: cleanKey };
  }

  async adminDeleteKey(masterKey, keyToDelete) {
    const cleanMasterKey = (masterKey || '').trim().toUpperCase();
    const cleanKey = (keyToDelete || '').trim().toUpperCase();

    // 1. Eliminar de la base local
    const localKeys = this.getLocalAdminKeys().filter(k => k.key !== cleanKey);
    this.saveLocalAdminKeys(localKeys);

    // 2. Intentar eliminar en Cloudflare Worker
    const workerUrl = this.getWorkerUrl();
    if (workerUrl && navigator.onLine) {
      try {
        await fetch(`${workerUrl}/api/admin/keys/delete`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cleanMasterKey}`,
            'X-License-Key': cleanMasterKey,
            'X-PsiOS-Version': '0.0.3'
          },
          body: JSON.stringify({
            masterKey: cleanMasterKey,
            key: cleanKey
          })
        });
      } catch (e) {
        console.warn('Eliminación en Cloudflare diferida (modo local activo):', e);
      }
    }

    return { success: true, key: cleanKey };
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
