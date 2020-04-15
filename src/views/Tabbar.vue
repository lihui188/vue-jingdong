<template>
  <div>
    <transition :name="transitionName">
      <router-view class="routerv"></router-view>
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="tabbar"
    ></cube-tab-bar>
    <span class="countsum">{{ countsum }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // countsum: "",
      transitionName: "slide-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-tag"
        },
        {
          label: "搜索",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  created() {
    // this.changeHandler("首页");
    switch (this.$route.path) {
      case "/tabbar/index":
        this.selectedLabelDefault = "首页";
        break;
      case "/tabbar/list":
        this.selectedLabelDefault = "分类";
        break;
      case "/tabbar/search":
        this.selectedLabelDefault = "搜索";
        break;
      case "/tabbar/shopcar":
        this.selectedLabelDefault = "购物车";
        break;
      case "/tabbar/mine":
        this.selectedLabelDefault = "我的";
        break;
    }
  },

  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      // console.log(label);
      switch (label) {
        case "首页":
          this.$router.push({ path: "/tabbar/index" });
          break;
        case "分类":
          this.$router.push({ path: "/tabbar/list" });
          break;
        case "搜索":
          this.$router.push({ path: "/tabbar/search" });
          break;
        case "购物车":
          this.$router.push({ path: "/tabbar/shopcar" });
          break;
        case "我的":
          this.$router.push({ path: "/tabbar/mine" });
          break;
      }
    }
  },
  computed: {
    ...mapGetters({
      countsum: "countsum"
    })
  }
};
</script>
<style lang="scss">
.cube-tab-bar.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #fff;
  .cube-tab div {
    font-size: 16px;
    padding-top: 3px;
  }
  i {
    font-size: 20px;
  }
}
.routerv {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-tranform: translate(100%, 0);
  transform: translate(100%, 0);
}
.countsum {
  position: fixed;
  bottom: 33px;
  right: 23%;
  z-index: 1001;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  font-size: 14px;
  background: red;
  color: #fff;
}
</style>
