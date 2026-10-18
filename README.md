# PsiOS

Sistema Operativo y Plataforma Integral para Psicología Clínica, Psicopatología y Evaluación Neurocognitiva.

**Versión:** Beta 0.0.1

---

## 🌟 Características Principales

- **Biblioteca Clínica Especializada**: Catálogo interactivo de psicopatología, semiología psiquiátrica y manuales de referencia (Belloch, APIR, etc.).
- **Lector PDF Integrado con Aceleración Local**: Visualización instantánea con PDF.js de alta fidelidad, navegación por miniaturas y marcadores.
- **Gestión Clínica y Fichas de Pacientes**: Módulo de consulta, historias clínicas, pruebas y seguimiento.
- **Licenciamiento y Activación de Producto**: Sistema de validación de claves `PSIOS-XXXX-XXXX-XXXX` con soporte híbrido online/offline.
- **Arquitectura Híbrida**:
  - **Online**: Servidores Firebase Storage (primario) y Cloudflare R2 (respaldo/espejo) + Cloudflare Workers para autenticación y base de datos clínica.
  - **Desktop (Local)**: Ejecutable nativo con lectura directa del sistema de archivos sin dependencia de red.

---

## 🚀 Despliegue y Desarrollo Local

### Requisitos
- Node.js 18+ / 20+
- npm

### Comandos de Desarrollo
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción (Web / GitHub Pages)
npm run build
```

---

## 🌐 Despliegue Automático Online (GitHub Pages)

El proyecto incluye un flujo de trabajo en `.github/workflows/deploy.yml` que compila y despliega automáticamente la versión web a GitHub Pages en cada push a la rama `main`.
