import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts-page',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
