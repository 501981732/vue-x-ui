import loading from './components/loading/Loading.vue'
import alert from './components/alert/Alert.vue'
import toast from './components/toast/Toast.vue'

// 插件
import AlertPlugin from './components/alert/index.js'
import LoadingPlugin from './components/loading/index.js'
import ToastPlugin from './components/toast/index.js'
import ConfirmPlugin from './components/confirm/index.js'

import './style/reset.css'
import './style/common.css'
import './style/animation.css'

const components = [
    loading,
    alert,
    toast,
    confirm,
]

const plugins = [
    AlertPlugin,
    LoadingPlugin,
    ToastPlugin,
    ConfirmPlugin,
]

const install = function(Vue, opts={}) {
    components.forEach(component => Vue.component(component.name,component))
    plugins.forEach(plugin => Vue.use(plugin))

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
    loading,
    alert,
    toast,
    confirm,
    AlertPlugin,
    LoadingPlugin,
    ToastPlugin,
    ConfirmPlugin,
}

// module.exports = {
//     Loading,
//     Alert,
//     AlertPlugin,
//     LoadingPlugin
// }

// module.exports.default = module.exports;

