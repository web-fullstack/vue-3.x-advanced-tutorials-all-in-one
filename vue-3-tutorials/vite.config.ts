import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // host: '0.0.0.0',
    // host: true,
    // port: 8888,
  },
  plugins: [vue()]
})
