<template>
    <footer>
        <div class="footer-logo">
            <img src="../assets/images/sub-footer/footer-logo.png" alt="footer-logo">
        </div>

        <div class="info-area">
            <ul>
                <li>COMMUNITY</li>
                <li>SUPPORT</li>
                <li>이용약관</li>
                <li><router-link to="/contactUs">CONTACT US</router-link></li>
            </ul>

            <p>빵지순례(주)</p>
            <p>(우)15361 경기 안산시 단원구 중앙대로 921 동서코아 3층</p>
            <p>COPYRIGHT 2023©ppangjisunlye ALL RIGHT RESERVED.</p>
        </div>

        <div class="sns-area">
            <a href="#" @click.prevent><img src="../assets/images/sub-footer/Instagram.png" alt="Instagram"></a>
            <a href="#" @click.prevent><img src="../assets/images/sub-footer/Facebook.png" alt="Facebook"></a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'subFooter',
}
</script>

<style scoped>
        body{
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

    footer{
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: flex-start;
        margin-top: 80px;
        border-top: 0.8px solid #ddd;
        padding-top: 1.7%;
    }
    footer .footer-logo{
        width: 16%;
        height: inherit;
        position: relative;
    }
    footer .footer-logo img{
        position: absolute;
        left: 25%;
    }

    footer .info-area{
        width: 37%;
    }
    footer .info-area ul{
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin-bottom: 4%;
    }
    footer .info-area ul li{
        font-family: 'NotoSansMedium';
        font-size: 17px;
        cursor: pointer;
        color: #454545;
    }
    footer .info-area p{
        display: inline-block;
        font-size: 14px;
        color: #888;
        margin: 0;
    }
    footer .info-area p:nth-child(3){
        margin-left: 5%;
    }
    footer .info-area p:nth-child(4){
        margin-top: 1%;
    }
    footer .sns-area{
        width: 37%;
        padding-top: 1%;
        display: flex;
        justify-content: flex-end;
    }
    footer .sns-area a{
        margin-left: 3%;
    }
</style>