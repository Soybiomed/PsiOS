/**
 * PsiOS Clinical Cryptography Service
 * Provee exportación e importación segura de pacientes con cifrado de grado militar AES-256-GCM.
 * Utiliza Web Crypto API nativa con derivación de clave PBKDF2-HMAC-SHA256 (100,000 iteraciones).
 */

function uint8ArrayToBase64(bytes) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export class PatientCryptoService {
  constructor() {
    this.crypto = (typeof window !== 'undefined' && window.crypto) ? window.crypto : null;
  }

  isSupported() {
    return Boolean(this.crypto && this.crypto.subtle);
  }

  /**
   * Deriva una clave AES-GCM a partir de una contraseña y salt usando PBKDF2.
   */
  async deriveKey(passphrase, salt, iterations = 100000) {
    if (!this.isSupported()) {
      throw new Error('La API de Criptografía Segura (WebCrypto) no está disponible en este entorno.');
    }
    const encoder = new TextEncoder();
    const passBytes = encoder.encode(passphrase);

    const baseKey = await this.crypto.subtle.importKey(
      'raw',
      passBytes,
      'PBKDF2',
      false,
      ['deriveKey']
    );

    return await this.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt,
        iterations,
        hash: 'SHA-256'
      },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  /**
   * Exporta uno o varios pacientes cifrados en un paquete JSON seguro.
   * @param {Array<Object>} patients - Lista de pacientes a exportar.
   * @param {string} passphrase - Contraseña de cifrado definida por el profesional.
   * @param {Object} [metadata={}] - Metadatos opcionales (nombre del doctor, clínica, etc.)
   * @returns {Promise<string>} Archivo cifrado en formato texto JSON con encabezado PSIOS_ENCRYPTED_PATIENT_PACKAGE.
   */
  async encryptPatientsPackage(patients, passphrase, metadata = {}) {
    if (!passphrase || passphrase.length < 4) {
      throw new Error('La contraseña de cifrado debe tener al menos 4 caracteres.');
    }
    if (!Array.isArray(patients) || patients.length === 0) {
      throw new Error('No hay pacientes seleccionados para exportar.');
    }

    const salt = new Uint8Array(16);
    this.crypto.getRandomValues(salt);

    const iv = new Uint8Array(12);
    this.crypto.getRandomValues(iv);

    const iterations = 100000;
    const key = await this.deriveKey(passphrase, salt, iterations);

    const payload = {
      patients,
      exportedAt: new Date().toISOString(),
      metadata: {
        doctorName: metadata.doctorName || 'Profesional Clínico',
        patientCount: patients.length,
        version: '1.0',
        ...metadata
      }
    };

    const encoder = new TextEncoder();
    const dataBytes = encoder.encode(JSON.stringify(payload));

    const cipherBuffer = await this.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      dataBytes
    );

    const packageEnvelope = {
      header: 'PSIOS_ENCRYPTED_PATIENT_PACKAGE',
      version: '1.0',
      algorithm: 'AES-256-GCM',
      kdf: 'PBKDF2-HMAC-SHA256',
      iterations,
      salt: uint8ArrayToBase64(salt),
      iv: uint8ArrayToBase64(iv),
      ciphertext: uint8ArrayToBase64(new Uint8Array(cipherBuffer)),
      preview: {
        exportedBy: metadata.doctorName || 'Profesional Clínico',
        exportedAt: payload.exportedAt,
        patientCount: patients.length
      }
    };

    return JSON.stringify(packageEnvelope, null, 2);
  }

  /**
   * Descifra un paquete de pacientes previamente exportado.
   * @param {string|Object} rawPackage - Contenido del archivo .psios.
   * @param {string} passphrase - Contraseña con la que se cifró.
   * @returns {Promise<Object>} { patients: Array, metadata: Object }
   */
  async decryptPatientsPackage(rawPackage, passphrase) {
    if (!passphrase) {
      throw new Error('Debes ingresar la contraseña de descifrado.');
    }

    let parsed = rawPackage;
    if (typeof rawPackage === 'string') {
      try {
        parsed = JSON.parse(rawPackage);
      } catch {
        throw new Error('El archivo no tiene un formato válido de paquete PsiOS.');
      }
    }

    if (!parsed || parsed.header !== 'PSIOS_ENCRYPTED_PATIENT_PACKAGE') {
      throw new Error('El archivo seleccionado no es un paquete clínico cifrado de PsiOS válido.');
    }

    if (!parsed.salt || !parsed.iv || !parsed.ciphertext) {
      throw new Error('Estructura criptográfica corrupta o incompleta.');
    }

    const salt = base64ToUint8Array(parsed.salt);
    const iv = base64ToUint8Array(parsed.iv);
    const ciphertext = base64ToUint8Array(parsed.ciphertext);
    const iterations = parsed.iterations || 100000;

    let key;
    try {
      key = await this.deriveKey(passphrase, salt, iterations);
    } catch (e) {
      throw new Error('Error al derivar la clave criptográfica: ' + e.message);
    }

    let decryptedBuffer;
    try {
      decryptedBuffer = await this.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        ciphertext
      );
    } catch {
      throw new Error('Contraseña incorrecta o el archivo ha sido alterado.');
    }

    const decoder = new TextDecoder();
    const jsonString = decoder.decode(decryptedBuffer);
    const payload = JSON.parse(jsonString);

    if (!payload || !Array.isArray(payload.patients)) {
      throw new Error('El contenido descifrado no contiene una lista de historias clínicas válida.');
    }

    return {
      patients: payload.patients,
      metadata: payload.metadata || {},
      exportedAt: payload.exportedAt
    };
  }

  /**
   * Descarga un archivo cifrado como .psios en el disco del usuario.
   */
  downloadEncryptedFile(filename, contentString) {
    const cleanName = filename.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_\-]/g, '_');
    const blob = new Blob([contentString], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cleanName}.psios`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  }
}

export const patientCryptoService = new PatientCryptoService();
