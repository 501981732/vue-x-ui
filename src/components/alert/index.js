import Vue from "vue";
import AlertComponent from "./Alert.vue";

const defaultProps = {
    delayed: true
}
const plugin = {
    install(Vue, props = {}) {
        const AlertPlugin = Vue.extend(AlertComponent);

        let $vm = new AlertPlugin({
            el: document.createElement("div")
        });
        document.body.appendChild($vm.$el);

        function alert(options = {}) {
            if ($vm.show) return;
            // 如果传参为字符串，则直接显示body 的文本
            if (typeof options === "string") {
                options = {
                    text: arguments[0]
                };
            }

            $vm = Object.assign($vm, defaultProps, props, options)

            $vm.show = true;
            // 支持延时消失 默认支持
            let timeout = $vm.timeout || 3000
            if ($vm.delayed) {
                setTimeout(_ => {
                    $vm.show = false;
                }, timeout);
            }
            return new Promise((resolve, reject) => {
                $vm.$watch("show", val => {
                    resolve();
                });
            });
        }

        if (!Vue.$x) {
            Vue.$x = {
                alert
            };
        } else {
            Vue.$x.alert = alert;
        }
        Vue.mixin({
            created: function() {
                this.$x = Vue.$x;
            }
        });
    }
};

export default plugin;
