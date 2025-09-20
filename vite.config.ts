import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src')
      '@': '/src'
    }
  },
  server: {
    port: 3000,          // 개발 서버 포트
    open: true,          // 서버 시작 시 브라우저 자동 오픈
    strictPort: true,    // 포트 사용 불가 시 에러
    proxy: {             // API 프록시 설정
      '/api': {
        target: 'http://localhost:8080', // Spring Boot 서버 주소
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
