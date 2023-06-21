import { createWebHistory, createRouter } from 'vue-router';
import index from './components/index.vue';
import storeDetail from './components/storeDetail.vue';
import listcontent from './components/listpage-containter.vue';
import listcontent1 from './components/listcontent1.vue';
import listcontent2 from './components/listcontent2.vue';
import listcontent3 from './components/listcontent3.vue';
import listcontent4 from './components/listcontent4.vue';
import listcontent5 from './components/listcontent5.vue';
import listcontent6 from './components/listcontent6.vue';
import listcontent7 from './components/listcontent7.vue';
import listcontent8 from './components/listcontent8.vue';
import listcontent9 from './components/listcontent9.vue';
import listcontent10 from './components/listcontent10.vue';
import listcontent11 from './components/listcontent11.vue';
import listcontent12 from './components/listcontent12.vue';
import listcontent13 from './components/listcontent13.vue';
import listcontent14 from './components/listcontent14.vue';
import listcontent15 from './components/listcontent15.vue';
import listcontent16 from './components/listcontent16.vue';
import listcontent17 from './components/listcontent17.vue';
import listcontent18 from './components/listcontent18.vue';
import listcontent19 from './components/listcontent19.vue';
import listcontent20 from './components/listcontent20.vue';
import listcontent21 from './components/listcontent21.vue';
import listcontent22 from './components/listcontent22.vue';
import listcontent23 from './components/listcontent23.vue';
import listcontent24 from './components/listcontent24.vue';
import searchResult from './components/searchResult.vue';
import contactUs from './components/contactUs.vue';
import IdFindModal from './components/IdFindModal.vue';
import LoginForm from './components/LoginForm.vue';
import Userjoin from './components/UserJoin.vue';
import UserPage from './components/UserPage.vue';
import admin from './components/admin.vue';

const routes = [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/storeDetail/:bs_seq',
            name: 'storeDetail',
            component: storeDetail
        },
        {
            path: '/searchResult',
            name: 'searchResult',
            component: searchResult,
            children: [
                {
                    path: "listpage", //접속경로. 작명
                    name: "listcontent",
                    component: listcontent,
                    children: [
                        {
                            path: "listcontent1", //접속경로. 작명
                            name: "listcontent1",
                            component: listcontent1,
                        },
                        {
                            path: "listcontent2", //접속경로. 작명
                            name: "listcontent2",
                            component: listcontent2,
                        },
                        {
                            path: "listcontent3", //접속경로. 작명
                            name: "listcontent3",
                            component: listcontent3,
                        },
                        {
                            path: "listcontent4", //접속경로. 작명
                            name: "listcontent4",
                            component: listcontent4,
                        },
                        {
                            path: "listcontent5", //접속경로. 작명
                            name: "listcontent5",
                            component: listcontent5,
                        },
                        {
                            path: "listcontent6", //접속경로. 작명
                            name: "listcontent6",
                            component: listcontent6,
                        },
                        {
                            path: "listcontent7", //접속경로. 작명
                            name: "listcontent7",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent8", //접속경로. 작명
                            name: "listcontent8",
                            component: listcontent8,
                        },
                        {
                            path: "listcontent9", //접속경로. 작명
                            name: "listcontent9",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent10", //접속경로. 작명
                            name: "listcontent10",
                            component: listcontent8,
                        },
                        {
                            path: "listcontent11", //접속경로. 작명
                            name: "listcontent11",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent12", //접속경로. 작명
                            name: "listcontent12",
                            component: listcontent8,
                        },
                        {
                            path: "listcontent13", //접속경로. 작명
                            name: "listcontent13",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent14", //접속경로. 작명
                            name: "listcontent14",
                            component: listcontent8,
                        },
                        {
                            path: "listcontent15", //접속경로. 작명
                            name: "listcontent15",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent16", //접속경로. 작명
                            name: "listcontent16",
                            component: listcontent8,
                        },
                        {
                            path: "listcontent17", //접속경로. 작명
                            name: "listcontent17",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent18", //접속경로. 작명
                            name: "listcontent18",
                            component: listcontent8,
                        },
                        {
                            path: "listcontent19", //접속경로. 작명
                            name: "listcontent19",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent20", //접속경로. 작명
                            name: "listcontent20",
                            component: listcontent8,
                        },
                        {
                            path: "listcontent21", //접속경로. 작명
                            name: "listcontent21",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent22", //접속경로. 작명
                            name: "listcontent22",
                            component: listcontent8,
                        },
                        {
                            path: "listcontent23", //접속경로. 작명
                            name: "listcontent23",
                            component: listcontent7,
                        },
                        {
                            path: "listcontent24", //접속경로. 작명
                            name: "listcontent24",
                            component: listcontent8,
                        },
                    ]
                }
            ]
        },
        {
            path: "/contactUs",
            name: "contactUs",
            component: contactUs
        },
        {
            path: "/IdFindModal",
            name: "IdFindModal",
            component: IdFindModal
        },
        {
            path: "/LoginForm",
            name: "LoginForm",
            component: LoginForm
        },
        {
            path: "/Userjoin",
            name: "Userjoin",
            component: Userjoin
        },
        {
            path: "/UserPage",
            name: "UserPage",
            component: UserPage
        },
        {
            path: "/admin",
            name: "admin",
            component: admin 
        }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 항상 맨 위로 스크롤
        return { top: 0 }
    }
})

export default router;