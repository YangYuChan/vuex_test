import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import TodoList from '../pages/TodoList'
import Shopping from '../pages/Shopping'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },
  ]
})
