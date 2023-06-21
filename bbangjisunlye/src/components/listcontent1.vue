<template>
  <div class="listpage-contents">
    <router-link v-for="(item, index) in slicedBreadShop" :to="`/storeDetail/${item.bs_seq}`" :key="index">
      <div class="listpage-contents-box">
        <div class="listpage-contents-box-image" :style="{ backgroundImage: `url(${item.bs_img1})`, backgroundSize: 'cover' }"></div>
        <div>
          <span class="listpage-contents-box-text1">{{ item.bs_name }}</span>
          <span class="listpage-contents-box-text2">{{ item.bs_time }}</span>
        </div>
        <div class="listpage-contents-box-text3">{{ item.bs_addr1 }} {{ item.bs_addr2 }} - {{ item.bs_class }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { routerLink } from 'vue-router';

export default {
  components: {
    'router-link': routerLink,
  },
  props: {
    slicedBreadShop: {
      type: Array,
      required: true,
    },
  },
};
</script>
  
  <style>
  /* 스타일 정의 */
  .listpage-contents{display: flex; flex-wrap: wrap;}
  .listpage-contents-box{margin: 35px !important;}
  </style>