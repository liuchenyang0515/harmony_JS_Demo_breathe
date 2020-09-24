import router from '@system.router'
let receivePickerValue1 = null;
let receivePickerValue2 = null;

export default {
    data: {
        seconds: 0
    },
    clickAction() {
        router.replace({
            uri:'pages/index/index' // 所有页面的uri都需要在config.json中定义
        });
    },
    onInit() {
        console.log("xunlian页面的onInit()被调用");
        console.log(`接收到左边picker的值为：${this.data1}`);
        console.log(`接收到右边picker的值为：${this.data2}`);
        receivePickerValue1 = this.data1;
        receivePickerValue2 = this.data2;
        this.seconds = receivePickerValue1 * 60;
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
