<template>
  <div id="index">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img class="banner" :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <cube-slide
      ref="slide"
      :data="lists"
      @change="changePage"
      :auto-play="false"
    >
      <cube-slide-item v-for="(list, index) in lists" :key="index">
        <ul class="listul">
          <li v-for="(item, index1) in list" :key="index1" class="listli">
            <a :href="item.url">
              <img class="scroll" :src="item.image" alt="" />
              <p>{{ item.label }}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      lists: []
    };
  },
  async created() {
    const items = await this.$http.get("/api/banner");
    const lists = await this.$http.get("/api/srcolllists");
    this.lists = lists.data;
    this.items = items.data;
  },
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  }
};
</script>

<style lang="scss" scoped>
#index {
  a {
    .banner {
      display: block;
      width: 100%;
      height: 175px;
    }
  }
  .listul {
    display: flex;
    flex-wrap: wrap;

    .listli {
      width: 25%;
      justify-content: center;
      .scroll {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        padding: 5px 0;
      }
      p {
        font-size: 14px;
        padding-bottom: 10px;
      }
    }
  }
}
</style>
