import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'

const routes = [
    { path : '/', component: Home},
    { path: '/login', component: Login}
];

//페이지router
const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

export default router;