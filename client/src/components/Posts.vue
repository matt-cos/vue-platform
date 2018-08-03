<template>
  <div class="posts">
    <h2>Posts</h2>
    This file will list all the posts.

    <div v-for="post in postsX" v-bind:key="post">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'postsX',
  data () {
    return {
      postsX: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.postsX = response.data
    }
  }
}
</script>
