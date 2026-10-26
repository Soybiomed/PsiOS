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
   * - Si el recurso tiene URL absoluta o está configurado en Cloudflare, conecta a la nube directamente.
   * - En la app de escritorio, si es local y no requiere nube, usa la ruta empaquetada.
   * - En web o modo nube, consulta Cloudflare R2 transparente y fluidamente.
   */
  static resolvePdfUrl(item) {
    if (!item) return '';

    const rawUrl = (item.pdfUrl || '').trim();
    if (!rawUrl) return '';

    // Si ya es una URL remota directa (Cloudflare R2, CDN, etc.), devolverla directamente
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      return rawUrl;
    }

    const fileName = rawUrl.split('/').pop();
    if (!fileName) return '';

    const r2Bucket = this.getCloudflareR2Url();

    // Si el item solicita explícitamente Cloudflare o está alojado en la nube
    if (item.cloudHosted || item.preferCloud || item.useCloud) {
      return r2Bucket ? `${r2Bucket}/${encodeURIComponent(fileName)}` : rawUrl;
    }

    // Si es la aplicación instalada en computadora y el archivo está disponible localmente
    if (this.isDesktopApp()) {
      return rawUrl;
    }

    // 1. Servidor Cloudflare R2 (Principal para Web)
    if (r2Bucket) {
      return `${r2Bucket}/${encodeURIComponent(fileName)}`;
    }

    // Por defecto, ruta local relativa
    return rawUrl;
  }

  /**
   * Resuelve la portada del libro.
   * - Si es remota o cloudHosted: conecta a Cloudflare R2.
   * - En escritorio con carátula local: usa la ruta local.
   * - Si no posee carátula definida, retorna '' inmediatamente.
   */
  static resolveCoverUrl(item) {
    if (!item) return '';
    const rawUrl = (item.coverImage || item.coverUrl || '').trim();
    if (!rawUrl) return '';

    // Si ya es una URL remota directa (Cloudflare R2, CDN, etc.), devolverla directamente
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      return rawUrl;
    }

    const fileName = rawUrl.split('/').pop();
    if (!fileName) return '';

    const r2Bucket = this.getCloudflareR2Url();

    // Si el item solicita explícitamente Cloudflare o está alojado en la nube
    if (item.cloudHosted || item.preferCloud || item.useCloud) {
      return r2Bucket ? `${r2Bucket}/${encodeURIComponent(fileName)}` : rawUrl;
    }

    if (this.isDesktopApp()) return rawUrl;

    if (r2Bucket) {
      return `${r2Bucket}/${encodeURIComponent(fileName)}`;
    }
    return rawUrl;
  }
}
