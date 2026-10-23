/**
 * PsiOS Clinical Synchronization Service
 * Sincroniza pacientes, citas y notas evolutivas con Cloud Firestore.
 * Opera con arquitectura Offline-First: persistencia local instantánea + sync en la nube en segundo plano.
 */

import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc
} from 'firebase/firestore';
import { firebaseCtx } from './firebase-config.js';
import { authService } from './auth-service.js';

export class ClinicSyncService {
  constructor() {
    this.db = firebaseCtx.db;
    this.syncStatus = 'local'; // 'synced', 'syncing', 'offline', 'local'
    this.statusListeners = [];
    this.lastSyncTime = null;

    // Detectar cambios en conectividad de red del navegador
    window.addEventListener('online', () => this.handleNetworkChange(true));
    window.addEventListener('offline', () => this.handleNetworkChange(false));
  }

  handleNetworkChange(isOnline) {
    if (!isOnline) {
      this.setStatus('offline');
    } else {
      if (firebaseCtx.isFirebaseConnected) {
        this.setStatus('synced');
      } else {
        this.setStatus('local');
      }
    }
  }

  onStatusChange(callback) {
    if (typeof callback === 'function') {
      this.statusListeners.push(callback);
      callback(this.syncStatus, this.lastSyncTime);
    }
  }

  setStatus(status) {
    this.syncStatus = status;
    this.statusListeners.forEach(cb => {
      try {
        cb(this.syncStatus, this.lastSyncTime);
      } catch (err) {
        console.error('Error en listener de estado de sync:', err);
      }
    });
  }

  getSyncStatus() {
    return {
      status: this.syncStatus,
      lastSyncTime: this.lastSyncTime,
      isCloudActive: firebaseCtx.isFirebaseConnected && navigator.onLine
    };
  }

  /**
   * Sincronizar un paciente individual hacia Firestore.
   */
  async syncPatient(patient) {
    if (!patient || !patient.id) return;
    if (!this.db || !firebaseCtx.isFirebaseConnected || !navigator.onLine) {
      this.setStatus('local');
      return;
    }

    const user = authService.getCurrentUser();
    if (!user || !user.uid) return;

    this.setStatus('syncing');
    try {
      const patientRef = doc(this.db, 'clinicians', user.uid, 'patients', patient.id);
      await setDoc(patientRef, {
        ...patient,
        lastSyncedAt: new Date().toISOString()
      }, { merge: true });

      this.lastSyncTime = new Date();
      this.setStatus('synced');
    } catch (err) {
      console.warn('[PsiOS Sync] Error al sincronizar paciente con Firestore:', err);
      this.setStatus('local');
    }
  }

  /**
   * Sincronizar una cita individual hacia Firestore.
   */
  async syncAppointment(appt) {
    if (!appt || !appt.id) return;
    if (!this.db || !firebaseCtx.isFirebaseConnected || !navigator.onLine) {
      this.setStatus('local');
      return;
    }

    const user = authService.getCurrentUser();
    if (!user || !user.uid) return;

    this.setStatus('syncing');
    try {
      const apptRef = doc(this.db, 'clinicians', user.uid, 'appointments', appt.id);
      await setDoc(apptRef, {
        ...appt,
        lastSyncedAt: new Date().toISOString()
      }, { merge: true });

      this.lastSyncTime = new Date();
      this.setStatus('synced');
    } catch (err) {
      console.warn('[PsiOS Sync] Error al sincronizar cita con Firestore:', err);
      this.setStatus('local');
    }
  }

  /**
   * Eliminar un paciente en Firestore.
   */
  async deletePatientFromCloud(patientId) {
    if (!patientId || !this.db || !firebaseCtx.isFirebaseConnected || !navigator.onLine) return;
    const user = authService.getCurrentUser();
    if (!user || !user.uid) return;
    try {
      const patientRef = doc(this.db, 'clinicians', user.uid, 'patients', patientId);
      await deleteDoc(patientRef);
    } catch (err) {
      console.warn('[PsiOS Sync] Error al eliminar paciente en Firestore:', err);
    }
  }

  /**
   * Eliminar una cita en Firestore.
   */
  async deleteAppointmentFromCloud(apptId) {
    if (!apptId || !this.db || !firebaseCtx.isFirebaseConnected || !navigator.onLine) return;
    const user = authService.getCurrentUser();
    if (!user || !user.uid) return;
    try {
      const apptRef = doc(this.db, 'clinicians', user.uid, 'appointments', apptId);
      await deleteDoc(apptRef);
    } catch (err) {
      console.warn('[PsiOS Sync] Error al eliminar cita en Firestore:', err);
    }
  }

