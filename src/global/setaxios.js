import axios from "axios";
import router from "../router/index";
import store from "../store/index";

export default function setAxios() {
  // 请求拦截器
  axios.interceptors.request.use(
    config => {
      if (store.state.token) {
        config.headers.token = store.state.token;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  // 响应拦截器
  axios.interceptors.response.use(
    //   成功响应
    res => {
      if (res.status == 200) {
        const data = res.data;
        if (data.status == -1) {
          store.commit("setToken", "");
          localStorage.removeItem("token");
          router.replace({ path: "/login" });
        }
        return data;
      }
      return res;
    },
    err => {
      return Promise.reject(err);
    }
  );
}
