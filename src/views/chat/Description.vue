<template>
  <div class="desc">{{ desc }}</div>
</template>

<script>
export default {
  props: ["desc"],
};
</script>

<style lang="less" scoped>
.desc {
  text-align: center;
  padding-top: 10px;
  color: rgba(150, 150, 150, 0.5);
}
</style>