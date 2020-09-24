import router from '@system.router';

export default {
  data: {
    title: 'World'
  },
  clickAction() {
    router.replace({
      uri:"pages/xunlian/xunlian"
    })
  }
}
