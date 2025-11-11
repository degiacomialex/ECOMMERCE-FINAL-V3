// client/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 💥 AÑADIMOS ESTO 💥
  // Le decimos a Vite que la carpeta de build
  // NO sea 'dist', sino que sea la carpeta '/docs'
  // en la raíz del proyecto (../ sube un nivel)
  build: {
    outDir: '../docs',
    emptyOutDir: true, // Limpia la carpeta 'docs' antes de cada build
  },

  // 💥 AÑADIMOS ESTO TAMBIÉN 💥
  // Esto es necesario para que las imágenes y assets 
  // funcionen bien en GitHub Pages
  base: '/ECOMMERCE-FINAL-V3/', 
})