<template>
  <div>
    <div class="login-bg1"></div>
    <div class="login-bg2"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login-bg1,
.login-bg2 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
}

.login-bg1 {
  // background: url(../../assets/bj-app4.png) no-repeat;
  // background-size: 100% 100%;
  background: linear-gradient(to right, rgba(216, 229, 241), rgba(241, 228, 216));
}

.login-bg2 {
  // background:   linear-gradient(to bottom, rgba(4, 29, 255, 0.2), rgba(4, 163, 255, 0.2));
}
</style>