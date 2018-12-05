import loading from './components/loading/loading.vue'
import alert from './components/alert/alert.vue'

// 插件
import AlertPlugin from './components/alert/index.js'
import LoadingPlugin from './components/loading/index.js'

const components = [
    loading,
    alert
]

const plugins = [
    AlertPlugin,
    LoadingPlugin
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
    AlertPlugin,
    LoadingPlugin
}

// module.exports = {
//     Loading,
//     Alert,
//     AlertPlugin,
//     LoadingPlugin
// }

// module.exports.default = module.exports;

