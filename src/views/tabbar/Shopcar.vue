<template>
  <div class="shaparr-container">
    <div class="goods" v-for="(item, index) in cartarr" :key="index">
      {{ item.title }}
      <div class="goodsright">
        <i class="cubeic-remove" @click="removecount(index)"></i>
        <span>{{ item.count }}</span>
        <i class="cubeic-add" @click="addcount(index)"></i>
      </div>
      <hr />
    </div>

    <cube-button style="margin:10px 0px">下单</cube-button>
    <cube-button @click="clearshop">清空购物车</cube-button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //   cartarr: []
    };
  },

  computed: {
    ...mapState({
      cartarr: state => state.cartarray
    })
  },
  methods: {
    removecount(i) {
      this.$store.commit("removeCount", i);
    },
    addcount(i) {
      this.$store.commit("addCount", i);
    },
    // 清空购物车
    clearshop() {
      this.$store.commit("clearCart");
    }
  }
};
</script>
<style lang="scss" scoped>
.shaparr-container{
    padding-bottom: 73px;
}
.goods {
  padding: 10px 0px 10px 10px;
  text-align: left;
  font-size: 18px;

  .goodsright {
    padding-right: 10px;
    float: right;
    font-size: 18px;
  }
}
</style>
