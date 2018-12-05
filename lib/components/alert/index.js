import Vue from "vue";
import AlertComponent from "./alert.vue";

var plugin = {
    install: function install(Vue) {
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var AlertPlugin = Vue.extend(AlertComponent);

        var $vm = new AlertPlugin({
            el: document.createElement("div")
        });
        document.body.appendChild($vm.$el);

        function alert() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
            var timeout = $vm.timeout || 3000;
            if ($vm.delayed) {
                setTimeout(function (_) {
                    $vm.show = false;
                }, timeout);
            }
            return new Promise(function (resolve, reject) {
                $vm.$watch("show", function (val) {
                    resolve();
                });
            });
        }

        if (!Vue.$x) {
            Vue.$x = {
                alert: alert
            };
        } else {
            Vue.$x.alert = alert;
        }
        Vue.mixin({
            created: function created() {
                this.$x = Vue.$x;
            }
        });
    }
};

export default plugin;