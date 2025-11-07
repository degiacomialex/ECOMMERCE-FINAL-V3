import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 💥 FIX CRÍTICO: Se añade la propiedad 'base' con el nombre del repositorio 💥
  base: '/ECOMMERCE-FINAL-V3/', 
})