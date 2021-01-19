<template>
  <ListItem>
    <div @click="enterChat()">
      <ListItemMeta>
        <template slot="avatar">
          <Avatar>{{ avatar }}</Avatar>
        </template>
        <template slot="title">
          <span>{{ userName }}</span>
        </template>
        <template slot="description">
          <span>{{ description }}</span>
        </template>
      </ListItemMeta>

      <template slot="action" v-if="direction === 'left'">
        <li>
          <a href="">删 除</a>
        </li>
      </template>
    </div>
  </ListItem>
</template>

<script>
// import { scrollDirection } from "@/utils/common.js";

export default {
  props: ["id", "avatar", "userName", "description"],
  data() {
    return {
      scrolling: false,
      direction: false,
    };
  },
  methods: {
    enterChat() {
      console.log(this.userName);
      this.$router.push(
        `/chat?id=${this.id}&avatar=${this.avatar}&userName=${this.userName}`
      );
    },
  },
  mounted() {
    // 给列表添加滚动事件
    // scrollDirection(this.$el, this);
    console.log(this.userName);
  },
};
</script>

<style lang="less" scoped>
@you-border-color: rgba(235, 189, 158, 0.5);
.ivu-list-item {
  padding: 1vh 3vw;

  /deep/ .ivu-list-item-meta {
    height: 8vh;
    .ivu-list-item-meta-avatar {
      margin-right: 3vw;

      .ivu-avatar {
        height: 8vh;
        width: 8vh;
        box-shadow: inset 0 0 10px 5px @you-border-color;
        border: 1px solid @you-border-color;
        background-color: transparent;
        span {
          font-size: 6vh;
          line-height: 8vh;
          color: rgb(65, 65, 65);
          text-shadow: 1px 1px 3px rgb(66, 66, 66);
        }
      }
    }
    .ivu-list-item-meta-content {
      width: 75vw;
      .ivu-list-item-meta-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        // 100-6-3-8vh
        height: 4vh;
        line-height: 4vh;
        margin-bottom: 0;
        color: rgb(65, 65, 65);
        font-size: 3vh;
      }
      .ivu-list-item-meta-description {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 4vh;
        line-height: 4vh;
        color: rgba(65, 65, 65, 0.5);
      }
    }
  }

  /deep/ .ivu-list-item-action {
    position: absolute;
    margin: 0;
    left: 83vw;
    padding: 0 3vw;
    background-color: rgba(255, 130, 80, 0.9);
    border-radius: 5%;
    li {
      line-height: 8vh;
      padding: 0;
      a {
        color: #ffffffde;
      }
    }
  }
}
</style>