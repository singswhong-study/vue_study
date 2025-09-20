import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'

const routes = [
    { path : '/', component: Home},
    { path: '/login', component: Login}
];

//페이지router
const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

//상태관리 pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
