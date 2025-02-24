import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(),tailwindcss(),],
  server: {
    host: '0.0.0.0',  // This allows access from any device on the same network
    port: 5173,        // Make sure this is the same port your app runs on
    strictPort: true,  // Ensure it doesn't change the port
  }
})
