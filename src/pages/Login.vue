<template>
    <div class="form-signin w-100 m-auto">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="state.form.email">
        <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="state.form.password">
        <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"> Remember me
        </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" @click="login()">Sign in</button>
        <button class="w-100 btn btn-lg btn-primary" @click="getToken()">Token Sign in</button>
        <button class="w-100 btn btn-lg btn-primary" @click="userInfo()">유저 확인</button>
        <button class="w-100 btn btn-lg btn-primary" @click="validToken()">토큰 검증</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useMemberStore } from '@/store/member';
import router from '@/router/router';
import { api }  from '@/utils/axios';
import { toRaw } from 'vue';

    const state = reactive({
        form : {
            email: '',
            password: ''
        }
    });

    const memberStore = useMemberStore();

    const login = async () => {
        // console.log(state.form)
        await axios.get('/api/account/login', { params: state.form }).then((res)=>{
            // console.log(res.data);            
            memberStore.login(res.data.email, res.data.name); //혹은 store 내부에서 login api를 호출
            alert('로그인 되었습니다.');
            console.log(`login info : ${memberStore.getEmail}`);
            router.push({ path: '/' });
            //1. 만약 vuex 의 경우
            //commit을 하면서 mutaion/action 등을 사용함.

            //2. 세션스토리지에 저장.
            // sessionStorage.setItem('userInfo', JSON.stringify({
            //     'email' :  res.data.email,
            //     'name' :  res.data.name,
            //     'isLogin' : true
            // }));

        }).catch((err) => {
            console.log(err);
            alert(err.response.data.error);
        });
    };

    const getToken = async () => {

        // await axios.get('/api/account/token', { params: state.form }).then((res)=>{
        //     console.log(res.data);
        //     //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwibmFtZSI6InRlc3RAZW1haWwuY29tIiwiaWF0IjoxNzU4NTEzNTgyLCJleHAiOjE3NTg1MTM3NjJ9.0px1HwwyrUPC7AbCDlmcJqmqE15XoqMU8tPPNgEzGO4
        // }).catch((err) => {

        // });

        await axios.post('/api/account/token', toRaw(state.form)).then((res)=>{
            console.log(res.data);
            memberStore.login(res.data.email, res.data.name); //혹은 store 내부에서 login api를 호출
            //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwibmFtZSI6InRlc3RAZW1haWwuY29tIiwiaWF0IjoxNzU4NTEzNTgyLCJleHAiOjE3NTg1MTM3NjJ9.0px1HwwyrUPC7AbCDlmcJqmqE15XoqMU8tPPNgEzGO4
        }).catch((err) => {

        });
    }

    //정보 정상 확인용
    const userInfo = () => { 
        console.log(`isLogin : ${memberStore.getIsLogin} `);
        console.log(`email : ${memberStore.getEmail} `);
    }

    //토큰 검증용
    const validToken = async () => {
        try {
            const res = await api.post('/api/account/valid-token'); //custom 으로 withCredentilas : true
            console.log(res.data);
        } catch (error) {
            console.error(err.response.data);
        }
    }

</script>

<style scoped>
</style>