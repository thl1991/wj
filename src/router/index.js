import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home'
import Login from '@/components/main/Login'
import Register from '@/components/main/Register'
import Contact from '@/components/main/Contact'
import UserCenter from '@/components/main/UserCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }, {
      path: '/user:id',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
})
