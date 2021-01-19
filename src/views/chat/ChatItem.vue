<template>
  <Row v-if="who == 'my'" type="flex" class-name="chat-item">
    <Col v-if="isShowDate" span="24" order="1" class-name="date" align="middle">
      <div>{{ $dateFormat.stampToDate(date, "-", "day") }}</div>
    </Col>
    <Col span="3" order="3" offset="1" align="middle" class-name="avatar">
      <Avatar class="my">{{ myAvatar }}</Avatar>
    </Col>
    <Col span="20" order="2" class-name="msg my" align="bottom"
      ><div class="my">{{ msg }}</div>
    </Col>
  </Row>

  <Row v-else-if="who == 'you'" type="flex" class-name="chat-item">
    <Col v-if="isShowDate" span="24" order="1" class-name="date" align="middle">
      <div>{{ $dateFormat.stampToDate(date, "-", "day") }}</div>
    </Col>
    <Col span="3" order="2" align="middle" class-name="avatar">
      <Avatar class="you">{{ avatar }}</Avatar>
    </Col>
    <Col span="20" order="3" offset="1" class-name="msg you" align="bottom"
      ><div class="you">{{ msg }}</div>
    </Col>
  </Row>
  <div v-else></div>
</template>

<script>
export default {
  props: ["avatar", "msg", "date", "who", "isShowDate"],
  data() {
    return {
      myAvatar: "无",
    };
  },
  methods: {},
  mounted() {
    this.myAvatar = this.$store.getters.getUser.avatar;
    console.log(this.isShowDate);
  },
};
</script>

<style lang="less" scoped>
@my-border-color: rgba(177, 226, 233, 0.5);
@you-border-color: rgba(238, 201, 176, 0.5);

.chat-item {
  padding: 10px;
  .avatar {
    .ivu-avatar {
      background-color: transparent;
      height: 12.5vw;
      width: 12.5vw;

      /deep/ span {
        font-size: 8vw;
        line-height: 12.5vw;
        color: rgb(65, 65, 65);
        text-shadow: 1px 1px 3px rgb(66, 66, 66);
      }

      &.my {
        box-shadow: inset 0 0 10px 5px @my-border-color;
        // border: 1px solid @my-border-color;
      }
      &.you {
        box-shadow: inset 0 0 10px 5px @you-border-color;
        // border: 1px solid @you-border-color;
      }
    }
  }
  .msg {
    div {
      line-height: 1.5;
      padding: 13px 15px;
      border-radius: 5px;
      height: 100%;
      display: inline-block;
      position: relative;
      background: #fff;

      &.my {
        box-shadow: inset 0 0 10px 1px @my-border-color;
        float: right;
        // border: 1px solid @my-border-color;
      }
      &.you {
        box-shadow: inset 0 0 10px 1px @you-border-color;
        // border: 1px solid @you-border-color;
      }
    }

    // 气泡状
    &.my::before {
      content: "";
      width: 20px;
      height: 20px;
      // border: 1px solid;
      position: absolute;
      top: 13px; // 上padding
      right: -8px; // 26/2横向padding+边框
      // border-color: transparent transparent transparent @my-border-color;
      box-shadow: inset 0 0 10px 1px @my-border-color;
      border-radius: 5px;
      transform: rotate(45deg);
    }
    &.you::before {
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      top: 13px;
      left: -8px;
      box-shadow: inset 0 0 10px 1px @you-border-color;
      border-radius: 5px;
      transform: rotate(45deg);
    }
  }
  .date {
    text-align: center;
    padding-bottom: 10px;
    color: rgb(150, 150, 150);
  }
}
</style>