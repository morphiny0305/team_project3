<template>
    <div class="title-wrapper">
    <h1>CONTACT US</h1>
    </div>
    <div class="contactus">
        <div>
            <span>
                매장 등록 및 정보수정 문의 <br>
                <a href="#">admin@mainadd.ress <br></a>
            </span>
            <span>
                광고문의 <br>
                <a href="#">admin@mainadd.ress <br></a>
            </span>
            <span>
                컨텐츠 제휴 및 마케팅 문의 <br>
                <a href="#">admin@mainadd.ress  <br></a>
            </span>
            <span>
                주소 <br>
                <a href="#">경기도 안산시 단원구 중앙대로 921<br>동서 코어 빌딩 3F</a>
            </span>
        </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12692.288634000039!2d126.8389385!3d37.3171184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f1b9976bc0b%3A0xdd81061eb4f2ef1d!2z6re466aw7Lu07ZOo7YSw7JWE7Lm0642w66-4IOyViOyCsOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1683104872639!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
    </div>
</template>

<script>
export default {
    name: "contactUs"
}
</script>

<style scoped>
    body{
        margin: 0;
        padding: 0;
        font-family: "NotoSansRegular";
        color: #454545;
    }
    h1{
        font-size: 30px;
        font-family: "NotoSansMedium";
        color: #454545;
    }
    .title-wrapper{
        width: 1200px;
        margin: auto;
        text-align: center;
        margin-top: 50px;
    }
    .contactus{
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: auto;
        margin: auto;
        margin-top: 40px;
    }
    .contactus div{
        width: 100%;
        max-width: 520px;
        height: 440px;
        display: flex;
        flex-direction: column;
    }
    .contactus span{
        font-size: 20px;
        margin: 15px 0;
        /* font-family: "NotoSansMedium"; */
    }
    .contactus span a{
        font-size: 15px;
        height: 45px;
        display: inline-block;
        /* font-family: "NotoSansRegular"; */
    }
    br{
        margin: 0;
        padding: 0;
        line-height: 0;
    }
    .contactus iframe{
        margin: 20px 0;
        max-width: 100%;
    }
</style>