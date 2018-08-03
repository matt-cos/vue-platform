// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('fullNav', {
  template: '<div class="nav"><h1>Matt Cosentino</h1><p>Front End Developer, Specializing in WordPress</p><ul><li><a href="/">Home</a></li><li><a href="/posts-page">Posts</a></li><li><a href="/contact">Contact</a></li></ul></div>'
})

Vue.component('navItem', {
  // not working
  data: function () {
    return {
      count: 0
    }
  },
  props: ['linkName'],
  template: '<li><a href="/posts-page">{{ linkName }}</a></li>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>',
  data: {
    navLinks: [
      { id: 1, linkName: 'qwertyuiop' },
      { id: 2, linkName: 'qwertyuiop' }
    ]
  }
})
