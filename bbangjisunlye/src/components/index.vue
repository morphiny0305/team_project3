<template>
    <section>
        <header>
            <div class="logo">
                <a href="#"><img src="../assets/images/main/logo.png" alt="logo"></a>
            </div>

            <ul>
                <li><a href="#" @click.prevent><router-link to="/searchResult/listpage">빵집 리스트</router-link></a></li>
                <li><a href="#" @click="$emit('open-bm-modal')" @click.prevent>북마크</a></li>
                <li><a href="#" @click.prevent><router-link to="/UserPage">마이페이지</router-link></a></li>
                <li><a href="#" @click.prevent><router-link to="/LoginForm"><img src="../assets/images/main/login.png" alt="login"></router-link></a></li>
            </ul>
        </header>

<div class="main-search">
    <div class="main-img">
        <img src="../assets/images/main/main-img.png" alt="main-img">
    </div>

    <div class="text-area">
        <p class="main-text">빵지순례</p>
        <p class="sub-text">빵에 진심인 사람들을 위한 커뮤니티</p>
    </div>
    
    <form class="search-form" @submit="search">
        <input type="search" v-model="searchValue" placeholder="동 이름 또는 맛집 검색하기" class="main-search-bar">
        <button type="submit" class="search-button"></button>
    </form>
</div>

<button class="goAdmin" @click="$router.push('/admin')">관리자 컴포넌트 확인용</button>

<div class="list-area">
    <p>추천 베이커리</p>
    <splide :options="options" class="list-slide">
        <splide-slide class="list-slide-item" @click="searchKeyword($event)">
            <img src="../assets/images/main/tmp1.jpg" alt="list1">
            <p><span class="search-keyword">{{ listArray[0] }}</span> 맛집 베스트</p>
        </splide-slide>
        <splide-slide class="list-slide-item" @click="searchKeyword($event)">
            <img src="../assets/images/main/tmp2.jpg" alt="list2">
            <p><span class="search-keyword">{{ listArray[1] }}</span> 맛집 베스트</p>
        </splide-slide>
        <splide-slide class="list-slide-item" @click="searchKeyword($event)">
            <img src="../assets/images/main/tmp3.jpg" alt="list3">
            <p><span class="search-keyword">{{ listArray[2] }}</span> 맛집 베스트</p>
        </splide-slide>
    </splide>
</div>
    <div class="border"></div>

    <div class="post-area">
        <p>신규 게시글</p>
        <splide class="post-slide" :options="postOptions">
            <splide-slide class="post-slide-item">
                <img src="../assets/images/main/tmp3.jpg" alt="post1">
                <div class="text text1">
                    <p class="post-title">루프탑 카페 6곳</p>
                </div>
            </splide-slide>
            <splide-slide class="post-slide-item">
                <img src="../assets/images/main/tmp1.jpg" alt="post2">
                <div class="text text2">
                    <p class="post-title">이번 주 주말은 문래 뽀개기!</p>
                </div>
            </splide-slide>
            <splide-slide class="post-slide-item">
                <img src="../assets/images/main/tmp2.jpg" alt="post3">
                <div class="text text3">
                    <p class="post-title">루프탑 카페 6곳</p>
                </div>
            </splide-slide>
            <splide-slide class="post-slide-item">
                <img src="../assets/images/main/tmp4.jpg" alt="post4">
                <div class="text text4">
                    <p class="post-title">기다림이 길어질 수록 더 맛있다는 증거!</p>
                </div>
            </splide-slide>
            <splide-slide class="post-slide-item">
                <img src="../assets/images/main/tmp3.jpg" alt="post5">
                <div class="text text5">
                    <p class="post-title">루프탑 카페 6곳</p>
                </div>
            </splide-slide>
        </splide>
    </div>
    </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    name: 'index',
    data() {
        return {
            searchValue: "",
            listArray: [
                "단팥빵", "샌드위치", "휘낭시에"
            ],
            options: {
                type : 'loop', // 돌아가는 거
                perPage: 3, // 보여질 페이지
                rewind : true, // 모름
                autoplay: false, // 자동 슬라이드
                arrows: true, // 버튼
                perMove:1, // 없어도 상관없음 눌렀을 때 움직일 페이지 수 
                dots: false,
                animatedDots: false,
            },
            postOptions: {
                type: 'loop',
                perPage: 5,
                rewind: true,
                autoplay: false,
                arrows: true,
                perMove:1,
                dots: false,
                animatedDots: false,
                width: '131.250em',
                gap: '18em'
            },
        }
    },
    components: {
        Splide,
        SplideSlide,
    },
    methods: {
        search(){
            let router = this.$router;

            router.push({
                path: '/searchResult/listpage',
                query: {
                    searchValue: this.searchValue
                }
            });
            if(this.searchValue == null){
                alert("검색어를 입력해주세요")
            }
        },
        searchKeyword(event){
            let router = this.$router;
            let searchKeyword = event.target.querySelector(".search-keyword");

            for (let i = 0; i < this.listArray.length; i++) {
                    if (searchKeyword.innerText == this.listArray[i]) {
                        this.searchValue = this.listArray[i];
                }
            }

            router.push({
                path: '/searchResult/listpage/listcontent1',
                query: {
                    searchValue: this.searchValue
                }
            });
        },
    }
}
</script>

