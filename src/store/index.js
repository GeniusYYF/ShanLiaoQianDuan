// https://blog.csdn.net/GeniusXYT/article/details/112305404
// https://blog.csdn.net/GeniusXYT/article/details/106084065
import Vue from "vue";
import Vuex from "vuex";
import { storage } from '../utils/common'
// 引入子仓库
import login from './modules/login.js'

Vue.use(Vuex);

const state = { //要设置的全局访问的state对象,赋予初始属性值
  activeRoute: '', // '/'+window.location.hash.split('/')[1]
  token: null,
  user: null,
  sessionLeft: "0", // 消息列表进入会话框使用
  chatLeft: "100vw",
};

const getters = {   //实时监听state值的变化(最新状态)
  getActiveRoute(state) {  //定义函数，返回处理过的val，命名最好有代表性
    return state.activeRoute
  },
  getToken(state) {
    console.log(state.token || storage.get("token") || null)
    return state.token || storage.get("token") || null
  },
  getUser(state) {
    return state.user || storage.get("user") || null
  },
  getSessionLeft(state) {
    return state.sessionLeft
  },
  getChatLeft(state) {
    return state.chatLeft
  }
};

const mutations = {
  // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
  // 存storage本地缓存 - 如一次登录，多次打开均无需登录，刷新页面用户信息仍在等场景
  setToken(state, val) {
    state.token = val
    storage.set("token", val)
  },
  delToken(state) {
    state.token = null
    storage.remove("token")
  },
  setUser(state, val) {
    state.user = val
    storage.set("user", val)
  },
  delUser(state) {
    state.user = null
    storage.remove("user")
  },
  setActiveRoute(state, val) {
    state.activeRoute = val
  },
  enterChat(state) {
    state.sessionLeft = "-100vw"
    state.chatLeft = "0"
  },
  quitChat(state) {
    state.sessionLeft = "0"
    state.chatLeft = "100vw"
  }
};

const actions = {
  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
  saveUserAction({ commit }, user) {
    commit('setToken', user.token);
    commit('setUser', user);
  },
  delUserAction({ commit }) {
    commit('delToken');
    commit('delUser');
  },

};

export default new Vuex.Store({
  strict: true, // 此模式下所有的状态变更（即更新state）必须使用mutation
  state,
  getters,
  mutations,
  actions,
  modules: {
    login
  }
});
