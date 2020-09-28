import router from '@system.router';

let counter = 3;
let timer = null;
let pv1 = null;
let pv2 = null;

export default {
    data: {
        imgSrc: "",
        seconds: ""
    },
    run() {
        --counter;
        if (counter) {
            this.imgSrc = "/common/" + counter + ".png";
            this.seconds = counter.toString();
        } else {
            this.imgSrc = "";
            this.seconds = "";

            clearInterval(timer);
            timer = null;
            router.replace({
                uri: 'pages/xunlian/xunlian',
                params: {
                    "key1": pv1,
                    "key2": pv2
                }
            });
        }
    },
    onInit() {
        pv1 = this.data1;
        pv2 = this.data2;
        this.imgSrc = "/common/" + counter + ".png";
        console.log(this.imgSrc);
        this.seconds = counter.toString();
    },
    onShow() {
        timer = setInterval(this.run, 1000);
    }
}
