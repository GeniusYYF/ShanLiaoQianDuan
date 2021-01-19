<template>
  <div class="login-foot" ref="foot">
    <div class="text">
      <div>Ccopyright ©2020 GeniusXYT</div>
      <div>联系方式：739416541（qq） 17679217705(wx)</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.foot.style.cssText = `margin-top:${
      document.documentElement.clientHeight - 60
    }px;`;
  },
};
</script>

<style lang="less" scoped>
.login-foot {
  width: 100vw;
  height: 60px;
  margin-top: 90vh;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  padding-top: 10px;

  .text {
    font-family: PingFangSC-Regular;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>