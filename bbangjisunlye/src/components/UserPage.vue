<template>
  <div class="container">
    <div class="inner-container">
        <div class="title">내정보</div>
        <div class="user-top">
        <span class="material-symbols-outlined">
        account_circle
        </span>
            <p class="user-name">유저네임</p>
            <button class="change">수정</button>
        </div>
        <div class="user-mid">
            <div class="email">
                <p>이메일</p>
                <p>유저이메일정보</p>
                <button class="change">수정</button>
            </div>
            <div class="phone">
                <p>휴대전화</p>
                <p>유저휴대전화정보</p>
                <button class="change">수정</button>
            </div>
            <div class="writer">
                <p>내가쓴글</p>
            </div>
            <div class="book-mark">
                <p>문의하기</p>
            </div>
            <div class="log-out">
                <p>로그아웃</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@font-face {
	font-family: 'yg-jalnan';
	src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
.container{
    width: 835px;
    margin: 50px auto 0;
    text-align: center; 
    color: #454545;
    font-family: 'Noto Sans KR', sans-serif;
}
button{
    width: 50px;
    height: 21px;
    border-radius: 15px;
    border: 1px solid #ffa559;
    color: #454545;
    background-color: transparent;
}
.title{
    color: #ffa559;
    font-size: 30px;
    text-align: left;
    font-family: 'yg-jalnan';
    margin-bottom: 30px;
}
.user-name{
    font-size: 20px;
    width: 80px;
    height: 30px;
    margin-right: 40px;
}
.material-symbols-outlined{
    font-size: 80px; 
    margin-right: 20px;
}
.user-top{
    display: flex;
    width: 100%;
    height: 90px;
    border-bottom: 2px solid #ffa559;
}
.change{
    margin-top: 45px;
}
.email, .phone{
    width: 380px;
    height: 100px;
    border: 1px solid #ffa559;
    margin-top: 20px;
    position: relative;
    text-align: left;
}
.email>p, .phone>p{
    margin-left: 25px;
}
.email>:nth-child(1), .phone>:nth-child(1){
    color: #888888;
}
.email{
    margin-right: 70px;
}
.email .change ,.phone .change{
position: absolute;
top: 20px;
right: 15px;
}
.user-mid{
    display: flex;
    flex-wrap: wrap;
}
.writer, .book-mark, .log-out{
    width: 835px;
    height: 70px;
    border: 1px solid #ffa559;
    margin-top: 40px;
    line-height: 35px;
    text-align: left;
    cursor: pointer;
}
.writer>p, .book-mark>p, .log-out>p{
    margin-left: 25px;
}
</style>