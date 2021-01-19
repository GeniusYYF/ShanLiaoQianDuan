import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/** viewUI 组件库*/
// 引入viewUI样式
import "view-design/dist/styles/iview.css";
// 全局引入
// import ViewUI from "view-design";
// Vue.use(ViewUI);

// 引入绑定属性js View组件的按需引入在里面(**引入新组件时要在里面添加**)
import components from './utils/viewUI.js'
// 引入工具js 
import { dateFormat, storage } from './utils/common.js'
// 引入 mock 模拟数据
// import './mock'

// 执行components的install
Vue.use(components)
// 挂载vue属性,$指自定义公用属性-可选
Vue.prototype.$dateFormat = dateFormat
Vue.prototype.$storage = storage

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
