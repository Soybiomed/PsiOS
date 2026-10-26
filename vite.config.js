import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VITE_BASE || './',
  clearScreen: false,
  server: {
    port: 5174,
    strictPort: true,
    host: true,
    watch: {
      ignored: ["**/src-tauri/**", "**/*.exe", "**/scratch/**"]
    }
  },
  build: {
    target: "es2022",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three")) {
            return "three-vendor";
          }
          if (id.includes("node_modules/firebase") || id.includes("node_modules/@firebase")) {
            return "firebase-vendor";
          }
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
});
