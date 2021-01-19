// const state = {
//     isLastOld: false, // 用于判断之后发送的消息和上一条消息的时间差是否大于n分
//     dateDif: 5,
// };

// const getters = {
//     getIsLastOld(state) {
//         return state.isLastOld
//     }
// };

// const mutations = {
//     setIsLastOld(state,isLastOld) {
//         state.isLastOld = isLastOld > state.dateDif
//     }
// };

// const actions = {
    
// };

// // 注意和仓库的区别
// const store = {
//     // namespaced用于在全局引用此文件里的方法时标识这一个的文件名，使得让人明白这些数据来自哪个仓库
//     // 即当你需要在别的文件里面使用子仓库(mapStates、mapGetters、mapActions)时，里面的方法需要注明来自哪一个模块的方法
//     // 若未设置默认是false，即子仓库的数据也视为全局仓库中的数据，此时的‘子仓库’仅仅是代码上的分割
//     namespaced: true,
//     state,
//     getters,
//     mutations,
//     actions,
// }
// export default store;
