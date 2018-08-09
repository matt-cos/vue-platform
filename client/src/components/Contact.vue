<template>
  <div class="posts">
    <h2>Contact Me</h2>
    This file will list my contact info.

    <div v-for="post in contactItems" v-bind:key="post">
      <p>
        <span><b>{{ post.email }}</b></span><br />
        <span>{{ post.phone }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'contactItems',
  data () {
    return {
      contactItems: []
    }
  },
  mounted () {
    this.getContact()
  },
  methods: {
    async getContact () {
      const response = await PostsService.fetchContact()
      this.contactItems = response.data
    }
  }
}
</script>
