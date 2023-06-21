<template>
    <div class="black-bg" v-if="isbmModal == true">
        <div class="white-bg">
            <button @click="$emit('close-bm-modal')" class="close-btn">x</button>
            <h2>북마크</h2>
            <div class="bm-store-list">
                <div class="bm-store" v-for="(a, i) in breadShop" :key="i">
                    <img :src="breadShop[i].image" alt="bm-store" @click="$emit('close-bm-modal'), storeRouter(i)">
                    <div class="bm-text">
                        <p class="bm-store-name">{{breadShop[i].title}}</p>
                        <p class="bm-store-score">{{breadShop[i].score}}</p>
                        <img src="https://minseo605.github.io/img/bm-empty-star.png" alt="bm-star" class="bm-star bm-star-click" @click="starCilck($event)">
                        <p class="bm-store-area">{{breadShop[i].addr2}} - {{breadShop[i].category}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "bookmark",
    props: {
        isbmModal: Boolean,
        breadShop: Object
    },
    data(){
        return{

        }
    },
    methods: {
        storeRouter(i){
            let router = this.$router;
            let currentId = i;

            router.push({
                name: 'storeDetail',
                params: {id: this.breadShop[currentId].id}
                });
        },
        starCilck(event){
            let bmStar = event.target;
            
            bmStar.classList.toggle("bm-star-click");
        }
    },
}
</script>

<style scoped>
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

    .black-bg{
        z-index: 600;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
    }
    .black-bg .white-bg{
        z-index: 100;
        background: #fff;
        width: 350px;
        height: 500px;
        position: absolute;
        top: 60px;
        right: 125px;
    }
    .black-bg .white-bg .close-btn{
        border: none;
        background: transparent;
        font-size: 21px;
        font-weight: 500;
        position: absolute;
        right: 4%;
        top: 1%;
        color: #888;
    }
    .black-bg .white-bg h2{
        font-size: 17px;
        font-weight: 500;
        width: inherit;
        height: 50px;
        border-bottom: 1px solid #ddd;
        text-align: center;
        line-height: 50px;
        margin: 0 auto 25px;
        font-family: "NotoSansRegular";
        color: #454545;
    }
    .black-bg .white-bg .bm-store-list{
        flex-flow: column wrap;
        overflow-x: hidden;
        overflow-y: scroll;
        width: 330px;
        height: 418px;
        margin: 0 0 0 20px;
    }
    .black-bg .white-bg .bm-store-list .bm-store{
        display: flex;
        height: 84px;
        margin-bottom: 20px;
        display: flex;
    }
    .black-bg .white-bg .bm-store-list .bm-store > img{
        width: 82px;
        height: 84px;
        margin-right: 15px;
        cursor: pointer;
    }
    .black-bg .white-bg .bm-store-list .bm-store .bm-text{
        width: 200px;
        height: 15px;
        display: flex;
        flex-flow: row wrap;
        position: relative;
        line-height: 0;
    }
    .black-bg .white-bg .bm-store-list .bm-store .bm-text .bm-store-name{
        font-size: 16px;
        color: #454545;
        margin-right: 8px;
        margin-top: 8px;
    }
    .black-bg .white-bg .bm-store-list .bm-store .bm-text .bm-store-score{
        font-size: 16px;
        color: #FFA559;
        margin-top: 8px;
    }
    .black-bg .white-bg .bm-store-list .bm-store .bm-text .bm-star{
        width: 22px;
        height: 21px;
        position: absolute;
        right: 10px;
        cursor: pointer;
    }
    .black-bg .white-bg .bm-store-list .bm-store .bm-text .bm-store-area{
        width: 200px;
        height: 10px;
        color: #888;
        font-family: "NotoSansLight";
        font-size: 13px;
    }

    .bm-star-click{
        background: url("https://minseo605.github.io/img/bm-fill-star.png") no-repeat;
    }
</style>