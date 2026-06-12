import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gcf-consult/',   // <-- añade esto
  plugins: [react()],
})