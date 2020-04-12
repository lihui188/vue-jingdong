import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
Vue.prototype.$http = axios;
import store from "./store";
import "amfe-flexible";
import setaxios from "./global/setaxios";
setaxios();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
