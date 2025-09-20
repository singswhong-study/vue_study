import { defineStore } from 'pinia';

export const useMemberStore = defineStore('member', {
    state: () => ({
        email: '',
        name: '',
        isLogin: false
    }),
    getters : {
        getIsLogin: (state) => state.isLogin,
        getEmail: (state) => state.email ? state.email : ''
    }, 
    actions : {
        login(email, name) {
            this.email = email;
            this.name = name;
            this.isLogin = true;
        },
        logout() {
            this.email = '';
            this.name = '';
            this.isLogin = false;
        }
    },
    persist: true // 스토어의 상태를 영구적으로 저장. 기본적으로 localStorage 사용. 없다면 새로고침시 store 휘발됨
})
