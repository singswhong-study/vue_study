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
        <button class="w-100 btn btn-lg btn-primary" @click="submit()">Sign in</button>
        <button class="w-100 btn btn-lg btn-primary" @click="userInfo()">유저확인</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useMemberStore } from '@/store/member';

    const state = reactive({
        form : {
            email: '',
            password: ''
        }
    });

    const memberStore = useMemberStore();

    const submit = async () => {
        // console.log(state.form)
        await axios.get('/api/account/login', { params: state.form }).then((res)=>{
            console.log(res.data);
            console.log('로그인됨');
            memberStore.login(res.data.email, res.data.name); //혹은 store 내부에서 login api를 호출
        }).catch((err) => {
            console.log(err);
            alert(err.response.data.error);
        })
    };

    const userInfo = () => {
        console.log(`isLogin : ${memberStore.getIsLogin} `);
        console.log(`email : ${memberStore.getEmail} `);
    }

</script>

<style scoped>
</style>