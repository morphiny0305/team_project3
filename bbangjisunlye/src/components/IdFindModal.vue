<template>
  <div class="container" v-if="FindModal == true">
    <div class="inner-container">
        <div class="X-btn" @click="$emit('close-find-modal')">x</div>
        <div class="IdTitle" v-if="show">아이디 찾기</div>
        <div v-else class="IdTitle">비밀번호 찾기</div>
        <div class="bth">
            <div class="findId-btn" @click="ShowId"
            :class="{'click-border1':show, 'click-border2':!show}">아이디 찾기</div>
            <div class="findPw-btn"
             @click="ShowPw" 
             :class="{'click-border2':show, 'click-border1': !show}">비밀번호 찾기</div>
        </div>
        <div class="id-find" v-if="show">
                <div class="id-find-title">휴대폰 인증</div>
                <form action="">
                    <input type="text" name="" id="name" placeholder="이름">
                    <input type="text" id="birth" placeholder="생년월일(yymmdd)">
                    <input type="text" id="phoneNum" placeholder="휴대전화 (-없이)">
                    <button class="min-btn">인증 요청</button>
                </form>
                <button class="Id-findBtn">아이디 찾기</button>
        </div>
        <div class="pw-find" v-else>
            <p class="id-find-title">빵지순례 ID</p>        
            <form action="">
                <input type="text" name="" id="">
            </form>
            <button class="Id-findBtn">비밀번호 찾기</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

    data() {
        return {
            show : true,
            border : true
        }
    },
    props: {
    FindModal: Boolean
    }, 
    methods: {
        ShowPw(){
            this.show=false; 
            this.changeBorder(!this.border);
        },
        ShowId(){
            this.show=true;
            this.changeBorder(this.border);
        },
        changeBorder(border){
            this.border =border;
        }
    },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
.container{
font-family: 'Noto Sans KR', sans-serif;
}
.click-border1{
    border-top: 1px solid #DDD;
    border-left: 1px solid #DDD;
    border-right: 1px solid #DDD;
    background-color: #ffffff;
}
.click-border2{
    background-color: #924949;
    color: #888;
}
*{ 
     margin: 0;
    padding: 0;}
.container{
    width: 100%;
    height: 100vh;
    background-color: #888888;
    position: relative;
}
.inner-container{
    width: 430px;
    height: 500px;
    background: #ffffff;
    position: absolute;
    left: 746px;
    top: 200px;
    
}
.X-btn{
    position: absolute;
    /* top: 0px; */
    right: 13px;
    font-size: 23px;
    color: #454545;
    cursor: pointer;
}
form input{
    width: 300px;
    height: 40px;
    font-size: 13px;
    color: #888;
    border: 1px solid #DDD;
    margin-bottom: 14px;
    margin-left: 70px;
    text-indent: 10px;
    position: relative;
}
form input:focus{
    outline: none;
}
.min-btn{
    width: 60px;
    height: 22px;
    font-size: 13px;
    color: #454545;
    position: absolute;
    left: 305px;
    bottom: 170px;
    background-color: #f8f8f8;
    border-radius: 3px;
    border: none;
}
.Id-findBtn{
    width: 300px;
    height: 40px;
    color: #ffffff;
    margin-top: 20px;
    background-color: #FFA559;
    border: none;
    margin-left: 70px;
}
.bth{
    width: 300px;
    height: 40px;
    display: flex;
    margin-left: 70px;
    margin-top: 30px;
}
.bth div{
    width: 150px;
    height: 40px;
    font-size: 13px;
    color: #454545;
    background-color: #ffffff;
    text-align: center;
    line-height: 40px;
}
.findId-btn{
    cursor: pointer;
}
.findPw-btn{
cursor: pointer;
}
.IdTitle{
    font-size: 16px;
    color: #454545;
    text-align: center;
    margin-top: 40px;
}
.id-find-title{
    color: #454545;
    font-size: 13px;
    margin-left: 70px;
    margin-top: 20px;
    margin-bottom: 15px;
}
</style>