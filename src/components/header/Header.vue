<template>
  <Header>
    <Menu
      class="header"
      mode="horizontal"
      theme="light"
      @on-select="onSelect"
    >
      <div name="3" class="header-item title">闪聊（2021）</div>

      <Submenu name="1" class="header-item">
        <template slot="title">
          {{ $store.getters.getUser.userName }}
        </template>
        <MenuItem name="3-1" :to="'/404'">个人资料</MenuItem>
        <MenuItem name="3-2" :to="'/login'" replace> 退出 </MenuItem>
      </Submenu>

      <div name="2" class="header-item search">
        <Icon type="ios-search" />
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  components: {},
  computed: {
    activeRoute() {
      return this.$store.state.activeRoute;
    },
  },
  methods: {
    onSelect(name) {
      console.log(name);
      if (name == "3-2") this.$store.dispatch("delUserAction");
    },
  },
  watch: {
    $route(to, from) {
      this.$store.commit("setActiveRoute", to.path);
      console.log(
        to.path,
        from.path,
        this.$store.state.activeRoute,
        this.$store.getters.getActiveRoute
      );
    },
  },
  mounted() {
    console.log("当前时间：", this.$dateFormat.objToDate());
    console.log(
      "activeRoute:",
      this.activeRoute,
      "所有缓存:",
      this.$storage.getAll()
    );
    this.$store.commit(
      "setActiveRoute",
      "/" + window.location.hash.split("/")[1]
    );
    console.log(this.$store.state.activeRoute);
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 8vh;
  width: 100vw;
  // background: url(../../assets/header.png) no-repeat;
  // linear-gradient(to right, rgba(33, 98, 158, 1) 40%, transparent),
  // background-size: 100% 100%;
  background: linear-gradient(to right, rgb(216, 229, 241), rgb(241, 228, 216));
  .header-item {
    float: right;
    font-size: 3vh;
    line-height: 8vh;
    // color: #fff;
    i {
      // color: #fff;
      font-size: 20px;
    }
    &:hover i {
      color: #2d8cf0;
    }
  }

  .title {
    float: left;
    margin-left: 3vw;
  }
  .search {
    margin-right: 3vw;
  }
}
</style>