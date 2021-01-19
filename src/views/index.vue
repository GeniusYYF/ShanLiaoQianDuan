<template>
  <Layout class="index">
    <MyHeader />
    <Content :style="{ background: '#fff' }">
      <router-view />
    </Content>
    <!-- <MyFooter /> -->
  </Layout>
</template>

<script>
import MyHeader from "@/components/header/Header.vue";
// import MyFooter from "@/components/footer/Footer.vue";

export default {
  name: "Index",
  components: {
    MyHeader,
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  width: 100%;
}
</style>