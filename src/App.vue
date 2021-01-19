<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    // 设置全局loading样式
    this.$Loading.config({
      color: "#5cb85c",
      failedColor: "#f0ad4e",
      height: 3,
    });
  },
};
</script>

<style lang="less">
@import url("../public/css/common.less");

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background-color: rgb(245, 247, 249);
}
</style>
