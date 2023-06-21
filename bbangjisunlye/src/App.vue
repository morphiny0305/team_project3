<template>
  <section>
    <bmModal @close-bm-modal='isbmModal=false' :isbmModal="isbmModal" :breadShop="breadShop"></bmModal>
    <IdFindModal :FindModal="FindModal" @close-find-modal='FindModal=false'></IdFindModal>
    <subHeader @open-bm-modal='isbmModal=true' :searchValue="searchValue" v-show="this.$route.path !== '/' && this.$route.path !== '/admin'"></subHeader>
    <router-view @open-bm-modal='isbmModal=true' @open-find-modal='FindModal=true' :FindModal="FindModal" :breadShop="breadShop"></router-view>
    <footerS v-show="this.$route.path !== '/admin'"></footerS>
  </section>
</template>

<script>
// components
import index from './components/index.vue';
import subHeader from './components/subHeader.vue';
import footerS from './components/footerS.vue'
import bmModal from './components/bookmark.vue'
import listpage from "./components/listpage-containter.vue";
import searchResult from './components/searchResult.vue';
import IdFindModal from './components/IdFindModal.vue';
import storeDetail from './components/storeDetail.vue';

// json
import breadShop from './assets/json/breadshop.json';


export default {
  name: 'App',
  components: {
    index,
    subHeader,
    footerS,
    bmModal,
    listpage,
    searchResult,
    IdFindModal,
    breadShop,
    storeDetail
  },
  data() {
    return {
      isbmModal: false,
      FindModal: false,
      breadShop
    }
  },

}
</script>

<style>

  @font-face {
    font-family: 'jalnan';
    src: url('./assets/fonts/Jalnan.otf');
  }

  @font-face {
    font-family: 'NotoSansBlack';
    src: url('./assets/fonts/NotoSansKR-Black.otf');
  }

  
  @font-face {
    font-family: 'NotoSansBold';
    src: url('./assets/fonts/NotoSansKR-Bold.otf');
  }

  
  @font-face {
    font-family: 'NotoSansLight';
    src: url('./assets/fonts/NotoSansKR-Light.otf');
  }

  
  @font-face {
    font-family: 'NotoSansMedium';
    src: url('./assets/fonts/NotoSansKR-Medium.otf');
  }

  
  @font-face {
    font-family: 'NotoSansRegular';
    src: url('./assets/fonts/NotoSansKR-Regular.otf');
  }

  
  @font-face {
    font-family: 'NotoSansThin';
    src: url('./assets/fonts/NotoSansKR-Thin.otf');
  }

body{
  padding-top: 60px;
}

  .splide__arrow {
    -ms-flex-align: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    height: 2.5em;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: .7;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2.5em;
    z-index: 1;
}
.splide__arrow--prev {
    left: 1.5em;
}

.splide__arrow--next {
    right: 1.5em;
}

  .splide__arrow svg {
        fill: #ffffff;
        height: 1em;
        width: 1em;
    }
</style>
