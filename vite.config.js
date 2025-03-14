import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1337,
    proxy: {
      '/api': {
      target: 'http://localhost:8008',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    },
  },
});
