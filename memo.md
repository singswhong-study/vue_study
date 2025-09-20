### 최초 vite 설치
npm create vite@latest => project name 설정
해당폴더에서 => npm install -> npm run dev

### 터미널에서 명령어 인식되지 않을때.
powershell 관리자로 오픈하고 
    - Set-ExecutionPolicy RemoteSigned : 

### vite 에서 vue 파일 인식문제
src/shims-vue.d.ts 파일 생성.
----------------------------------------
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
----------------------------------------

###  vue.config.js 의 개발로컬 설정
    devServer: {
        //개발 환경일때 설정
        proxy: {
        '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: {
            '^/': '',
            },
        },
        },
    },
### vite.config.ts 의 추가 설정
    server: {
        port: 3000,          // 개발 서버 포트
        open: true,          // 서버 시작 시 브라우저 자동 오픈
        strictPort: true,    // 포트 사용 불가 시 에러
        proxy: {             // API 프록시 설정
        '/api': {
            target: 'http://localhost:8080', // Spring Boot 서버 주소
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
        }
    }

### import 등 타입 설정이 제대로 잡히지 않을 때
npm install --save-dev @types/node    

###     
package.json 의 eslintConfig 설정.env 내부에
    "vue/setup-compiler-macros": true    
    이 구문을 설정해줘야 vue cli 생성시 defineProps 컴파일 에러등을 해결



### npm 설치한것들
npm install axios
npm install vue-router

