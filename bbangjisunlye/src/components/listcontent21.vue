<template>
    <div>
      <div class="listpage-contents">
        <router-link v-for="(item, index) in slicedBreadShop" :to="`/storeDetail/${item.bs_seq}`" :key="index">
          <div class="listpage-contents-box">
            <div class="listpage-contents-box-image" :style="{ backgroundImage: `url(${item.bs_map})` }"></div>
            <div>
              <span class="listpage-contents-box-text1">{{ item.bs_name }}</span>
              <span class="listpage-contents-box-text2">{{ item.bs_time }}</span>
            </div>
            <div class="listpage-contents-box-text3">{{ item.bs_addr1 }} {{ item.bs_addr2 }} - {{ item.bs_class }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      breadShop: {
        type: Array,
        required: true,
      },
    },
    computed: {
      slicedBreadShop() {
        return this.breadShop.slice(120, 126);
      },
    },
  };
  </script>
  
  <style>
  /* 스타일 정의 */
  </style>