const state = {
    selectBox: 1,
    selectBoxCache: 1,
};

const getters = {
    getSelectBox(state) {
        return state.selectBox
    }
};

const mutations = {
    updateSelectBox(state, val) {
        if (val == 3 && state.selectBoxCache != 3) state.selectBoxCache = state.selectBox // 进入二维码前保存之前的页面选择，并且防止多次点击
        state.selectBox = val
        console.log('更新', val)
    },
    backSelectBox(state) {
        state.selectBox = state.selectBoxCache
    }
};

const actions = {
    
};

// 注意和仓库的区别
const store = {
    // namespaced用于在全局引用此文件里的方法时标识这一个的文件名，使得让人明白这些数据来自哪个仓库
    // 即当你需要在别的文件里面使用子仓库(mapStates、mapGetters、mapActions)时，里面的方法需要注明来自哪一个模块的方法
    // 若未设置默认是false，即子仓库的数据也视为全局仓库中的数据，此时的‘子仓库’仅仅是代码上的分割
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
export default store;
