<template>
  <header class="subHeader">
    <div class="logo">
      <a href="/"><img src="../assets/images/main/logo.png" alt="logo"></a>
    </div>

    <form class="s-search-form" @submit.prevent="submitSearch">
      <input type="search" v-model="searchValue" placeholder="동 이름 또는 맛집 검색하기" class="sub-search-bar">
      <button type="submit" class="sub-search-button"></button>
    </form>

    <ul>
      <li><a href="#" @click.prevent><router-link to="/searchResult/listpage">빵집 리스트</router-link></a></li>
      <li @click="$emit('open-bm-modal')" @click.prevent><a href="#">북마크</a></li>
      <li><a href="#" @click.prevent><router-link to="/UserPage">마이페이지</router-link></a></li>
      <li><a href="#" @click.prevent><router-link to="/LoginForm"><img src="../assets/images/main/login.png" alt="login"></router-link></a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'subHeader',
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    submitSearch() {
      let router = this.$router;

            router.push({
                path: '/searchResult/listpage',
                query: {
                    searchValue: this.searchValue
                }
            });
    },
  },
};
</script>

<style>
        body{
            margin: 0;
            /* padding: 60px 0 0 0; */
            font-size: 15px;
            color: #454545;
            font-family: 'NotoSansRegular';
            list-style: none;
            /* padding-top: 60px; */
        }

        a{
            color: #454545;
            text-decoration: none;
        }

        ul{
            list-style: none;
        }

        button{cursor: pointer;}

        .subHeader{
            width: 100%;
            height: 60px;
            background-color: #fff;
            border-bottom: 1px solid #e9e9e9;
            z-index: 300;
            top: 0;
            position: fixed;
        }
        .subHeader .logo{
            width: 10%;
            float: left;
            position: absolute;
            left: 40px;
            top: 2px;
        }

        .s-search-form .sub-search-bar{
            position: absolute;
            top: 10px;
            left: 160px;
            width: 850px;
            height: 40px;
            background-color: #f8f8f8;
            border: none;
            border-radius: 10px;
            display: inline-block;
            padding: 3px 0 0 60px;
            font-size: 15px;
        }
        .s-search-form .sub-search-bar:focus{
            outline: none;
        }
        .s-search-form .sub-search-button{
            width: 20px;
            height: 20px;
            border: none;
            background: url(../assets/images/main/search.png) no-repeat;
            background-size: 20px 20px;
            position: absolute;
            left: 182px;
            top: 20px;
        }
        input::-ms-clear,
        input::-ms-reveal{
            display:none;
            width:0;
            height:0;
        }
        input::-webkit-search-decoration,
        input::-webkit-search-cancel-button,
        input::-webkit-search-results-button,
        input::-webkit-search-results-decoration{
            display:none;
        }

        .subHeader ul{
            float: right;
            width: 28%;
            display: flex;
            justify-content: space-around;
            margin: auto;
            margin-top: 15px;
        }
        .subHeader ul li{
            font-size: 17px;
            font-family: "NotoSansRegular";
        }
        header ul li:last-child{
            margin-top: 3px;
            margin-left: -30px;
        }
        .subHeader ul li a:hover{
            color: #ffa559;
        }
</style>