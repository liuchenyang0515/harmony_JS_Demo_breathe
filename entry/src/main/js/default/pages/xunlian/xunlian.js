import router from '@system.router'

export default {
    data: {
    },
    clickAction() {
        router.replace({
            uri:'pages/index/index' // 所有页面的uri都需要在config.json中定义
        });
    },
    onInit() {
        console.log("xunlian页面的onInit()被调用");
    },
    onReady() {
        console.log("xunlian页面的onReady()被调用");
    },
    onShow() {
        console.log("xunlian页面的onShow()被调用");
    },
    onDestroy() {
        console.log("xunlian页面的onDestroy()被调用");
    }
}
