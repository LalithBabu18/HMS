/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { IconsPlugin } from 'bootstrap-vue'
import "./main.css";
import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

store.$app = app;