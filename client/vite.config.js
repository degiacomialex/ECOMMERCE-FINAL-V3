// client/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 🟢 CORRECCIÓN CLAVE: Eliminamos la línea 'base' para evitar conflictos de rutas con GitHub Pages.
  // base: '/ECOMMERCE-FINAL-V3/', 

  // 💥 DIRECTORIO DE SALIDA: Esto es CORRECTO para la estrategia de GitHub Pages.
  build: {
    outDir: '../docs', 
    emptyOutDir: true,
  },
})