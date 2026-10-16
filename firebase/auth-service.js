/**
 * PsiOS Clinical Auth Service
 * Soporta autenticación en la nube con Firebase Auth y sesión local offline persistente.
 */

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { firebaseCtx } from './firebase-config.js';

const STORAGE_KEY_USER = 'psios_clinical_user_v1';

export class AuthService {
  constructor() {
    this.auth = firebaseCtx.auth;
    this.currentUser = this.loadLocalUser();
    this.listeners = [];

    // Monitorear cambios en Firebase Auth si está conectado
    if (this.auth && firebaseCtx.isFirebaseConnected) {
      try {
        onAuthStateChanged(this.auth, (firebaseUser) => {
          if (firebaseUser) {
            const mapped = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || this.currentUser?.displayName || 'Profesional Clínico',
              specialty: this.currentUser?.specialty || 'Psicología Clínica',
              isCloudUser: true,
              lastLogin: new Date().toISOString()
            };
            this.saveLocalUser(mapped);
            this.currentUser = mapped;
          }
          this.notifyListeners();
        });
      } catch (e) {
        console.warn('Error al iniciar observador de auth:', e);
      }
    }
  }

  loadLocalUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_USER);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Error al leer usuario local:', e);
    }

    // Beta 0.0.1: Sin usuario predeterminado; requiere identificarse
    return null;
  }

  saveLocalUser(user) {
    this.currentUser = user;
    try {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
    } catch (e) {
      console.warn('Error al guardar usuario en localStorage:', e);
    }
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  onAuthChange(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
      callback(this.currentUser);
    }
  }

  notifyListeners() {
    this.listeners.forEach(cb => {
      try {
        cb(this.currentUser);
      } catch (err) {
        console.error('Error en listener de autenticación:', err);
      }
    });
  }

  /**
   * Iniciar sesión.
   * Si Firebase está activo y hay red, autentica en la nube.
   * Si no, autentica en modo local autónomo sin fallar.
   */
  async login(email, password) {
    if (!email || !password) {
      throw new Error('Debe ingresar correo y contraseña.');
    }

    if (this.auth && firebaseCtx.isFirebaseConnected && navigator.onLine) {
      try {
        const cred = await signInWithEmailAndPassword(this.auth, email, password);
        const user = {
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: cred.user.displayName || 'Profesional Clínico',
          specialty: this.currentUser?.specialty || 'Psicología Clínica',
          isCloudUser: true,
          lastLogin: new Date().toISOString()
        };
        this.saveLocalUser(user);
        this.notifyListeners();
        return user;
      } catch (err) {
        throw new Error(`Error de autenticación en la nube: ${err.message}`);
      }
    }

    // Modo Autónomo Local
    const localUser = {
      uid: `local-${email.replace(/[^a-zA-Z0-9]/g, '_')}`,
      email,
      displayName: this.currentUser?.displayName || email.split('@')[0],
      specialty: this.currentUser?.specialty || 'Psicología Clínica',
      isCloudUser: false,
      lastLogin: new Date().toISOString()
    };
    this.saveLocalUser(localUser);
    this.notifyListeners();
    return localUser;
  }

  /**
   * Registro de nuevo profesional.
   */
  async register(email, password, displayName, specialty) {
    if (!email || !password) {
      throw new Error('Debe proporcionar correo y contraseña.');
    }

    if (this.auth && firebaseCtx.isFirebaseConnected && navigator.onLine) {
      try {
        const cred = await createUserWithEmailAndPassword(this.auth, email, password);
        if (displayName) {
          await updateProfile(cred.user, { displayName });
        }
        const user = {
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: displayName || 'Profesional Clínico',
          specialty: specialty || 'Psicología Clínica',
          isCloudUser: true,
          lastLogin: new Date().toISOString()
        };
        this.saveLocalUser(user);
        this.notifyListeners();
        return user;
      } catch (err) {
        throw new Error(`Error al registrar en la nube: ${err.message}`);
      }
    }

    // Registro Local Autónomo
    const localUser = {
      uid: `local-${Date.now().toString(36)}`,
      email,
      displayName: displayName || email.split('@')[0],
      specialty: specialty || 'Psicología Clínica',
      isCloudUser: false,
      lastLogin: new Date().toISOString()
    };
    this.saveLocalUser(localUser);
    this.notifyListeners();
    return localUser;
  }

  /**
   * Cerrar sesión.
   */
  async logout() {
    if (this.auth && firebaseCtx.isFirebaseConnected) {
      try {
        await signOut(this.auth);
      } catch (e) {
        console.warn('Error en signOut de Firebase:', e);
      }
    }

    this.currentUser = null;
    try {
      localStorage.removeItem(STORAGE_KEY_USER);
    } catch {}
    this.notifyListeners();
  }
}

export const authService = new AuthService();
