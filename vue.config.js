module.exports = {
  configureWebpack: {
    devServer: {
      port: 3000,
      open: true,
      // Mock接口编辑的地方
      before(app) {
        /* app.get("请求地址", (req, res) => {
          res.json({

          })
        }) */

        // 注册接口
        let userpoor = [
          { username: "xiaod", password: "123456" },
          { username: "xiao", password: "123456" }
        ];
        app.get("/api/register", (req, res) => {
          const { username, password } = req.query;
          const userlength = userpoor.filter(v => v.username == username)
            .length;
          if (userlength > 0) {
            res.json({
              success: false,
              message: "用户名已存在"
            });
          } else {
            res.json({
              success: true,
              message: "注册成功"
            });
          }
        });

        // 登录接口
        let tokenkey = "xd";
        app.get("/api/login", (req, res) => {
          const { username, password } = req.query;
          if (
            (username == "xiaod" && password == "123456") ||
            (username == "time" && password == "123456")
          ) {
            res.json({
              code: 0,
              message: "登录成功",
              token:
                tokenkey +
                "-" +
                username +
                "-" +
                (new Date().getTime() + 1000 * 60 * 60)
            });
          } else {
            res.json({
              code: 1,
              message: "账号或密码错误"
            });
          }
        });
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },

  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  }
};
