<template>
        <div class="search-result" v-if="$route.query.searchValue !=null">
        <!-- 검색 결과 -->
        <p class="result-text">
      <span v-if="$route.query.searchValue !== null">" {{ $route.query.searchValue }} " <span style="font-size: 18px ; font-weight: none;">의 검색 결과입니다.</span></span>
      <span v-else>&nbsp;</span>
    </p>
        </div>
        <router-view></router-view>
</template>

<script>
import listpage from "./listpage-containter.vue"

export default {
    name: "searchResult",
    components: {
        listpage,
    }
}
</script>

<style scoped>
.search-result{
    width: 1200px;
    height: 40px;
    margin: 40px auto 0px;
    text-align: left;
}
.search-result .result-text{
    font-size: 20px;
}
.search-result .result-text span{
    font-size: 30px;
    font-weight: bold;
}
</style>