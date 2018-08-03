// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('navigation', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<div class="nav"><h2>Navigation</h2><ul><li><a href="/">Home</a></li><li><a href="/posts-page">Posts</a></li></ul></div>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
