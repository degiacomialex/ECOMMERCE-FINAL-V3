// client/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
// 🟢 CORRECCIÓN FINAL: Usar './' fuerza las rutas relativas en el index.html final.
base: './',

  // 💥 DIRECTORIO DE SALIDA: Esto es CORRECTO para la estrategia de GitHub Pages.
  build: {
    outDir: '../docs', 
    emptyOutDir: true,
  },
})