  /**
   * Descargar pacientes de Firestore y fusionar con la base local.
   */
  async pullPatientsFromCloud(localPatients = []) {
    if (!this.db || !firebaseCtx.isFirebaseConnected || !navigator.onLine) {
      return localPatients;
    }

    const user = authService.getCurrentUser();
    if (!user || !user.uid) return localPatients;

    try {
      this.setStatus('syncing');
      const snap = await getDocs(collection(this.db, 'clinicians', user.uid, 'patients'));
      const remotePatients = [];
      snap.forEach(docSnap => {
        remotePatients.push({ id: docSnap.id, ...docSnap.data() });
      });

      if (remotePatients.length === 0) {
        // Si la nube está vacía pero tenemos pacientes locales, súbelos
        if (localPatients.length > 0) {
          for (const p of localPatients) {
            await this.syncPatient(p);
          }
        }
        this.setStatus('synced');
        return localPatients;
      }

      // Fusionar pacientes por ID (más reciente prevalece)
      const mergedMap = new Map();
      localPatients.forEach(p => mergedMap.set(p.id, p));
      remotePatients.forEach(rp => {
        const local = mergedMap.get(rp.id);
        if (!local || (rp.updatedAt && (!local.updatedAt || rp.updatedAt >= local.updatedAt))) {
          mergedMap.set(rp.id, rp);
        }
      });

      this.lastSyncTime = new Date();
      this.setStatus('synced');
      return Array.from(mergedMap.values());
    } catch (err) {
      console.warn('[PsiOS Sync] Error al descargar pacientes de la nube:', err);
      this.setStatus('local');
      return localPatients;
    }
  }

  /**
   * Respaldo directo en Cloudflare KV de todos los datos clínicos (Pacientes y Citas)
   */
  async syncToCloudflare(patients = [], appointments = [], licenseKey = '', username = '', password = '', updatedAt = null) {
    if (!navigator.onLine) return false;
    const workerUrl = 'https://psios-licensing-worker.villalpandojhosuasami.workers.dev';
    try {
      this.setStatus('syncing');
      const res = await fetch(`${workerUrl}/api/clinic/backup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-License-Key': licenseKey || 'DEFAULT_CLINIC'
        },
        body: JSON.stringify({ 
          patients, 
          appointments, 
          licenseKey, 
          username, 
          password,
          updatedAt: updatedAt || new Date().toISOString()
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        this.lastSyncTime = new Date();
        this.setStatus('synced');
        return true;
      }
      this.setStatus('local');
      return false;
    } catch (e) {
      console.warn('[PsiOS Cloudflare Sync] Error de respaldo:', e);
      this.setStatus('local');
      return false;
    }
  }

  /**
   * Restauración directa desde Cloudflare KV (Sincronización Escritorio & Web)
   */
  async pullFromCloudflare(licenseKey = '', password = '') {
    if (!navigator.onLine) return null;
    const cleanKey = (licenseKey || '').trim().toUpperCase();
    if (!cleanKey) return null;

    const workerUrl = 'https://psios-licensing-worker.villalpandojhosuasami.workers.dev';
    try {
      this.setStatus('syncing');

      // 1. Intentar primero vía GET (formato soportado en vivo por Cloudflare Worker)
      const getUrl = `${workerUrl}/api/clinic/restore?licenseKey=${encodeURIComponent(cleanKey)}${password ? `&password=${encodeURIComponent(password)}` : ''}`;
      let res = await fetch(getUrl, {
        method: 'GET',
        headers: {
          'X-License-Key': cleanKey,
          'Accept': 'application/json'
        }
      });

      // 2. Si GET no responde 200, intentar POST como respaldo
      if (!res.ok) {
        res = await fetch(`${workerUrl}/api/clinic/restore`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-License-Key': cleanKey
          },
          body: JSON.stringify({ licenseKey: cleanKey, password })
        });
      }

      const json = await res.json().catch(() => null);
      if (res.ok && json && json.success && json.data) {
        this.lastSyncTime = new Date();
        this.setStatus('synced');
        return json.data;
      }
      this.setStatus('local');
      return null;
    } catch (e) {
      console.warn('[PsiOS Cloudflare Sync] Error al restaurar:', e);
      this.setStatus('local');
      return null;
    }
  }
}

export const clinicSyncService = new ClinicSyncService();
