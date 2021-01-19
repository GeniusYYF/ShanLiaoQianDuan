<template>
  <div>
    <LoginBackground />
    <div class="login">
      <MyTitle class="login-title" />

      <div class="login-box">
        <Box1 v-show="$store.state.login.selectBox == 1"></Box1>
        <Box2 v-show="$store.state.login.selectBox == 2"></Box2>
      </div>

      <LoginFoot />
    </div>
  </div>
</template>

<script>
// 公共可复用组件以My开头
import MyTitle from "./Title.vue";
// 私有子组件以Views名开头
import LoginBackground from "./Background";
import Box1 from "./Box1";
import Box2 from "./Box2";
import LoginFoot from "./Foot";

export default {
  components: {
    MyTitle,
    LoginBackground,
    Box1,
    Box2,
    LoginFoot,
  },
  computed: {
    getSelectBox() {
      return this.$store.getters.login.getSelectBox;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  // 公共组件用尽可能少的样式达到低耦合，使用时可加入、更改所需样式
  .login-title {
    top: 5%;
    left: 10vw;
    height: 20%;
    position: absolute;
  }
  .login-box {
    position: absolute;
    top: 25%;
    left: 10%;
    // margin: 10% 0 0 10%;
    width: 80%;
    box-shadow: inset 0 0 20px 1px rgba(0, 174, 255, 0.3);
    border-radius: 4px;
    padding-top: 0.6vh;
  }
}
</style>>

