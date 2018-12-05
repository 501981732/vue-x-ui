import loading from './components/loading/loading.vue';
import alert from './components/alert/alert.vue';

// 插件
import AlertPlugin from './components/alert/index.js';
import LoadingPlugin from './components/loading/index.js';

var components = [loading, alert];

var plugins = [AlertPlugin, LoadingPlugin];

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

export { loading, alert, AlertPlugin, LoadingPlugin };

// module.exports = {
//     Loading,
//     Alert,
//     AlertPlugin,
//     LoadingPlugin
// }

// module.exports.default = module.exports;