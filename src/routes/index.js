import VueRouter from "vue-router";

//pages
import Home from "../views/Home";
import Cart from "../views/Cart";

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
        {
            path: "/cart",
            name: "CartPage",
            component: Cart
        },
    ]
});


export default router;
