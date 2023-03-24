require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import VueWait from "vue-wait";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import router from "./routes";
import store from "./store";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter); //rotas
Vue.use(VueWait);
Vue.use(BootstrapVue); // Install BootstrapVue
Vue.use(IconsPlugin); // Optionally install the BootstrapVue icon components plugin

new Vue({
  el: "#app",
  components: { App },
  data: {},
  router,
  store,
  wait: new VueWait(),
  render: (h) => h(App),
});
