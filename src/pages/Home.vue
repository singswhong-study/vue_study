<template>
<div>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, i) in state.items" :key="i">
            <Card :item="item" />
          </div>
        </div>
      </div>
    </div>
</div>
</template>

 <script setup>
import Card from '@/components/Card.vue';
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import { useMemberStore } from '@/store/member';

const state = reactive({
    items: []
});

const memberStore = useMemberStore();

onMounted(async () => {

    console.log(memberStore.getIsLogin);
    console.log(memberStore.getEmail);

    try {
        const res = axios.get('/api/art/items');
        state.items = (await res).data;
    } catch (error) {
        console.log(error);
    }
});

</script>

<style lang="scss" scoped>
</style>

<!-- 
<script>
import Card from '@/components/Card.vue';
import axios from 'axios';
import { reactive } from 'vue';

export default {
    name: "Home",
    components: {
        Card
    },
    setup(){

        const state = reactive({
            items: []
        })

        axios.get('/api/items').then((res) => {
            console.log(res);
            state.items = res.data;
        })

        return { state }
    }
}
</script>
 -->
