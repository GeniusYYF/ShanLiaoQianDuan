<template>
  <div class="box">
    <div class="title">
      <span class="h1" @click="$store.commit('login/updateSelectBox', 1)"
        >账号登录</span
      >
      <span class="divide">︱</span>
      <span class="h2" @click="$store.commit('login/updateSelectBox', 2)"
        >账号注册</span
      >
    </div>
    <div
      class="QR"
      @click="$store.login.commit('login/updateSelectBox', 3)"
    ></div>

    <div class="form">
      <Form ref="form" :model="form" :rules="rules">
        <FormItem prop="userName" class="form-item">
          <Input
            class="userName"
            type="text"
            v-model="form.userName"
            placeholder=" 请输入用户名"
          />
        </FormItem>
        <FormItem prop="password" class="form-item">
          <Input
            class="password"
            type="password"
            password
            v-model="form.password"
            placeholder=" 请输入密码"
          />
        </FormItem>
        <FormItem class="form-item">
          <Button
            class="form-button"
            @click="handleSubmit('form')"
            type="primary"
            ghost
            >登 录</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { postLogin } from "@/api/login";

export default {
  data() {
    return {
      oneClick: true, // 防止多次点击
      form: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
               {
            type: "string",
            max: 6,
            message: "用户名不大于6位",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "密码不小于6位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$Loading.start();
      this.$refs[name].validate((valid) => {
        if (valid && this.oneClick) {
          this.oneClick = false;
          setTimeout(() => {
            postLogin(this.form)
              .then(({ data }) => {
                console.log(data);
                this.$store.dispatch("saveUserAction", data.data);
                this.$Loading.update(80);
                this.$Message.success(data.msg);
                setTimeout(() => {
                  this.$Loading.finish();
                  this.$router.push("/index");
                  this.oneClick = true;
                }, 500);
              })
              .catch((err) => {
                console.log(err);
                this.$Loading.error();
                this.$Message.error(err.msg);
                this.oneClick = true;
              });
          }, 200);
        } else if (this.oneClick) {
          this.$Loading.error();
        }
      });
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.box {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  height: 100%;
  padding: 10% 5%;

  .title {
    text-align: left;

    .h1 {
      font-size: 26px;
      color: #5f5f5f;
      line-height: 1;
      cursor: pointer;
    }

    .divide {
      font-size: 20px;
      color: rgba(33, 80, 235, 0.3);
      margin: 2px 5px;
    }

    .h2 {
      font-size: 18px;
      color: rgba(170, 170, 170, 0.75);
      cursor: pointer;
    }
  }
  .form {
    margin-top:15px;

    .form-item {
      margin-bottom: 15px;

      /deep/ .ivu-input {
        border-radius: 5px;
        border: none;
        // border: 2px solid #e5e5e773 !important;
        // border-top: 2px solid #e5e5e773 !important;
        // border-bottom: 2px solid #e5e5e773 !important;
        box-shadow: inset 1px 1px 3px 1px rgba(0, 174, 255, 0.2);
        caret-color: #03f5dd; // 输入时光标颜色
        height: 33px;
        font-size: 14px;
        background-color: transparent;
        color: rgba(111, 111, 111, .7);
      }
      /deep/ .ivu-form-item-error-tip {
        font-size: 12px;
        color: #ff9166;
        padding-top: 3px;
      }
      .password {
        /deep/ .ivu-input-suffix {
          .ivu-icon {
            font-size: 22px;
          }
        }
      }
      .form-button {
        margin-top: 5px;
        border-radius: 20px;
        width: 100%;
        height: 33px;
        color: rgba(0, 127, 185, 0.3);
        font-size: 14px;
        border: none;
        text-shadow: 1px 1px rgba(0, 174, 255, 0.3);
      box-shadow: inset 1px 1px 3px 1px rgba(0, 174, 255, 0.2);
      }
    }
  }
}
</style>