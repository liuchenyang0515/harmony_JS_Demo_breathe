import router from '@system.router'

export default {
    data: {
    },
    clickAction() {
        router.replace({
            uri:'pages/index/index' // 所有页面的uri都需要在config.json中定义
        });
    }
}
