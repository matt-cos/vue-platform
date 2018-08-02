<template>
  <div class="hello">
    <div v-for="post in homeContent" v-bind:key="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0"
          target="_blank"
        >
          tutorial
        </a>
      </li>
    </ul>
  </div>
</template>

<!-- <script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Matt\'s Vue Platform',
      description: 'I am building this platform to in an attempt to learn Vue'
    }
  }
}
</script> -->

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'homeContent',
  data () {
    return {
      homeContent: []
    }
  },
  mounted () {
    this.getHomeContent()
  },
  methods: {
    async getHomeContent () {
      const response = await PostsService.fetchHome()
      this.homeContent = response.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
