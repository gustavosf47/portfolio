import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ✅ importa el plugin

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()] // ✅ úsalo aquí
})
