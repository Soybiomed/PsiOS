import { defineConfig } from "vite";

export default defineConfig({
  base: './',
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
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three']
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
});
