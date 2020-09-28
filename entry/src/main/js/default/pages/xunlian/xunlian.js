import router from '@system.router'

let receivePickerValue1 = null;
let receivePickerValue2 = null;
let timer1 = null; // 倒计时定时器
let timer2 = null; // 呼吸交替定时器
let timer3 = null; // 呼吸百分比定时器
let counter = null; // 呼吸计数器
let sumCount = null; // 需要总次数
let picker2Seconds = null; // 用于保存转换后得到的秒数
let startTime = new Date().getTime();
let run1Count = 0;

export default {
    data: {
        seconds: 0,
        isShow: true,
        breathe: "吸气",
        percent: "0",
        duration: "",
        count: ""
    },
    clickAction() {
        // 点击重新跳转到主页面时清除定时器
        clearInterval(timer1);
        timer1 = null;
        clearInterval(timer2);
        timer2 = null;
        clearInterval(timer3);
        timer3 = null;

        router.replace({
            uri: 'pages/index/index' // 所有页面的uri都需要在config.json中定义
        });
    },
    run1() {
        ++run1Count;
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
    run3() {

        this.percent = (parseInt(this.percent) + 1).toString();
//        this.percent.padStart(2, "0"); // 总长度不少过2位就补0 // 这里不支持ES7
        this.percent = this.percent == "100" ? "0" : this.percent;
        if (timer2 == null) {
            clearInterval(timer3);
            timer3 = null;
            this.percent = "100";
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
        this.duration = picker2Seconds + "s";
        this.count = (this.seconds / picker2Seconds).toString();
    },
    onReady() {
        console.log("xunlian页面的onReady()被调用");
    },
    onShow() {
        console.log("xunlian页面的onShow()被调用");
        // 这种方法启用很多定时器，导致呼气吸气和百分比完全不同步的问题，但是这个jerryScript框架目前不允许setTimeout嵌套，嵌套后代码不执行，所以不能用嵌套setTimeout方法来修正时差
        // 所以作为一个框架遗留问题留在这里，有明白的小伙伴提示一下
        timer1 = setInterval(this.run1, 1000); // 没有this那么run1找不到
        timer2 = setInterval(this.run2, picker2Seconds * 1000);
        timer3 = setInterval(this.run3, picker2Seconds * 10); // /100*1000
    },
    onDestroy() {
        console.log("xunlian页面的onDestroy()被调用");
    }
}
