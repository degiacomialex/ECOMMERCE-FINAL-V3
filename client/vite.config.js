// client/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 💥 DEJAMOS LA RUTA BASE 💥
  // base: '/ECOMMERCE-FINAL-V3/',

  // 💥 CORREGIMOS EL DIRECTORIO DE SALIDA 💥
  // Esto le dice a Vite que guarde el resultado del build en "../docs" 
  // (un nivel arriba, en la carpeta docs), lo cual es necesario para GitHub Pages.

  build: {
    outDir: '../docs', 
    emptyOutDir: true,
  },
})