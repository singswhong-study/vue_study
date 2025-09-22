<template>
    <header>
        <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">사이트 맵</h4>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/" class="text-white">메인화면</router-link>
                            </li>
                            <li v-show="!getIsLogin">
                                <router-link to="/login" class="text-white">로그인</router-link>
                            </li>
                            <li v-show="getIsLogin">
                                <a @click="logout()" class="text-white">로그아웃</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useMemberStore } from '@/store/member';
import { storeToRefs } from 'pinia';
import router from '@/router/router';

const memberStore = useMemberStore();
const { getIsLogin } = storeToRefs(memberStore); //이런식, 혹은 computed() => 로 래핑 해줘야함. 이렇게 하지 않으면 localStorage에 정상저장X 오류남.


const logout = () => {
    console.log('*** logout ***');
    //1. pinia state 초기화
    memberStore.logout();    
    alert('로그아웃 되었습니다.');
    //2. 세션을 쓴다면 삭제.
    sessionStorage.removeItem('userInfo');
    router.push({ path: '/' });
}

</script>

    