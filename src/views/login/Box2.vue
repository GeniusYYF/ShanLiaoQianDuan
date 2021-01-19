<template>
  <div class="box">
    <div class="title">
      <span class="h2" @click="$store.commit('login/updateSelectBox', 1)"
        >账号登录</span
      >
      <span class="divide">︱</span>
      <span class="h1" @click="$store.commit('login/updateSelectBox', 2)"
        >账号注册</span
      >
    </div>
    <div class="form">
      <Form ref="form" :model="form" :rules="rules">
        <FormItem prop="userName" class="form-item">
          <Input
            class="userName"
            type="text"
            v-model="form.userName"
            placeholder=" 用户名只能包含数字、字母、下划线、汉字"
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

        <FormItem prop="password2" class="form-item">
          <Input
            class="password"
            type="password"
            password
            v-model="form.password2"
            placeholder=" 请确认密码"
          />
        </FormItem>

        <FormItem class="form-item">
          <Button
            class="form-button"
            @click="handleSubmit('form')"
            type="success"
            ghost
            >注 册</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { postSaveUser } from "@/api/login";

export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!/^[a-zA-Z_\u4e00-\u9fa5].*$/.test(value)) {
        callback(new Error("只能以字母、下划线、汉字开头"));
      } else if (
        // \w == a-zA-Z0-9_
        !/^[\w\u4e00-\u9fa5]*$/.test(value)
      ) {
        callback(new Error("只能包含数字、字母、下划线、汉字"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password2 !== "") {
          // 对第二个密码框单独验证
          this.$refs.form.validateField("password2");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    return {
      oneClick: true, // 防止多次点击
      form: {
        userName: "",
        password: "",
        password2: "",
      },
      rules: {
        userName: [
          { validator: validateUserName, trigger: "blur" },
          {
            type: "string",
            max: 6,
            message: "用户名不大于6位",
            trigger: "blur",
          },
        ],
        password: [
          {
            type: "string",
            min: 6,
            message: "密码不小于6位",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
        password2: [
          {
            type: "string",
            min: 6,
            message: "密码不小于6位",
            trigger: "blur",
          },
          { validator: validatePass2, trigger: "blur" },
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
            postSaveUser(this.form)
              .then((res) => {
                console.log(res);
                this.$Loading.finish();
                this.$Message.success(res.data.msg);
                this.$store.commit("login/updateSelectBox", 1);
                this.oneClick = true;
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
};
</script>

<style lang="less" scoped>
.box {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  height: 100%;
  padding: 10% 5% 6%;

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
      color: rgba(33, 80, 235, 0.2);
      margin: 1px 5px;
    }

    .h2 {
      font-size: 18px;
      color: rgba(170, 170, 170, 0.75);
      cursor: pointer;
    }
  }

  .form {
    margin-top: 15px;

    .form-item {
      margin-bottom: 15px;

      /deep/ .ivu-input {
        border: none;
        // border-radius: 5px;
        // border-top: 2px solid #e5e5e773;
        // border-bottom: 2px solid #e5e5e773;
        box-shadow: inset 1px 1px 3px 1px rgba(0, 174, 255, 0.2);
        caret-color: #03f5dd; // 输入时光标颜色
        height: 33px;
        font-size: 14px;
        background-color: transparent;
        color: rgba(111, 111, 111, 0.7);
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
        color: rgba(54, 230, 0, 0.3);
        font-size: 14px;
        border: none;
        text-shadow: 1px 1px rgba(60, 255, 0, 0.3);
        box-shadow: inset 1px 1px 3px 1px rgba(60, 255, 0, 0.2);
      }
    }
  }
}
</style>