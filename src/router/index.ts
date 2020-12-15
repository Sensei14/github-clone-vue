import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

import MainPage from "../views/MainPage.vue";
import UserDetails from "../views/UserDetails.vue";
import RepoDetails from "../views/RepoDetails.vue";

const routes: Array<RouteConfig> = [
    {
        path: "/",
        component: MainPage,
    },
    {
        path: "/user/:login",
        component: UserDetails,
        props: true,
    },
    {
        path: "/repo/:owner/:name",
        component: RepoDetails,
        props: true,
    },

    {
        path: "/*",
        redirect: "/",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
