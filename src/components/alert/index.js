import Vue from "vue";
import AlertComponent from "./alert.vue";

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
            //配置优选级： 默认配置 < 全部配置  < 实例配置
            $vm = Object.assign($vm, props, options, { delayed: true });

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
