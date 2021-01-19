<template>
  <div class="page-404">
    <div class="img"></div>
    <div class="desc">
      <div class="title" :class="{ start: start }">
        <span class="big">4</span><span class="big">0</span
        ><span class="big">4</span>
        <span class="big-text">页面不存在</span>
      </div>

      <div class="text" :class="{ start: start }">
        <p>有约不来过夜半，闲敲棋子落灯花。 疏影横斜水清浅，暗香浮动月黄昏。</p>
        <p>宝帘闲挂小银钩。</p>
        <p>叔夜之为人也，岩岩若孤松之独立；其醉也，峨峨若玉山之将倾。</p>
        <p>其文约，其辞微，其志洁，其行廉。</p>
      </div>

      <Button
        class="btn"
        :class="{ start: start }"
        type="default"
        ghost
        @click="$router.go(-1)"
        >返回上一页</Button
      >
      <Button
        class="btn"
        :class="{ start: start }"
        type="default"
        ghost
        @click="$router.push('/')"
        >返回首页</Button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.start = true;
    });
  },
};
</script>

<style lang="less" scoped>
.page-404 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;

  .img {
    height: 100vh;
    background: url(../../assets/404-2.png) no-repeat;
    background-size: 100% 100%;
  }

  .desc {
    position: absolute;
    top: 15vh;
    left: 10vw;
    width: 50vw;
    text-align: left;
    color: #fff;

    .title {
      line-height: 1;
      font-size: 100px;

      .big {
        display: inline-block;
        margin-left: -10%;
        font-size: 200px;
      }
      .big-text {
        display: inline-block;
        width: 0;
        overflow: hidden;
        white-space: nowrap;
        transform: translateX(-500px);
      }
      &.start {
        .big {
          transition: all 0.8s ease-out;
          margin-left: 0;
          transform: rotate(360deg);
        }
        .big-text {
          transition: all 0.8s ease-in;
          width: 500px; // fontsize是100，每个字100px，共5个
          transform: translateX(0); // 平移
        }
      }
    }

    .text {
      font-size: 26px;
      margin: 3vh 0;
      opacity: 0;
      height: 0;
      overflow: hidden;
      white-space: nowrap;

      &.start {
        transition: all 0.5s ease-in-out 1.3s;
        opacity: 1;
        height: 156px;
      }
    }

    .btn {
      float: left;
      margin-right: 1vw;
      font-weight: 700;
      opacity: 0;
      &.start {
        transition: opacity 0.5s ease-in-out .8s;
        opacity: 1;
      }
    }
  }
}
</style>