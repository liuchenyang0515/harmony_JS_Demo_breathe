let counter = 3;
let timer = null;
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
        }
    },
    onInit() {
        this.imgSrc = "/common/" + counter + ".png";
        console.log(this.imgSrc);
        this.seconds = counter.toString();
    },
    onShow() {
        timer = setInterval(this.run, 1000);
    }
}
