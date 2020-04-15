import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    token: "",
    cartarray: JSON.parse(localStorage.getItem("cartarray")) || []
  },
  mutations: {
    setToken(state, token) {
      this.state.token = token;
    },
    tocart(state, tag) {
      let good = state.cartarray.find(v => v.title == tag.label);
      if (good) {
        good.count += 1;
      } else {
        state.cartarray.push({ title: tag.label, count: 1 });
      }
    },
    addCount(state, index) {
      state.cartarray[index].count++;
    },
    removeCount(state, index) {
      if (state.cartarray[index].count > 1) {
        state.cartarray[index].count--;
      } else {
        if (window.confirm("是否删除此商品")) {
          state.cartarray.splice(index, 1);
        } else {
          state.cartarray[index].count = 1;
        }
      }
    },
    clearCart(state) {
      state.cartarray = [];
    }
  },
  actions: {},
  modules: {},
  getters: {
    countsum: state => {
      let sum = 0;
      state.cartarray.forEach(item => {
        sum += item.count;
      });
      return sum;
    }
  }
});
store.subscribe((mutations, state) => {
  localStorage.setItem("cartarray", JSON.stringify(state.cartarray));
});
export default store;
