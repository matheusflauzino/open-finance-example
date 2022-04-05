import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);

import cart from "./modules/cart";

const store = new Vuex.Store({
    modules: {
        cart
    }
});


export default store;
