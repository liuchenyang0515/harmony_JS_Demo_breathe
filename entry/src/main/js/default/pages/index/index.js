import router from '@system.router';

export default {
  data: {
    title: 'World'
  },
  clickAction() {
    router.replace({
      uri:"pages/xunlian/xunlian"
    })
  },
  onInit() {
    console.log("主页面的onInit()被调用");
  },
  onReady() {
    console.log("主页面的onReady()被调用");
  },
  onShow() {
    console.log("主页面的onShow()被调用");
  },
  onDestroy() {
    console.log("主页面的onDestroy()被调用");
  }
}
