import router from '@system.router';

let pickerValue1 = null;
let pickerValue2 = null;

export default {
    data: {
        picker1range: ["1", "2", "3"],
        picker2range: ["较慢", "舒缓", "较快"]
    },
    clickAction() {
        router.replace({
            uri: "pages/xunlian/xunlian",
            params: { // 传递到目标页面的参数
                "data1": pickerValue1,
                "data2": pickerValue2
            }
        })
    },
    changeAction1(pv) {
        console.log("左边的选中项:" + pv.newValue);
        pickerValue1 = pv.newValue;
    },
    changeAction2(pv) {
        console.log(`右边的选中项:${pv.newValue}`); // 说明ES6也是支持的
        pickerValue2 = pv.newValue;
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