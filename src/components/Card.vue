<template>
    <div class="card shadow-sm">
        <span class="img" :style="{backgroundImage: `url(${props.item.img_path})`}" />
        <div class="card-body">
          <p class="card-text">
            <span>{{ props.item.name }}&nbsp;</span>
            <span class="discount badge bg-danger">{{props.item.discount_per}}%</span>
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-primary">구입</button> 
            <small class="price text-muted">{{formatPrice(props.item.price)}}원</small>
            
            <small class="real text-danger">
              {{formatPrice(props.item.price - (props.item.price * props.item.discount_per / 100))}}원</small>
          </div>
        </div>
    </div>
</template>

<script setup>
import { formatPrice } from '@/utils/Util'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

console.log(props.item)
</script>


<style scoped>
  .card .img{
    display:inline-block;
    width:100%;
    height: 550px;
    background-size: cover;
    background-position: center;
  }

  .card .card-body .price{
    text-decoration: line-through;
  }
</style>