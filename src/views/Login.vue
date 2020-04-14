<template>
  <div class="login-container">
    <img
      src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/2019_frontend/%E5%B0%8F%E7%A8%8B%E5%BA%8F/wx_appbanner.png"
      class="headerimg"
    />

    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          // 用户名配置

          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true,
              type: "string",
              min: 3,
              max: 15
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "用户名不能少于三个字母",
              max: "用户名不能超过个字母"
            }
          },
          //
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      try {
        const result = await this.$http.get("/api/login", {
          params: this.model
        });
        if (result.code == 0) {
          alert(result.message);
          this.$store.commit("setToken", result.token);
          localStorage.setItem("token", result.token);
          // this.$router.replace({ path: "/tabbar/index" });
          if (this.$route.query.redirect) {
            this.$router.replace({ path: this.$route.query.redirect });
          } else {
            this.$router.replace({ path: "/tabbar/index" });
            // console.log(this.$route);
            // console.log(this.$router);
          }
        } else {
          alert(result.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// eslint-disable-next-line prettier/prettier
.headerimg {
  width: 100%;
  height: 150px;
}
</style>
