import VueRouter from "vue-router";

//pages
import Home from "../views/Home";

const router = new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    },
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: Home
        },
    ]
});


export default router;
