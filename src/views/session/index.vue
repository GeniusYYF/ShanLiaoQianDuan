<template>
    <List
      class="session my-scroll"
      :class="{ 'show-scroll': scrolling }"
      :style="{ left: $store.getters.getSessionLeft }"
    >
      <SessionItem
        v-for="(item, i) in sessionList"
        :key="i"
        :id="item.id"
        :avatar="item.avatar"
        :userName="item.userName"
        :description="item.description"
      />
    </List>
</template>

<script>
import SessionItem from "./SessionItem";
import { scrollDirection } from "@/utils/common.js";
import { getAllUsers } from "@/api/session";

export default {
  name: "Session",
  components: { SessionItem },
  data() {
    return {
      scrolling: false,
      direction: false,
      sessionList: [],
    };
  },
  methods: {},
  mounted() {
    // 给列表添加滚动事件
    scrollDirection(this.$el, this);
    console.log("请求users");
    getAllUsers(this.$store.getters.getUser.id)
      .then((res) => {
        this.sessionList = res.data.data;
        console.log(this.sessionList);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="less" scoped>

.session {
  height: 92vh;
  width: 100vw;
  overflow-y: auto;
  text-align: left;
  // background: url(../../assets/bj-app4.png) no-repeat;
  // background-size: 100% 100%;
  background-color: rgb(245, 247, 249);
}

</style>
