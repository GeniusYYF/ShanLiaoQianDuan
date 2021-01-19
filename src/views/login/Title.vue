<template>
  <div>
    <div class="title">闪聊</div>
    <div class="text">随时随地，想聊就聊！</div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped lang="less">
// 公共组件用尽可能少的样式达到低耦合，使用时可加入、更改所需样式
.title {
  font-family: "YouSheBiaoTiHei";
  font-size: 50px;
  color: #f9f9f9;
  // line-height: 1; // 字体上下居中
  text-shadow: 0 2px 4px #000;
  text-align: left;
  display: inline-block;
  width: 30vw;
}

.text {
  width: 50vw;
  margin-left: 5vw;
  display: inline-block;
  color: rgba(255, 255, 255, 0.75);
  font-size: 18px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>