import loading from './components/loading/Loading.vue';
import alert from './components/alert/Alert.vue';
import toast from './components/toast/Toast.vue';
import confirm from './components/confirm/Confirm.vue';
import staggeredGroup from './components/staggeredGroup/staggeredGroup.js';

// 插件
import AlertPlugin from './components/alert/index.js';
import LoadingPlugin from './components/loading/index.js';
import ToastPlugin from './components/toast/index.js';
import ConfirmPlugin from './components/confirm/index.js';

import './style/reset.css';
import './style/common.css';
import './style/animation.css';

var components = [loading, alert, toast, confirm, staggeredGroup];

var plugins = [AlertPlugin, LoadingPlugin, ToastPlugin, ConfirmPlugin];

var install = function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    components.forEach(function (component) {
        return Vue.component(component.name, component);
    });
    plugins.forEach(function (plugin) {
        return Vue.use(plugin);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { loading, alert, toast, confirm, staggeredGroup, AlertPlugin, LoadingPlugin, ToastPlugin, ConfirmPlugin };

// module.exports = {
//     Loading,
//     Alert,
//     AlertPlugin,
//     LoadingPlugin
// }

// module.exports.default = module.exports;