
import LoadingComponent from './loading.vue'; // 导入组件
// const plagin = {
//     install(Vue, options) {
//         Vue.component(loading.name, loading) //  组件的name属性
//         // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已
//         // Vue.prototype.$xxx  // 最终可以在任何地方通过 this.$xxx 调用
//         // 虽然没有明确规定用$开头  但是大家都默认遵守这个规定
//     }
// }
// export default plagin // 导出..


var $vm = void 0;

export default {
    install: function install(Vue, props) {
        if (!$vm) {
            var LoadingPlugin = Vue.extend(LoadingComponent);

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        // $vm.show = false;
        var loading = {
            show: function show(text) {
                $vm.show = true;

                text && ($vm.text = text);
            },
            hide: function hide() {
                $vm.show = false;
            }
        };
        // const loading = {
        //     show() {
        //         if ($vm.show) return;
        //         $vm.value = true;
        //     },
        //     hide() {
        //         $vm.value = false;
        //     }
        // };
        if (!Vue.$x) {
            Vue.$x = {
                loading: loading
            };
        } else {
            Vue.$x.loading = loading;
        }
        // if (!Vue.$loading) {
        //     Vue.$loading = loading;
        // }
        // Vue.prototype.$loading = Vue.$loading;

        Vue.mixin({
            created: function created() {
                this.$loading = Vue.$loading;
            }
        });
    }
};