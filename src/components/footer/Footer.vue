<template>
  <!-- <Row class="login-foot">
    <Col span="8">
      <div @click="handleClick({ activeName: '', route: '' })">
        <Icon v-if="active == 'session'" type="ios-text" class="active" />
        <Icon v-else type="ios-text-outline" />
        <span>消息</span>
      </div>
    </Col>
    <Col span="8">
      <div @click="handleClick({ activeName: 'friends', route: 'friends' })">
        <Icon v-if="active == 'friends'" type="ios-contact" class="active" />
        <Icon v-else type="ios-contact-outline" />
        <span>通讯录</span>
      </div>
    </Col>
    <Col span="8">
      <div @click="handleClick({ activeName: 'session', route: 'session' })">
        <Icon v-if="active == 3" type="ios-compass" class="active" />
        <Icon v-else type="ios-compass-outline" />
        <span>动态</span>
      </div>
    </Col>
  </Row> -->
  <Row class="login-foot">
    <Col v-for="(item, i) in footList" :key="i" :span="item.span">
      <div @click="handleClick(item.name)">
        <Icon
          v-if="active == item.name"
          :type="item.iconActive"
          class="active"
        />
        <Icon v-else :type="item.icon" />
        <span>{{ item.text }}</span>
      </div>
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      active: "session",
      footList: [
        {
          name: "session",
          icon: "ios-text-outline",
          iconActive: "ios-text",
          text: "消息",
          span: 8,
        },
        {
          name: "friends",
          icon: "ios-contact-outline",
          iconActive: "ios-contact",
          text: "通讯录",
          span: 8,
        },
        {
          name: "dynamic",
          icon: "ios-compass-outline",
          iconActive: "ios-compass",
          text: "动态",
          span: 8,
        },
      ],
    };
  },
  methods: {
    handleClick(name) {
      if (name !== this.active) {
        this.active = name;
        this.$router.push(name);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-foot {
  // position: absolute;
  // bottom: 0;
  width: 100vw;
  height: 10vh;
  line-height: 10vh;
  text-align: center;
  background: url(../../assets/footer.png) no-repeat;
  background-size: 100% 100%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  .ivu-col {
    height: 100%;
    color: #ffffffde;
    position: relative;

    i {
      font-size: 6vh;
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      bottom: 4vh;
    }
    span {
      font-size: 2.3vh;
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      top: 2.3vh;
    }
  }
}

.active {
  & + span,
  & {
    color: #5cadff;
  }
}
</style>