import router from '@system.router'

let receivePickerValue1 = null;
let receivePickerValue2 = null;
let timer1 = null; // 倒计时定时器
let timer2 = null; // 呼吸交替定时器
let counter = null; // 呼吸计数器
let sumCount = null; // 需要总次数
let picker2Seconds = null; // 用于保存转换后得到的秒数
export default {
    data: {
        seconds: 0,
        isShow: true,
        breathe: "吸气"
    },
    clickAction() {
        // 点击重新跳转到主页面时清除定时器
        clearInterval(timer1);
        timer1 = null;
        clearInterval(timer2);
        timer2 = null;
        router.replace({
            uri: 'pages/index/index' // 所有页面的uri都需要在config.json中定义
        });
    },
    run1() {
        --this.seconds;
        if (this.seconds == 0) { // 字符串判断0不能直接取反，转number不如直接==判断
            clearInterval(timer1);
            timer1 = null;
            this.isShow = false;
        }
    },
    run2() {
        ++counter;
        if (counter === sumCount) {
            clearInterval(timer2);
            timer2 = null;
            this.breathe = "已完成";
        } else {
            this.breathe = this.breathe === "呼气" ? "吸气" : "呼气";
        }
    },
    onInit() {
        console.log("xunlian页面的onInit()被调用");
        console.log(`接收到左边picker的值为：${this.data1}`);
        console.log(`接收到右边picker的值为：${this.data2}`);
        receivePickerValue1 = this.data1;
        receivePickerValue2 = this.data2;
        this.seconds = receivePickerValue1 * 60;
        switch (receivePickerValue2) {
            case "较慢":
            picker2Seconds = 6;
            break;
            case "较快":
            picker2Seconds = 2;
            break;
            default:
            picker2Seconds = 4;
            break;
        }
        sumCount = this.seconds / picker2Seconds;
    },
    onReady() {
        console.log("xunlian页面的onReady()被调用");
    },
    onShow() {
        console.log("xunlian页面的onShow()被调用");
        timer1 = setInterval(this.run1, 1000); // 没有this那么run1找不到
        timer2 = setInterval(this.run2, picker2Seconds * 1000);
    },
    onDestroy() {
        console.log("xunlian页面的onDestroy()被调用");
    }
}
