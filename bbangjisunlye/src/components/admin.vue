<template>
    <header class="admin-header">
        <h2>빵지순례 관리자 페이지</h2>
        <button class="exit-admin" @click="$router.push('/')">나가기</button>
    </header>

    <section class="admin-main">
        <div class="date-sum">
            <h3>날짜별 요약</h3>

            <ul>
                <li>날짜</li>
                <li>방문자</li>
                <li>가입</li>
                <li>게시글</li>
            </ul>

            <div class="date-logs" v-for="(a, i) in 3" :key="i">
                <p class="date">{{ nowDate }}</p>
                <p class="visitor">2334345</p>
                <p class="join">23434</p>
                <p class="text">16456</p>
            </div>

            <div class="week-total">
                <p class="week">최근 7일 합계</p>
                <p class="week-visitor">63343345</p>
                <p class="week-join">2334</p>
                <p class="week-text">16456</p>
            </div>

            <div class="month-total">
                <p class="month">이번 달 합계</p>
                <p class="month-visitor">6334335</p>
                <p class="month-join">23434</p>
                <p class="month-text">1456</p>
            </div>
        </div>

        <div class="user-admin">
            <h3>사용자 관리</h3>

            <div class="user-logs" v-for="(a, i) in 4" :key="i">
                <p class="num">{{ (i+1) }}</p>
                <button class="assent"></button>
                <p class="user-id">TEST2</p>
                <p class="user-name">이공룡</p>
                <p class="user-email">adffwer@naver.com</p>
                <p class="user-tell">000-1234-5678</p>
                <!-- <p class="requset-day">2023-06-05</p> -->
                <p class="requset-day">{{ nowDate }}</p>
                <p class="join-status">회원 가입 승인 상태</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'admin',
    data() {
        return {
            nowDate: ""
        }
    },
    mounted(){
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

        this.nowDate = year + "-" + month + "-" + day;

        return this.nowDate;
    }
}
</script>

<style scoped>

    .admin-header{
        width: 100%;
        height: 80px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        position: fixed;
        top: 0;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
    }
    .admin-header .exit-admin{
        position: absolute;
        right: 40px;
        border: none;
        width: 100px;
        height: 40px;
        font-weight: 600;
        color: #454545;
    }

    .admin-main{
        width: 100%;
        height: 100vh;
        background-color: #f8f8f8;
        overflow-x: hidden;
        margin-top: 20px;
    }

    .admin-main .date-sum{
        width: 1200px;
        margin: 50px auto 50px;
        background-color: #fff;
        padding-bottom: 10px;
    }
    .admin-main .date-sum h3{
        height: 60px;
        padding-left: 30px;
        text-align: left;
        line-height: 60px;
        margin: 0;
    }
    .admin-main .date-sum ul{
        display: flex;
        justify-content: space-around;
        padding: 0 0 10px 0;
        border-bottom: 1px solid #ddd;
        font-size: 17px;
        margin: 0;
    }
    .admin-main .date-sum ul li{
        width: 110px;
        text-align: left;
    }

    .admin-main .date-sum .date-logs{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ddd;
    }
    .admin-main .date-sum .date-logs:last-child{
        border: none;
    }
    .admin-main .date-sum .date-logs p{
        width: 110px;
        text-align: left;
    }
    .week-total, .month-total{
        display: flex;
        justify-content: space-around;
    }
    .week-total{
        border-bottom: 1px solid #ddd;
    }
    .week-total p, .month-total p{
        width: 110px;
        text-align: left;
    }
    .admin-main .user-admin{
        width: 1200px;
        margin: 50px auto 50px;
        background-color: #fff;
        padding-bottom: 10px;
    }
    .admin-main .user-admin h3{
        height: 60px;
        padding-left: 30px;
        text-align: left;
        line-height: 60px;
        border-bottom: 1px solid #ddd;
        margin: 0;
    }
    .admin-main .user-admin .user-logs{
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ddd;
    }
    .admin-main .user-admin .user-logs:last-child{
        border: none;
    }
    .admin-main .user-admin .user-logs p:first-child{
        width: 10px;
    }
    .admin-main .user-admin .user-logs p:nth-child(3){
        width: 90px;
    }
    .admin-main .user-admin .user-logs p:nth-child(4){
        width: 90px;
    }
    .admin-main .user-admin .user-logs p:nth-child(5){
        width: 170px;
    }
    .admin-main .user-admin .user-logs p:nth-child(7){
        width: 100px;
    }
    .admin-main .user-admin .user-logs p:last-child{
        width: 130px;
    }
    .admin-main .user-admin .user-logs p{
        width: 120px;
        text-align: left;
    }
    .admin-main .user-admin .user-logs .assent{
        width: 15px;
        height: 15px;
    }
</style>