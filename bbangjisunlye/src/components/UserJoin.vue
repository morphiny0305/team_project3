<template>
  <div class="container">
    <div class="inner-container">
        <div class="title">회원가입</div>
        <form action="">
            <p>아이디</p>
            <input type="text" id="id">
            <p>비밀번호</p>
            <input type="password" id="pw">
            <p>비밀번호 확인</p>
            <input type="password" id="pw-check">
            <p>이름</p>
            <input type="password" id="name">
            <p>생년월일</p>
            <input type="text" id="bith" placeholder="YYYYMMDD 형식으로 입력하세요">
            <p>휴대전화</p>
            <input type="text" id="phoneNum">
            <p>주소</p>
            <select name="" id="">
              <option value="">단원구</option>
              <option value="">상록구</option>
            </select>
        </form>
        <button>가입하기</button>
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
*{box-sizing: border-box;}
.container{
  font-family: 'Noto Sans KR', sans-serif;
  color: #454545;
}
.inner-container{
  width: 400px;
  height: 820px;
  margin: 50px auto 0;
  text-align: center;
  /* margin-top: 50px; */
}
.title{
  font-size: 30px;
  color: #ffa559;
  font-family: 'yg-jalnan';
}
form p{
  font-size: 14px;
  color: #454545;
  text-align: left;
  margin-left: 50px;
}
form input{
  width: 300px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #ffa559;
  text-indent: 10px;
  font-size: 12px;
}
form input:focus{
  outline: none;
}
button{
  width: 306px;
  height: 50px;
  background-color: #ffa559;
  color: #fff;
  border-radius: 15px;
  border: none;
}
select{
  width: 120px;
  height: 50px;
  border: 1px solid #ffa559;
  border-radius: 15px;
  color: #454545;
  margin-right: 190px;
  margin-bottom: 20px;
  text-indent: 10px;
}
select{
  outline: none;
}
select option{
  width: 120px;
  height: 25px;
}
</style>