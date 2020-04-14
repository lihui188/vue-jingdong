<template>
  <div class="panelsbox">
    <cube-scroll class="leftpanels">
      <ul>
        <li
          v-for="(list, i) in selectlist"
          :key="i"
          @click="selectlabel(i)"
          :class="list.isactive ? 'active' : ''"
        >
          {{ list.label }}
        </li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
          <img :src="tag.image" alt />
          <p>{{ tag.label }}</p>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectlist: [
        {
          label: "热门推荐",
          isactive: true
        },
        {
          label: "111",
          isactive: false
        },
        {
          label: "222",
          isactive: false
        },
        {
          label: "333",
          isactive: false
        },
        {
          label: "444",
          isactive: false
        },
        {
          label: "555",
          isactive: false
        },
        {
          label: "666",
          isactive: false
        },
        {
          label: "777",
          isactive: false
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
    }
  }
};
</script>
<style lang="scss" scoped>
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
