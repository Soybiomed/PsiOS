/**
 * PsiOS Library Asset Resolver
 * 
 * Regla de Oro (Solicitada por el usuario):
 * "para la aplicación instalada en computadora NO es necesario que vuelva a instalar ni a consultar los materiales de la nube"
 * 
 * Este resolver garantiza:
 * 1. ENTORNO ESCRITORIO (PsiOS.exe / Tauri):
 *    - Cero consultas a la nube.
 *    - Lectura 100% nativa y offline desde la carpeta local empaquetada `/libros/...`.
 *    - Sin descargas repetitivas ni consumo de datos.
 * 
 * 2. ENTORNO WEB / REMOTO (Navegador externo o despliegue en servidor):
 *    - Si los archivos locales no están presentes o se configura un bucket de Firebase Storage / R2,
 *      resuelve la URL remota de forma segura y transparente.
 */

const STORAGE_KEY_FIREBASE_BUCKET = 'psios_firebase_storage_url_v1';
const STORAGE_KEY_R2_BUCKET = 'psios_cloudflare_r2_url_v1';

export class LibraryAssetResolver {
  /**
   * Detecta si la aplicación se está ejecutando en el entorno de escritorio nativo (Tauri / PsiOS.exe)
   */
  static isDesktopApp() {
    if (typeof window === 'undefined') return false;

    return !!(
      window.__TAURI__ ||
      window.__TAURI_INTERNALS__ ||
      window.location.protocol === 'tauri:' ||
      window.location.hostname === 'tauri.localhost' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    );
  }

  /**
   * Obtiene la URL del servidor principal: Firebase Storage
   */
  static getFirebaseStorageUrl() {
    try {
      return localStorage.getItem(STORAGE_KEY_FIREBASE_BUCKET) || localStorage.getItem('psios_remote_storage_bucket_url_v1') || '';
    } catch {
      return '';
    }
  }

  static setFirebaseStorageUrl(url) {
    try {
      if (url && typeof url === 'string') {
        localStorage.setItem(STORAGE_KEY_FIREBASE_BUCKET, url.trim().replace(/\/+$/, ''));
      } else {
        localStorage.removeItem(STORAGE_KEY_FIREBASE_BUCKET);
      }
    } catch (e) {
      console.warn('Error al guardar URL de Firebase Storage:', e);
    }
  }

  /**
   * Obtiene la URL del servidor en la nube: Cloudflare R2
   */
  static getCloudflareR2Url() {
    const DEFAULT_CLOUDFLARE_R2_URL = 'https://pub-f80b9608d3c840b094f0f3ba5b2599b0.r2.dev';
    try {
      return localStorage.getItem(STORAGE_KEY_R2_BUCKET) || DEFAULT_CLOUDFLARE_R2_URL;
    } catch {
      return DEFAULT_CLOUDFLARE_R2_URL;
    }
  }

  static setCloudflareR2Url(url) {
    try {
      if (url && typeof url === 'string') {
        localStorage.setItem(STORAGE_KEY_R2_BUCKET, url.trim().replace(/\/+$/, ''));
      } else {
        localStorage.removeItem(STORAGE_KEY_R2_BUCKET);
      }
    } catch (e) {
      console.warn('Error al guardar URL de Cloudflare R2:', e);
    }
  }

  /**
   * Resuelve la URL óptima para abrir un libro o recurso PDF.
   * En la app de escritorio, devuelve INCONDICIONALMENTE la ruta local sin peticiones web.
   * En web, consulta Cloudflare R2 y recurre a la ruta local relativa si no está disponible.
   */
  static resolvePdfUrl(item) {
    if (!item) return '';

    const localUrl = (item.pdfUrl || '').trim();
    if (!localUrl) return '';

    // Si es la aplicación instalada en computadora, usar siempre la ruta local instantánea
    if (this.isDesktopApp()) {
      return localUrl;
    }

    const fileName = localUrl.split('/').pop();
    if (!fileName) return '';

    // 1. Servidor Cloudflare R2 (Principal para Web)
    const r2Bucket = this.getCloudflareR2Url();
    if (r2Bucket) {
      return `${r2Bucket}/${encodeURIComponent(fileName)}`;
    }

    // Por defecto, ruta local relativa
    return localUrl;
  }

  /**
   * Resuelve la portada del libro.
   * En escritorio: siempre ruta local `/libros/...`.
   * En web: Cloudflare R2.
   * Si no posee carátula definida (definiciones semiológicas, protocolos de examen, etc.), retorna '' inmediatamente.
   */
  static resolveCoverUrl(item) {
    if (!item) return '';
    const localUrl = (item.coverImage || item.coverUrl || '').trim();
    if (!localUrl) return '';

    if (this.isDesktopApp()) return localUrl;

    const fileName = localUrl.split('/').pop();
    if (!fileName) return '';

    const r2Bucket = this.getCloudflareR2Url();
    if (r2Bucket) {
      return `${r2Bucket}/${encodeURIComponent(fileName)}`;
    }
    return localUrl;
  }
}
