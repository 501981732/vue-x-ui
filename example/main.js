import Vue from 'vue'
import Demo from './Demo.vue'

import loadingPlugin from '../src/components/loading/index.js'
import alertPlugin from '../src/components/alert/index.js'
import toastPlugin from '../src/components/toast/index.js'
import confirmPlugin from '../src/components/confirm/index.js'


Vue.use(loadingPlugin)
Vue.use(alertPlugin)
Vue.use(toastPlugin)
Vue.use(confirmPlugin)
// ES6
// import loading from 'loading'

// //  通过require 导入
// var loading = require('loading')

// // 通过use挂载
// Vue.use(loading)

// // 或者直接导入js文件
// <script src="./dist/loading.js"></script>
new Vue({
  el: '#app',
  render: h => h(Demo)
})
