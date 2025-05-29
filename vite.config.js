// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Projet_5_OC/', 
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
