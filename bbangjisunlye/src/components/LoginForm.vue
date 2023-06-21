<template>
  <div class="login-container">
    <div class="inner-container">
      <div class="jalnan login-text">로그인</div>
    <form action="">
      <div>
        <input type="text" name="userId" id="userId" placeholder="아이디">
      </div>
        <div>
        <input type="password" name="password" id="password" placeholder="비밀번호">
      </div>
    </form>
    <button class="login-btn">로그인</button>
    <div>
      
    </div>
    <div class="join-find">
    <a href="#" class="join"><router-link to="/UserJoin">회원가입</router-link></a>
    <a href="#" class="User-find" @click="$emit('open-find-modal')">아이디/비밀번호 찾기</a>
    </div>
    <div class="socia-login">
        <a href="">
          <img src="../assets/images/login/facebook.png" alt="">
        </a>
        <a href="">
          <img src="../assets/images/login/google.png" alt="">
        </a>
        <a href="">
          <img src="../assets/images/login/kakao.png" alt="">
        </a>
    </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    FindModal: Boolean
  }
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
.login-container{
  width: 1200px;
  margin: auto;
  height: 600px;
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
}
.inner-container{
  width: 350px;
  height: 450px;
  margin: auto;
  position: absolute;
  top: 88px;
  left: 425px;
}
.login-text{
  font-size: 30px;
  color: #FFA559;
  margin-left:125px;
  font-family: 'yg-jalnan';
}
.login-btn{
  background-color: #FFA559;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  font-size: 15px;
  color: #ffffff;
  margin-left: 23px;
  border: none;
}
form{
  margin-top: 56px;
  margin-left: 23px;
}
#password{
  margin-top: 25px;
  margin-bottom: 25px;
}
form div input{
  width: 300px;
  height: 50px;
  border: 1px solid #FFA559;
  border-radius: 15px;
  text-indent: 10px;
}
form div input:focus{
  outline: none;
}
.join-find{
  display: flex;
  font-size: 14px;
  margin-left: 80px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.join::after{
  content: "|";
  color: #ddd;
  margin: 0 7px;
}
.join-find a{
  color: #454545;
  /* margin-left: 15px; */
}
.socia-login{
  width: 265px;
  height: 65px;
  margin-left: 47px;
  display: flex;

}
.socia-login a{
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 1px solid #a3a3a3;
  margin: auto;
}
.socia-login a img{
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 5px;
  display: block;
}

</style>