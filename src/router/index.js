import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Register.vue")
  },
  {
    path: "/tabbar",
    name: "Tabbar",
    component: () => import("../views/Tabbar.vue"),
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("../views/tabbar/Index.vue")
      },
      {
        path: "list",
        name: "List",
        component: () => import("../views/tabbar/List.vue")
      },
      {
        path: "search",
        name: "Search",
        component: () => import("../views/tabbar/Search.vue")
      },
      {
        path: "shopcar",
        name: "Shopcar",
        meta: {
          requireAuth: true //当有这个字段的时候，我们这个路由需要登录权限
        },
        component: () => import("../views/tabbar/Shopcar.vue")
      },
      {
        path: "mine",
        name: "Mine",
        meta: {
          requireAuth: true //当有这个字段的时候，我们这个路由需要登录权限
        },
        component: () => import("../views/tabbar/Mine.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
