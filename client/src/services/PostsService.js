import Api from '@/services/Api'

export default {
  fetchHome () {
    return Api().get('home-content')
  },
  fetchPosts () {
    return Api().get('posts')
  },
  fetchContact () {
    return Api().get('contact-content')
  }
}
