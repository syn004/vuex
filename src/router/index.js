import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/a'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/a',
      component: About
    }
  ]
})
