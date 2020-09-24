import router from '@system.router'
let receivePickerValue1 = null;
let receivePickerValue2 = null;
let timer1 = null;
export default {
    data: {
        seconds: 0,
        isShow: true
    },
    clickAction() {
        router.replace({
            uri:'pages/index/index' // 所有页面的uri都需要在config.json中定义
        });
    },
    run1 () {
        --this.seconds;
        if (this.seconds == 0) { // 字符串判断0不能直接取反，转number不如直接==判断
            clearInterval(timer1);
            timer1 = null;
            this.isShow = false;
        }
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
        timer1 = setInterval(this.run1, 1000); // 没有this那么run1找不到
    },
    onDestroy() {
        console.log("xunlian页面的onDestroy()被调用");
    }
}
