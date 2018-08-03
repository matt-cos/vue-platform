import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
