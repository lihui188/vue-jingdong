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

// 路由守卫
router.beforeEach((to, from, next) => {
  // 无论是刷新还是跳转路由，第一个进入的就是路由前置钩子函数
  store.commit("setToken", localStorage.getItem("token"));
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
