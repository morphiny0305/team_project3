<template>
    <splide class="store-slide-area" :options="storeOptions">
        <splide-slide class="store-slide-img"><img :src="slicedBreadShop[$route.params.bs_seq-1].bs_img1" alt="store1"></splide-slide>
        <splide-slide class="store-slide-img"><img :src="slicedBreadShop[$route.params.bs_seq-1].bs_img2" alt="store2"></splide-slide>
        <splide-slide class="store-slide-img"><img :src="slicedBreadShop[$route.params.bs_seq-1].bs_img3" alt="store3"></splide-slide>
        <splide-slide class="store-slide-img"><img :src="slicedBreadShop[$route.params.bs_seq-1].bs_img4" alt="store4"></splide-slide>
        <splide-slide class="store-slide-img"><img :src="slicedBreadShop[$route.params.bs_seq-1].bs_img5" alt="store5"></splide-slide>
    </splide>

    <section class="store-info-area">
        <div class="store-header">
            <p class="store-name">{{slicedBreadShop[$route.params.bs_seq-1].bs_name}}</p>
            <!-- <p class="store-review-avg">{{slicedBreadShop[$route.params.bs_seq].score}}</p> -->
            <div class="store-star-area" @click="storeStar($event)">
                <button class="stroe-star"></button>
                <p>찜하기</p>
            </div>

            <div class="review-star-count">
                <div class="review-count">
                    <img src="../assets/images/store-detail/store-review-icon.png" alt="store-review-icon">
                    <p>45</p>
                </div>
                <div class="star-count">
                    <img src="../assets/images/store-detail/store-star-count.png" alt="store-review-icon">
                    <p>23</p>
                </div>
            </div>
        </div>

        <div class="store-detail-info">
            <table>
                <tr>
                    <th>주소</th>
                    <td>경기도 안산시 {{slicedBreadShop[$route.params.bs_seq-1].bs_addr1}} {{slicedBreadShop[$route.params.bs_seq-1].bs_addr2}} {{slicedBreadShop[$route.params.bs_seq-1].bs_addr3}}</td>
                </tr>
                <tr>
                    <th>전화번호</th>
                    <td>{{slicedBreadShop[$route.params.bs_seq-1].bs_phone}}</td>
                </tr>
                <!-- <tr>
                    <th>사이트</th>
                    <td>{{slicedBreadShop[$route.params.bs_seq].site}}</td>
                </tr> -->
                <tr>
                    <th>영업시간</th>
                    <td>{{slicedBreadShop[$route.params.bs_seq-1].bs_time}}</td>
                </tr>
                <tr>
                    <th>휴일</th>
                    <td>{{slicedBreadShop[$route.params.bs_seq-1].bs_holiday}}</td>
                </tr>
                <tr>
                    <th>메뉴</th>
                    <td>
                        {{slicedBreadShop[$route.params.bs_seq-1].bs_menu}}
                        <!-- <ul>
                            <li v-for="(a, i) in breadShop[$route.params.id].menu" :key="i">{{breadShop[$route.params.id].menu[i]}}</li>
                        </ul> -->
                    </td>
                </tr>
            </table>


            <div class="store-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12692.288634000039!2d126.8389385!3d37.3171184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f1b9976bc0b%3A0xdd81061eb4f2ef1d!2z6re466aw7Lu07ZOo7YSw7JWE7Lm0642w66-4IOyViOyCsOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1683355558450!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>

    <section class="review-area">
        <h2 class="review-header">리뷰</h2>

        <div class="review-write">
            <div class="write-user-area">
                <img src="../assets/images/store-detail/user-img.png" alt="user">
                <p class="write-user-name">망고소녀</p>
            </div>
            <form action="review-write-form" class="review-write-form" @submit.prevent="addReview()">
                <label>
                    <input type="radio" name="star" value=5 checked="checked">
                    <img src="https://minseo605.github.io/img/five-star.png" alt="store-review-star">
                </label>
                <label>
                    <input type="radio" name="star" value=4>
                    <img src="https://minseo605.github.io/img/four-star.png" alt="store-review-star">
                </label>
                <label>
                    <input type="radio" name="star" value=3>
                    <img src="https://minseo605.github.io/img/three-star.png" alt="store-review-star">
                </label>
                <label>
                    <input type="radio" name="star" value=2>
                    <img src="https://minseo605.github.io/img/two-star.png" alt="store-review-star">
                </label>
                <label>
                    <input type="radio" name="star" value=1>
                    <img src="https://minseo605.github.io/img/one-star.png" alt="store-review-star">
                </label>

                <label>
                    <textarea v-model="newReviewText" name="review" id="review" cols="80" rows="10" maxlength="800" placeholder="이 곳은 어땠나요? 식당의 분위기와 서비스도 궁금해요! (최대 800자)"></textarea>
                    <input type="submit" value="작성">
                </label>
            </form>
        </div>

        <div class="review-view-area">
            <div class="review-view" v-for="(a, i) in reviews.slice(1, reviews.length).reverse()" :key="i"> 
                <div class="view-user-area">
                    <img src="../assets/images/store-detail/user-img.png" alt="user">
                    <p class="view-user-name">{{ a.userName }}</p>
                </div>

                <div class="review-text">                    
                    <div class="view-review-star">
                        <img :src="a.starSelect" alt="store-review-star">
                    </div>
                    
                    <p class="review-write-day">{{ a.writeDate }}</p>

                    <p class="review-writing" v-html="a.reviewText">

                    </p>

                    <div class="review-ud">
                        <p class="update">수정</p>
                        <p class="delete">삭제</p>
                    </div>

                    <div class="review-like" @click="reviewLikeClick(reviews)">
                        <img src="../assets/images/store-detail/empty-like.png" alt="empty-like">
                        <p class="like-count">{{ a.LikeCount }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide-btn">
            <button class="review-prev-btn" @click="prevPage()"><img src="../assets/images/store-detail/review-prev-btn.png" alt="review-prev-btn"></button>
            <button class="review-btn1 review-btn">1</button>
            <button class="review-btn2 review-btn">2</button>
            <button class="review-btn3 review-btn">3</button>
            <button class="review-btn4 review-btn">4</button>
            <button class="review-btn5 review-btn">5 </button>
            <button class="review-next-btn" @click="nextPage()"><img src="../assets/images/store-detail/review-next-btn.png" alt="review-next-btn"></button>
        </div>
    </section>
    
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import axios from 'axios';

export default {
    name: "storeDetail",
    computed: {
    selectedBreadShop() {
      const bsSeq = this.$route.params.bs_seq;
      return this.slicedBreadShop.find(item => item.bs_seq === bsSeq);
    },
  },
    props: {
        breadShop: Object,
    
    },
    created() {
    this.BreadShopData();
  },
    data() {
        return {
            slicedBreadShop: [],
            reviews: [
                {
                userName: "망고소녀",
                writeDate: "2023-05-25",
                starSelect: "https://minseo605.github.io/img/one-star.png",
                reviewText: null,
                LikeCount: 0,
                LikeCllickStatus: false
                }
            ],
            nowDate: "",
            reviewLikeStatus: false,
            storeOptions: {
                type: 'loop',
                perPage: 5,
                rewind: true,
                autoplay: true,
                arrows: true,
                perMove:1,
                dots: false,
                animatedDots: false
            },
        }
    },
    components: {
        Splide,
        SplideSlide,
    },
    methods: {
        BreadShopData() {
      axios
        .get('/api/bread')
        .then((response) => {
          this.slicedBreadShop.push(...response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    storeStar(event){
            let sdButton = event.currentTarget.querySelector("button");
            let sdText = event.currentTarget.querySelector("p");

            sdButton.classList.toggle("sd-star-click");
            sdText.classList.toggle("sd-star-click-text");
        },
        reviewLikeClick(reviews) {
            // 리뷰 좋아요 함수

            let reviewCount = 0;
            parseInt(reviews.LikeCount, 0);
            reviews.LikeCount++;
            console.log(reviews.LikeCount);

            for (let i = 0; i < reviews.length; i++) {
                if (this.reviewLikeStatus == false) {
                    this.reviewLikeStatus = true;
                    // reviewCount = 1;
                    reviews[i].LikeCount++;
                } else {
                    this.reviewLikeStatus = false;
                    // reviewCount = -1;
                    reviews[i].LikeCount--;
                }
            }

            console.log(this.reviewLikeStatus);
        },
        getToday() {
                let date = new Date();
                let year = date.getFullYear();
                let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
                let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

                this.nowDate = year + "-" + month + "-" + day;
                
                return this.nowDate;
            },
        countStar(){
            let starUrl = ""; 
            let value = document.querySelector('input[name="star"]:checked').value;
            
                if (value == 1) {
                    starUrl = "https://minseo605.github.io/img/one-star.png";
                } else if (value == 2) {
                    starUrl = "https://minseo605.github.io/img/two-star.png";
                } else if (value == 3) {
                    starUrl = "https://minseo605.github.io/img/three-star.png";
                } else if (value == 4) {
                    starUrl = "https://minseo605.github.io/img/four-star.png";
                } else if (value == 5){
                    starUrl = "https://minseo605.github.io/img/five-star.png";
                }
            return starUrl;
        },
        reviewTextFilter(){
            if(this.newReviewText !== null) {
                return this.newReviewText.replaceAll(/\n/g, "</br>");
            } else {
                return false;
            }
        },
        addReview(){
            let userName = document.querySelector(".write-user-name").innerText;
            let starUrl = this.countStar();
            this.getToday();
            let newReviewText = null;

            if(this.newReviewText == null){
                alert("글을 작성해주세요");
                return false;
            } else {
                newReviewText = this.reviewTextFilter();

                const newReview = {
                    userName: userName,
                    writeDate: this.nowDate,
                    starSelect: starUrl,
                    reviewText: newReviewText,
                    LikeCount: 0,
                    reviewLikeStatus: false
                }

                this.reviews.push(newReview);
                this.newReviewText = null;
            }
        }
    }
}
</script>

<style>
    section{
        margin: 0;
        padding: 0;
        font-size: 15px;
        color: #454545;
        font-family: 'NotoSansRegular';
        list-style: none;
    }
    a{
        color: #454545;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    button{cursor: pointer;}

    .store-slide-area{
        width: 1870px;
        height: 300px;
        margin: 20px auto 0;
    }
    .store-slide-area .store-slide-img{
        width: 350px !important;
        height: 300px !important;
        margin-right: 30px;
    }
    .store-slide-area .store-slide-img img{
        width: 350px;
        height: 300px;
    }
    .store-info-area{
        width: 1200px;
        height: 570px;
        margin: 70px auto;
    }
    .store-slide-area:hover .splide__arrows{
        display: block;
        transition: 2s all;
    }
    .store-info-area .store-header{
        width: inherit;
        height: 90px;
        border-bottom: 1px solid #D7D7D7;
        display: flex;
        flex-flow: row wrap;
        line-height: 0;
        margin: 0;
        position: relative;
    }
    .store-info-area .store-header .store-name{
        font-size: 30px;
        font-family: "NotoSansMedium";
        margin: 12px 10px 0 0;
    }
    .store-info-area .store-header .store-review-avg{
        font-size: 30px;
        color: #FFA559;
        font-family: "NotoSansRegular";
        margin-top: 12px;
    }
    .store-info-area .store-header .store-star-area{
        cursor: pointer;
        color: #b2b2b2;
        position: absolute;
        right: 0;
    }
    .store-info-area .store-header .store-star-area button{
        width: 38px;
        height: 36px;
        border-color: transparent;
        border: none;
        background: url(../assets/images/store-detail/store-detail-star.png) no-repeat;
    }
    .store-info-area .store-header .store-star-area p{
        width: inherit;
        font-size: 13px;
    }
    .store-info-area .store-header .review-star-count{
        width: 1200px;
        display: flex;
        color: #b2b2b2;
        line-height: 0;
        margin-top: 10px;
    }
    .store-info-area .store-header .review-star-count .review-count{
        display: flex;
        margin-right: 15px;
    }
    .store-info-area .store-header .review-star-count .review-count img{
        width: 18px;
        height: 18px;
        margin-right: 1px;
    }
    .store-info-area .store-header .review-star-count .review-count p{
        margin-top: 10px;
    }

    .store-info-area .store-header .review-star-count .star-count{
        display: flex;
    }
    .store-info-area .store-header .review-star-count .star-count img{
        width: 17px;
        height: 16px;
        margin-right: 3px;
    }
    .store-info-area .store-header .review-star-count .star-count p{
        margin-top: 10px;
    }
    .store-info-area .store-detail-info{
        width: 1200px;
        height: 460px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #D7D7D7;
    }
    .store-info-area .store-detail-info table{
        width: 500px;
        height: 460px;
        padding-top: 25px;
    }
    .store-info-area .store-detail-info table tr{
        vertical-align: top;
        width: inherit;
        height: 40px;
    }
    .store-info-area .store-detail-info table tr th{
        width: 100px;
        text-align: left;
        vertical-align: top;
        font-family: "NotoSansLight";
        color: #b2b2b2;
    }
    .store-info-area .store-detail-info table tr:last-child td ul{
        margin: 0;
        padding: 0;
        width: 260px;
        height: 200px;
    }
    .store-info-area .store-detail-info table tr:last-child td ul li{
        width: inherit;
        border-bottom: 1px solid #d7d7d7;
        padding: 7px 0;
    }
    .store-info-area .store-detail-info table tr:last-child td ul li:first-child{
        padding-top: 0;
    }
    .store-info-area .store-detail-info table tr:last-child td ul li:last-child{
        border: none;
    }

    .store-info-area .store-detail-info .store-location{
        width: 400px;
        height: 320px;
    }
    .store-info-area .store-detail-info .store-location iframe{
        width: inherit;
        height: inherit;
    }

    .review-area{
        width: 1200px;
        margin: auto;
    }
    .review-area .review-header{
        width: inherit;
        height: 26px;
        border-bottom: 3px solid #888;
        padding-bottom: 15px;
    }
    .review-area .review-write{
        width: inherit;
        height: 200px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 40px; */
        margin-top: 10px;
        background-color: #f8f8f8;
    }
    .review-area .review-write .write-user-area{
        width: 200px;
        position: relative;
    }
    .review-area .review-write .write-user-area img{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 15px;
        margin: auto;
    }
    .review-area .review-write .write-user-area .write-user-name{
        position: absolute;
        width: 200px;
        height: 20px;
        text-align: center;
        left: 0;
        right: 0;
        top: 70px;
        bottom: 0;
        margin: auto;
        font-family: "NotoSansMedium";
    }
    .review-area .review-write .review-write-form{
        width: 1000px;
        height: 160px;
        margin: auto;
    }
    .review-area .review-write .review-write-form label{
        margin-right: 10px;
    }
    .review-area .review-write .review-write-form label img{
        height: 16px;
    }
    .review-area .review-write .review-write-form label:last-child{
        display: flex;
        justify-content: space-around;
        width: 970px;
        height: 130px;
        margin-top: 10px;
    }
    .review-area .review-write .review-write-form label:last-child textarea{
        width: 800px;
        height: 130px;
        border: none;
        text-indent: 10px;
        padding-top: 10px;
        margin-right: 25px;
    }
    .review-area .review-write .review-write-form label:last-child textarea:focus{
        outline: 1px solid #454545;
        background-color: #fff;
    }
    .review-area .review-write .review-write-form label:last-child input:last-child{
        width: 120px;
        height: 140px;
        border: none;
        background-color: #454545;
        color: #fff;
        cursor: pointer;
    }
    .review-area .review-view-area{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .review-area .review-view-area .review-view{
        border-top: 1px solid #D7D7D7;
        width: inherit;
        display: flex;
        padding-bottom: 20px;
    }
    .review-area .review-view-area .review-view .view-user-area{
        width: 200px;
        position: relative;
    }
    .review-area .review-view-area .review-view .view-user-area img{
        position: absolute;
        left: 0;
        right: 0;
        top: 40px;
        margin: auto;
    }
    .review-area .review-view-area .review-view .view-user-area .view-user-name{
        position: absolute;
        width: 200px;
        height: 20px;
        text-align: center;
        left: 0;
        right: 0;
        top: 110px;
        margin: auto;
        font-family: "NotoSansMedium";
    }
    .review-area .review-view-area .review-view .review-text{
        width: 1000px;
        margin-top: 40px;
        position: relative;
    }
    .review-area .review-view-area .review-view .review-text .view-review-star{
        display: inline-block;
    }
    .review-area .review-view-area .review-view .review-text .review-write-day{
        color: #888;
        position: absolute;
        top: -20px;
        right: 0;
    }
    .review-area .review-view-area .review-view .review-text .review-writing{
        width: 800px;
        min-height: 40%;
    }
    .review-area .review-view-area .review-view .review-text .review-ud{
        display: flex;
        justify-content: flex-start;

    }
    .update, .delete{
        color: #888;
        bottom: 42px;
        cursor: pointer;
        display: inline;
    }
    .update::after{
        content: "|";
        color: #ddd;
        margin: 0 7px;
    }
    .review-like{
        width: 60px;
        height: 25px;
        border: 1px solid #d7d7d7;
        border-radius: 15px;
        position: relative;
        right: 0;
        top: -45px;
        float: right;
        /* display: flex; */
        cursor: pointer;
    }
    .review-area .review-view-area .review-view .review-text .review-like img{
        position: absolute;
        top: 6px;
        left: 10px;
    }
    .review-area .review-view-area .review-view .review-text .review-like .like-count{
        position: absolute;
        top: -12px;
        left: 32px;
        font-size: 14px;
    }
    .review-area .slide-btn{
        width: 320px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
    .review-area .slide-btn .review-prev-btn, .review-area .slide-btn .review-next-btn{
        border: 1px solid #ddd;
        background-color: transparent;
        width: 35px;
        border-radius: 5px;
    }
    .review-area .slide-btn .review-btn{
        border: 1px solid #ddd;
        background-color: transparent;
        width: 40px;
        height: 30px;
        border-radius: 5px;
    }

    [type="radio"] {
        appearance: none;
        border: max(1px, 0.1em) solid gray;
        border-radius: 50%;
        width: 0.9em;
        height: 0.9em;
        cursor: pointer;
    }

    [type="radio"]:checked {
        border: 0.3em solid #454545;
    }

    .sd-star-click{
        border-color: transparent;
        border: none;
        width: 38px;
        height: 36px;
        background: url(../assets/images/store-detail/store-detai-fill-star.png) no-repeat !important;
    }
    .sd-star-click-text{
        color: #FFA559;
    }
</style>