# ☁️ PsiOS — Configuración de Firebase & Nube Clínica

Este módulo permite a **PsiOS** sincronizar usuarios clínicos, historias de pacientes y citas con **Firebase Authentication** y **Cloud Firestore**, además de enlazar materiales bibliográficos remotos en **Firebase Storage**.

---

## 🔒 Regla Fundamental de Rendimiento en Escritorio (Desktop First)
> Para la aplicación instalada en computadora (`PsiOS.exe`), **NO se vuelve a descargar ni a consultar los libros desde la nube**. Los manuales de psicopatología y semiología se leen con 0 latencia directamente desde los archivos locales ya empaquetados en `/libros/`.
> La conexión a Firebase se utiliza para la **sincronización de pacientes, citas y perfil del especialista**, y como CDN alternativo para clientes web remotos.

---

## ⚡ Configuración en 3 Pasos

### 1. Crear Proyecto en Firebase Console
1. Entra a [Firebase Console](https://console.firebase.google.com/) y crea un nuevo proyecto (ej. `psios-clinica`).
2. En **Authentication**, habilita el proveedor **Correo electrónico / Contraseña**.
3. En **Firestore Database**, crea la base de datos en modo producción y pega las reglas de `firebase/firestore.rules`.
4. (Opcional) En **Storage**, activa el almacenamiento y pega las reglas de `firebase/storage.rules`.

### 2. Obtener las Claves del Proyecto Web
En la configuración del proyecto (ícono de engranaje ⚙️) > *Tus apps* > añade una app Web y copia el objeto `firebaseConfig`:
```json
{
  "apiKey": "AIzaSy...",
  "authDomain": "tu-proyecto.firebaseapp.com",
  "projectId": "tu-proyecto",
  "storageBucket": "tu-proyecto.firebasestorage.app",
  "messagingSenderId": "...",
  "appId": "..."
}
```

### 3. Conectar en PsiOS sin Recompilar
1. En la aplicación **PsiOS**, haz clic en el botón de **Nube / Sesión** en la esquina superior o en la sección de Clínica.
2. Abre la pestaña **Configuración de Nube**.
3. Pega tus credenciales JSON o los valores correspondientes.
4. Haz clic en **Guardar y Conectar**. ¡Listo! La sincronización quedará activa de inmediato.
