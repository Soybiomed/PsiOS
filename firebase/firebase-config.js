/**
 * PsiOS Firebase Configuration & Initialization
 * 
 * Soporta configuración dinámica mediante localStorage o variables de entorno.
 * Si las credenciales no han sido configuradas por el usuario, opera en
 * Modo Autónomo Local (Zero-Crash Guarantee) sin interrumpir la clínica.
 */

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const STORAGE_KEY_FIREBASE = 'psios_firebase_custom_config_v1';

// Configuración por defecto o plantilla para conectar con Firebase
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyPsiOSDefaultClinicalKeyPlaceholder2026",
  authDomain: "psios-clinica.firebaseapp.com",
  projectId: "psios-clinica",
  storageBucket: "psios-clinica.firebasestorage.app",
  messagingSenderId: "109876543210",
  appId: "1:109876543210:web:abcdef1234567890"
};

export function getStoredFirebaseConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FIREBASE);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Error al leer configuración de Firebase:', e);
  }
  return null;
}

export function setStoredFirebaseConfig(configObj) {
  try {
    if (configObj && typeof configObj === 'object') {
      localStorage.setItem(STORAGE_KEY_FIREBASE, JSON.stringify(configObj));
    } else {
      localStorage.removeItem(STORAGE_KEY_FIREBASE);
    }
  } catch (e) {
    console.warn('Error al guardar configuración de Firebase:', e);
  }
}

let appInstance = null;
let authInstance = null;
let dbInstance = null;
let storageInstance = null;
let isFirebaseConnected = false;

// Inicialización segura y resiliente
export function initFirebase() {
  if (appInstance) {
    return { app: appInstance, auth: authInstance, db: dbInstance, storage: storageInstance, isFirebaseConnected };
  }

  const customConfig = getStoredFirebaseConfig();
  const activeConfig = customConfig || DEFAULT_FIREBASE_CONFIG;

  const isConfigured = !!(
    customConfig &&
    customConfig.apiKey &&
    !customConfig.apiKey.includes('Placeholder')
  );

  try {
    const existingApps = getApps();
    if (existingApps.length > 0) {
      appInstance = existingApps[0];
    } else {
      appInstance = initializeApp(activeConfig);
    }

    authInstance = getAuth(appInstance);
    dbInstance = getFirestore(appInstance);
    storageInstance = getStorage(appInstance);
    isFirebaseConnected = isConfigured;

    console.info(`[PsiOS Firebase] Inicializado en modo: ${isConfigured ? '🟢 Conectado a la Nube' : '🟡 Modo Local Autónomo (Sin llaves activas)'}`);
  } catch (err) {
    console.warn('[PsiOS Firebase] Advertencia: Ejecutando en Modo Local Desconectado:', err.message);
    isFirebaseConnected = false;
  }

  return {
    app: appInstance,
    auth: authInstance,
    db: dbInstance,
    storage: storageInstance,
    isFirebaseConnected
  };
}

export const firebaseCtx = initFirebase();
