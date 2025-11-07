import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 💥 FIX FINAL: Usa punto y barra (./) para la ruta base 💥
  base: './', 
})