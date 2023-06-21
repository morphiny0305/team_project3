<template>
  <div>
    <div class="listpage-wrap">
      <!-- 상단탭메뉴 -->
      <div class="listpage-topmenu">
        <ul>
          <li :class="{ active: selectedCategory === '' }" @click="showAllItems">전체</li>
          <li :class="{ active: selectedCategory === '베이커리' }" @click="sortBy('베이커리')">베이커리</li>
          <li :class="{ active: selectedCategory === '카페' }" @click="sortBy('카페')">카페</li>
          <li :class="{ active: selectedCategory === '디저트' }" @click="sortBy('디저트')">디저트</li>
        </ul>
        <div class="list-sort">
          <p class="list-sort-relevant" :class="{active: selectedSort === '관련도순'}" @click="listSort('관련도순')">관련도순</p>
          <p class="list-sort-famous" :class="{active: selectedSort === '인기순'}" @click="listSort('인기순')">인기순</p>
        </div>
      </div>
      <!-- 중단 내용 -->
    <ListContent :slicedBreadShop="displayedItems" />
    <!-- 하단탭메뉴 -->
    <div class="listpage-botmenu">
      <!-- 이전 버튼 -->
      <div
        class="listpage-botmenu-box"
        v-if="currentPage > 4"
        @click="changePage(currentPage - 4)"
      >
        <a href="#">이전</a>
      </div>
      <!-- 숫자 버튼 -->
      <div
        v-for="pageNumber in displayedPageNumbers"
        :key="pageNumber"
        class="listpage-botmenu-box"
        :class="{ active: currentPage === pageNumber }"
        @click="changePage(pageNumber)"
      >
        <router-link :to="`/searchResult/listpage/listcontent${pageNumber}`">{{ pageNumber }}</router-link>
      </div>
      <!-- 다음 버튼 -->
      <div
        class="listpage-botmenu-box listpage-next-btn"
        v-if="currentPage < totalPages"
        @click="changePage(currentPage + 4)"
      >
        <a href="#">다음</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import ListContent from './listcontent1.vue';

export default {
  data() {
    return {
      breadShop: [],
      selectedCategory: '',
      selectedSort: '',
      searchValue: '',
      filteredItems: [],
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  components: {
    ListContent,
  },
  created() {
    const routeQuery = this.$route.query;
  this.searchValue = routeQuery.searchValue || '';
    this.fetchBreadShopData();
  },
  watch: {
    searchValue: {
      immediate: true,
      handler(value) {
        this.filterItems();
      },
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredItems.slice(startIndex, endIndex);
    },
    displayedPageNumbers() {
      const pageNumbers = [];
      const startPage = Math.floor((this.currentPage - 1) / 4) * 4 + 1;
      const endPage = Math.min(startPage + 3, this.totalPages);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      return pageNumbers;
    },
  },
  methods: {
    fetchBreadShopData() {
      axios
        .get('/api/bread')
        .then((response) => {
          this.breadShop.push(...response.data.data);
          this.filterItems();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    sortBy(category) {
      this.selectedCategory = category;
      this.filterItems();
    },
    showAllItems() {
      this.selectedCategory = '';
      this.filterItems();
    },
    listSort(selectedSort) {
      this.selectedSort = selectedSort;
      this.filterItems();
    },
    filterItems() {
      let items = this.breadShop;

      // 카테고리 선택에 따라 데이터 필터링
      if (this.selectedCategory !== '') {
        items = items.filter((item) => item.bs_class === this.selectedCategory);
      }

      // 검색어에 따라 데이터 필터링
      if (this.searchValue.trim() !== '') {
        items = items.filter((item) => {
          return (
            item.bs_name.includes(this.searchValue) ||
            item.bs_addr2.includes(this.searchValue) ||
            item.bs_menu.includes(this.searchValue)
          );
        });
      }

      this.filteredItems = items;
      this.currentPage = 1; // 필터링된 데이터가 변경되면 현재 페이지를 1로 초기화
    },
    changePage(pageNumber) {
      if (pageNumber < 1) {
        pageNumber = 1;
      } else if (pageNumber > this.totalPages) {
        pageNumber = this.totalPages;
      }

      this.currentPage = pageNumber;
      this.$router.push(`/searchResult/listpage/listcontent${pageNumber}`);
    },
  },
};
</script>
<style>

/* 페이지 전체 규격설정 */
.listpage-wrap{
  width: 1200px;
  margin: 50px auto 0;
  /* overflow: hidden; */
  font-family: 'Noto Sans KR';
  /* margin: auto; */
}

/* 상단 탭메뉴 */
.listpage-topmenu ul{
    display: flex;
    padding: 0 0 15px 0;
    border-bottom: 1px solid #888;
    font-size: 18px;
    margin-bottom: 10px;
}
.listpage-topmenu ul li{
    padding: 0 45px;
    color:#888;
    cursor: pointer;
}
.listpage-topmenu ul li:first-child{
  padding-left: 0;
}
.listpage-topmenu ul li.active {
    color: #FF6600;
    font-weight: bold;
}

.listpage-topmenu ul li:hover{
  color: #FF6600;
}

.list-sort{
  display: flex;
  justify-content: flex-end;
  color: #888;
  cursor: pointer;
  padding: 0;
  line-height: 0;
}
.list-sort .list-sort-relevant.active, .list-sort .list-sort-famous.active{
  color: #FF6600;
  padding: 0;
}
.list-sort .list-sort-relevant::after{
  content: "|";
  color: #ddd;
  margin: 0 10px;
}

/* 중단 내용 */
.listpage-contents{
    clear: both;
    margin: auto;
    margin-top: 45px;
}
.listpage-contents a{
    display: flex;
    flex-wrap: wrap;
}
.listpage-contents-box{
    width: 330px;
    margin-bottom: 55px;
    margin-right: 105px;
}
.listpage-contents-box:nth-child(3n){
  margin-right: 0;
}
.listpage-contents-box-image{
  width: 330px;
  height: 210px;
  background-color: #dfdfdf;
  background-repeat: no-repeat;
  margin-bottom: 10px;
}
.listpage-contents-box span.listpage-contents-box-text1{
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;
}
.listpage-contents-box span.listpage-contents-box-text2{
    font-size: 20px;
    color:#ffa559;
    margin-left: 5px;
}
.listpage-contents-box div.listpage-contents-box-text3{
    font-size: 15px;
    color:#888;
}
.listpage-contents-box img{
    width: 340px;
    height: 210px;
}
.listpage-contents div{
    text-align: left;
}
/* .listpage-contents-array{
    position: absolute;
    right: 0; top: 20px;
    font-size: 15px;
    color: #888;
}
.listpage-contents-array span{
    font-weight: bold;
    margin: 10px;
}
.listpage-contents-array-text1{
    color: #FF6600;
} */
/* 하단탭메뉴 */
.listpage-botmenu{
    margin-top: 70px;
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #888;
}
.listpage-botmenu-box{
  width: 42px;
  height: 30px;
  border: 1px solid #ddd;
  margin: 0 5px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  font-size: 13px;
}
.listpage-botmenu-box a{
  display: inline-block;
  width: inherit;
  height: inherit;
  /* background-color: #888; */
}
.listpage-botmenu-box:first-child{
    color: #000;
}
.storelist-next-btn{
  width: 35px;
  background: url(../assets/images/store-list/storelist-next-btn.png) no-repeat;
  background-position: center;
  cursor: pointer;
}
/* 하단탭메뉴 클릭시 번호 강조 */
.listpage-botmenu-box.active {
  color: #FF6600;
  font-weight: bold;
}
</style>