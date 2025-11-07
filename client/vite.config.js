import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // FIX FINAL: Usamos './' y cambiamos la carpeta de salida a 'docs'
  base: './', 
  build: {
    // 💥 CRÍTICO: El resultado final se guarda en 'docs' en lugar de 'dist'
    outDir: 'docs' 
  }
})