# 🛡️ PsiOS — Servidor de Activación y Licencias en Cloudflare

Este módulo implementa el backend servidor de activación y verificación de licencias para **PsiOS**, optimizado para ejecutarse en el plan gratuito de **Cloudflare Workers**.

---

## 🚀 Despliegue en 3 Minutos (Paso a Paso)

### 1. Iniciar sesión en Cloudflare (desde tu terminal)
```bash
npx wrangler login
```

### 2. (Opcional) Crear un espacio de almacenamiento KV para licencias
```bash
npx wrangler kv namespace create PSIOS_LICENSES
```
Wrangler te devolverá un ID como:
```toml
[[kv_namespaces]]
binding = "PSIOS_LICENSES"
id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```
Copia esas dos líneas y pégalas en `cloudflare/wrangler.toml`.

### 3. Publicar el Worker
```bash
cd cloudflare
npx wrangler deploy
```

Al terminar, Cloudflare te dará la URL pública de tu Worker, por ejemplo:
`https://psios-licensing-worker.tu-usuario.workers.dev`

---

## 🔑 Claves Maestras Incorporadas (Modo Autónomo)
El Worker incluye soporte pre-aprobado para las siguientes claves inmediatas:
- `PSIOS-PRO-2026-CLINIC`: Licencia Perpetua Profesional Clínico
- `PSIOS-MASTER-UNIVERSAL`: Licencia Enterprise & Hospital Suite
- `PSIOS-DEMO-TRIAL`: Licencia de Evaluación Clínica

---

## 💻 Vinculación con la Aplicación PsiOS
1. En la aplicación **PsiOS**, abre la ventana de **Activación de Producto** (en la esquina superior o en la biblioteca).
2. Pega la URL de tu Worker en la casilla *Servidor de Licencias* (o déjala por defecto para usar validación criptográfica local).
3. Introduce tu clave de producto y haz clic en **Activar Producto**.
4. **Garantía Offline:** Una vez activada en la computadora, la aplicación de escritorio (`PsiOS.exe`) no requiere volver a consultar internet; la licencia queda blindada y activa localmente de por vida.
