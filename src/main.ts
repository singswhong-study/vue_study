import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from '@/router/router';


//상태관리 pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
