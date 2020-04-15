<template>
  <div class="panelsbox">
    <cube-scroll class="leftpanels">
      <ul>
        <li
          v-for="(list, i) in selectlist"
          :key="i"
          @click="selectlabel(i)"
          :class="list.isactive ? 'active' : ''"
        >{{ list.label }}</li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
          <img :src="tag.image" alt />
          <p>
            {{ tag.label }}
            <i class="cubeic-add" @click="addtocart($event, tag)"></i>
          </p>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ball: {
        show: false,
        el: ""
      },
      selectlist: [
        {
          label: "热门推荐",
          active: true
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "家用电器",
          active: false
        },
        {
          label: "家用空调",
          active: false
        },
        {
          label: "电脑产品",
          active: false
        },
        {
          label: "计生情趣",
          active: false
        },
        {
          label: "美妆护肤",
          active: false
        },
        {
          label: "口红",
          active: false
        },
        {
          label: "手袋",
          active: false
        },
        {
          label: "金银财宝",
          active: false
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "手机数码",
          active: false
        }
      ],
      tags: []
    };
  },
  created() {
    this.getclassify(0);
  },
  mounted() {
    var leftpanels = document.querySelector(".leftpanels");
    var rightpanels = document.querySelector(".rightpanels");
    var bodyHeight = document.documentElement.clientHeight;
    leftpanels.style.height = bodyHeight - 73 + "px";
    rightpanels.style.height = bodyHeight - 73 + "px";
  },
  methods: {
    //  点击左侧分类
    selectlabel(index) {
      this.selectlist.forEach((item, i) => {
        if (index == i) {
          item.isactive = true;
        } else {
          item.isactive = false;
        }
      });
      this.getclassify(index);
    },
    // 获得分类tags
    async getclassify(index) {
      const result = await this.$http.get("/api/classify", {
        params: { type: index }
      });
      this.tags = result.data;
    },
    addtocart(e, tag) {
      // console.log(tag);
      this.$store.commit("tocart", tag);
      this.ball.show = true;
      // 显示小球
      this.ball.el = e.target;
    },

    // 动画钩子函数
    beforeEnter(el) {
      // console.log(el);
      const dom = this.ball.el;
      // console.log(dom);
      const rect = dom.getBoundingClientRect();
      // console.log(rect);
      const x = rect.left - window.innerWidth * 0.7;
      const y = -(window.innerHeight - rect.top);
      // console.log(x, y);
      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el, done) {
      document.body.offsetHeight;
      el.style.transform = `translate3d(0,0,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(0,0,0)`;
      el.addEventListener("transitionend", done);
    },
    afterEnter(el) {
      this.ball.show = false;
      el.style.display = "none";
    }
  }
};
</script>
<style lang="scss" scoped>
.ball-wrap {
  .ball {
    position: fixed;
    left: 70%;
    bottom: 10px;
    z-index: 1001;
    color: red;
    transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    .inner {
      width: 16px;
      height: 16px;
      transition: all 1s linear;
    }
  }
}
.panelsbox {
  display: flex;
  .leftpanels {
    width: 30%;
    li {
      height: 50px;
      line-height: 50px;
      border-bottom: 2px solid white;
      color: #333;
      background-color: #eee;
      font-size: 14px;
    }
    .active {
      background: #fff;
      color: #e93b3d;
    }
  }
  .rightpanels {
    width: 70%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
}
</style>
