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

        // 轮播图接口
        app.get("/api/banner", (req, res) => {
          res.json({
            data: [
              {
                url: "https://xdclass.net",
                image:
                  "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png"
              },
              {
                url: "https://xdclass.net",
                image:
                  "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/jdk8/jdk8_banner.png"
              },
              {
                url: "https://xdclass.net",
                image:
                  "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/2019_frontend/%E5%B0%8F%E7%A8%8B%E5%BA%8F/wx_appbanner.png"
              }
            ]
          });
        });

        // 轮播图
        app.get("/api/srcolllists", (req, res) => {
          res.json({
            data: [
              [
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                }
              ],
              [
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                },
                {
                  url: "https://xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/elasticsearch7.png",
                  label: "分类一"
                }
              ]
            ]
          });
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
