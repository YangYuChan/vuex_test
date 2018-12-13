import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import TodoList from '../pages/TodoList'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
