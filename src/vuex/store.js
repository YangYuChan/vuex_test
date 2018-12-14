import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import todo from './modules/todo'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules:{
    login:login,
    todo:todo,
    cart:cart,
    products:products
  },
  strict: debug,
})
