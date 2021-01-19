<template>
  <div class="chat">
    <div class="head">
      <Icon type="ios-arrow-back" @click="$router.push('/index')" />
      <span class="name">{{ name }}</span>
    </div>
    <div class="body">
      <Description :desc="this.msgs[0].description" />
      <ChatItem
        v-for="(item, i) in msgs"
        :key="i"
        :avatar="avatar"
        :msg="item.myMsg || item.youMsg"
        :date="item.date"
        :who="item.myMsg ? 'my' : item.youMsg ? 'you' : ''"
        :isShowDate="isShowDate(i)"
      />
    </div>

    <div class="foot">
      <Input
        class="input"
        v-model="myMsg"
        clearable
        @keyup.enter.native="send()"
      />
      <Button class="btn" type="success" @click="send()">发 送</Button>
    </div>
  </div>
</template>

<script>
import { getMsgs, saveDesc } from "@/api/session";
import ChatItem from "./ChatItem";
import Description from "./Description";

export default {
  components: { ChatItem, Description },
  data() {
    return {
      name: "无名氏",
      avatar: "无",
      myMsg: "",
      myId: "",
      youId: "",
      msgs: [{ description: "" }],
    };
  },
  methods: {
    send() {
      if (this.myMsg) {
        saveDesc({
          myId: this.myId,
          myMsg: this.myMsg,
          youId: this.youId,
          youMsg: null,
        })
          .then((res) => {
            console.log(res);
            this.myMsg = "";
            this.updateMsgs();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    updateMsgs() {
      getMsgs(this.myId, this.youId)
        .then((res) => {
          console.log(res, this.body);
          this.msgs = res.data.data;
          setTimeout(() => {
            this.body.scrollTop = this.body.scrollHeight;
          }, 0);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    initData() {
      let query = this.$route.query;
      this.name = query.userName;
      this.avatar = query.avatar;
      this.myId = this.$store.getters.getUser.id;
      this.youId = query.id;
      // 滚动到最底层
      this.body = document.getElementsByClassName("body")[0];
      this.body.style.cssText = `height:${
        document.documentElement.clientHeight - 50 - 50
      }px;`;
    },
    // 判断每条消息间隔是否大于5分
    isShowDate(i) {
      if (i == 0 || i == 1) return true;
      // 第一条消息是系统自动生成，排除在外
      else
        return (
          this.$dateFormat.stampToUnit(
            Number(this.msgs[i].date) - Number(this.msgs[i - 1].date)
          ).m > 5
        );
    },
  },
  mounted() {
    this.initData();
    this.updateMsgs();
  },
};
</script>

<style lang="less" scoped>
.chat {
  height: 100%;
  .head {
    position: relative;
    height: 50px;
    font-size: 24px;
    line-height: 50px;
    background-color: rgb(245, 247, 249);
    i {
      position: absolute;
      left: 15px;
      top: 13px;
      font-size: 24px;
    }

    .name {
      color: #444444;
    }
  }
  .body {
    height: 84vh;
    overflow: hidden auto;
    background-color: rgb(255, 255, 255);
    // background: url(../../assets/bj-app4.png) no-repeat;
    // background-size: 100% 100%;
    text-align: left;
    color: rgb(100, 100, 100);
  }

  .foot {
    height: 50px;
    background-color: rgb(245, 247, 249);
    text-align: left;
    position: absolute;
    bottom: 0;
    left: 0;

    .input {
      height: 40px;
      margin: 5px 3vw;
      width: 70vw;
      /deep/ .ivu-input {
        height: 100%;
        font-size: 18px;
        color: rgb(100, 100, 100);
      }
      /deep/ .ivu-input-icon-clear {
        line-height: 40px;
        height: 100%;
        font-size: 18px;
        color: rgb(192, 192, 192);
      }
    }
    .btn {
      height: 38px;
      width: 21vw;
    }
  }
}
</style>