<style scoped>
        body{
            margin: 0;
            /* padding: 0; */
            font-size: 15px;
            color: #454545;
            font-family: 'NotoSansRegular';
            list-style: none;
            box-sizing: border-box;
        }

        a{
            color: #454545;
            text-decoration: none;
        }

        ul{
            list-style: none;
        }

        button{cursor: pointer;}

        header{
            width: 100%;
            height: 60px;
            background-color: #fff;
            position: fixed;
            z-index: 500;
            border-bottom: 1px solid #e9e9e9;
            top: 0;
        }
        header .logo{
            width: 10%;
            height: 50px;
            float: left;
            position: absolute;
            margin: auto;
            left: 40px;
            top: 2px;
}
        header ul{
            float: right;
            width: 28%;
            display: flex;
            justify-content: space-around;
        }
        header ul li{
            font-size: 17px;
            font-family: "NotoSansRegular";
        }
        header ul li:last-child{
            margin-top: 3px;
            margin-left: -30px;
        }
        header ul li a:hover{
            color: #ffa559;
        }

        .main-search{
            width: 100%;
            height: 550px;
            background-color: #ddd;
            margin-bottom: 50px;
            position: relative;
            clear: both;
        }
        .main-search::before{
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
        }
        .main-search .main-img{
            width: 100%;
            height: 100%;
        }
        .main-search .main-img img{
            width: inherit;
            height: inherit;
        }

        .main-search .text-area{
            position: absolute;
            left: 25%;
            bottom: 250px;
            width: 300px;
            height: 85px;
            color: white;
        }
        .main-search .text-area .main-text{
            position: absolute;
            bottom: 5px;
            font-size: 40px;
            font-family: 'jalnan';
        }
        .main-search .text-area .sub-text{
            position: absolute;
            top: 23px;
            font-size: 20px;
            font-family: "NotoSansRegular";
        }

        .main-search .search-form{
            position: absolute;
            bottom: 35%;
            left: 25%;
        }

        .main-search .search-form .main-search-bar{
            width: 900px;
            height: 55px;
            background-color: #f8f8f8;
            border: none;
            border: 0.5px solid #d4d4d4;
            border-radius: 10px;
            display: inline-block;
            padding: 3px 0 0 60px;
            font-size: 15px;
        }
        .main-search .search-form .main-search-bar:focus{
            outline: none;
        }
        .main-search .search-form .search-button{
            width: 20px;
            height: 20px;
            border: none;
            background: url(../assets/images/main/search.png) no-repeat;
            background-size: 20px 20px;
            position: absolute;
            left: 22px;
            bottom: 30%;
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

        .list-area{
            width: 1200px;
            height: 270px;
            margin: auto;
            padding-bottom: 55px;
            position: relative;
        }

        .list-area p{
            width: 1200px;
            margin: 0px auto 20px;
            font-size: 30px;
            color: #ffa559;
            font-family: "NotoSansMedium";
        }

        .list-area .list-slide{
            width: 1200px;
            height: 230px;
            display: flex;
            justify-content: space-between;
            margin: auto;
            position: relative;
        }
        .list-area .list-slide .list-slide-item{
            width: 30% !important;
            height: 230px;
            position: relative;
            cursor: pointer;
            /* float: left; */
            margin-right: 60px;
            background-color: #ddd;
        }
        .list-area .list-slide .list-slide-item::before{
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 360px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
        }
        .list-area .list-slide .list-slide-item img{
            width: 360px;
            height: 230px;
            cursor: pointer;
        }
        .list-area .list-slide .list-slide-item p{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 360px;
            height: 30px;
            text-align: center;
            color: white;
            font-family: "NotoSansRegular";
            font-size: 20px;
        }
        .border{
            width: 1280px;
            border-bottom: 1px solid #ddd;
            margin: auto;
        }

        .post-area{
            width: 100%;
            height: 300px;
            margin: 60px auto 0;
            overflow: hidden;
            position: relative;
        }

        .post-area > p{
            width: 1200px;
            margin: auto;
            padding-bottom: 20px;
            font-size: 30px;
            color: #ffa559;
            font-family: "NotoSansMedium";
        }

        .post-area .post-slide{
            width: 1910px;
            height: 240px;
            margin: auto;
            /* margin-left: -6%; */
        }
        
        .post-area .post-slide .post-slide-item{
            position: relative;
            width: 380px;
            height: 240px;
            cursor: pointer;
        }
        .post-area .post-slide .post-slide-item::before{
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 380px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
        }
        .post-area .post-slide .post-slide-item img{
            width: 380px;
            height: inherit;
        }
        .post-area .post-slide .post-slide-item .text{
            position: absolute;
            width: 380px;
            height: inherit;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            color: #fff;
            text-align: center;
            display: flex;
            align-items: center;
        }        
        .post-area .post-slide .post-slide-item > .text .post-title{
            width: inherit;
            height: 10%;
            font-size: 20px;
            font-family: "NotoSansRegular";
        }

        .splide__arrows{
            display: none;
        }

        .post-slide:hover .splide__arrows{
            display: block;
            transition: 2s all;
        }

        .list-slide:hover .splide__arrows{
            display: block;
            transition: 2s all;
        }

        .goAdmin{
            background-color: #ffa559;
            color: white;
            border: none;
            height: 30px;
            border-radius: 10px;
            display: none;
        }
</style>