export const LOGIN_SUC = 'LOGIN_SUC'
export const SHOW_LOGIN = 'SHOW_LOGIN'

export default {
  state:{
    mobile:'',
    // isShowLogin:false
  },
  /*Action 类似于 mutation，不同在于：
  * Action 提交的是 mutation，而不是直接变更状态。
  * Action 可以包含任意异步操作。
  */
  actions:{
    addMyInfo({commit},loginInfo){
      commit(LOGIN_SUC,loginInfo)
    },
    // showLogin({commit},flag){
    //   commit(SHOW_LOGIN,flag)
    // },
  },
  /*
  * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
  * Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的
  * 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际
  * 进行状态更改的地方，并且它会接受 state 作为第一个参数
  * */
  mutations:{
    [LOGIN_SUC](state,loginInfo){
      state.mobile = loginInfo.mobile;
    },
    // [SHOW_LOGIN](state,flag){
    //   state.isShowLogin = flag;
    // }
  },
  /*
  * Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
  * 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
  * 且只有当它的依赖值发生了改变才会被重新计算。Getter 接受 state 作为其第一个参数：
  * */
  getters:{
    // getMobile(state){
    //   return state.mobile;
    // }
  }
}
