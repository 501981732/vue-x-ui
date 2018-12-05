## vue-x-ui

> A UI for vue you can use it for components or plugin

### install

```
npm install vue-x-ui
```

### example

```
git clone ....
npm install
npm run dev
```

### useage

As component

```
<template>
    <div id="demo">
        <button @click='showLoading'>显示loading</button>
        <button @click='showAlert'>显示alert</button>
        <loading
            :show='true'
            text='拼命加载中'>
        </loading>
        <alert
            title='你好'
            subtitle="恭喜您年会获奖"
            text="xr~"
            v-model="showSuccessAlert" >
        </alert>
    </div>
</template>
<script>
    import {loading,alert} from 'vue-x-ui'
export default {
    name: '',
    components: {
        loading,
        alert
    },
    data() {
        return {
            showSuccessAlert: true
        }
    },
    mounted() {

    },
    methods: {

    },
}

</script>
<style  >
  body {
    margin: 0;
    min-height: 100vh;
    background:
      linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
      linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
      linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
      linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
  }
</style>

```


As Plugin

```
<template>
    <div id="demo">
        <button @click='showLoading'>显示loading</button>
        <button @click='showAlert'>显示alert</button>
        <!-- <loading :show='true' text='哈哈'></loading> -->
        <!-- <alert  title='你好' subtitle="恭喜您年会获奖" text="xr~" v-model="showSuccessAlert" ></alert> -->
    </div>
</template>
<script>
    import Vue form 'vue'
    import {loadingPlugin,alertPligun} from 'vue-x-ui'
    Vue.use(loadingPlugin)
    Vue.use(alertPlugin)
    Vue.use(alertPlugin,{
        delayed:true,
        timeout: 3000
        }) //可配置持续时间
    export default {
        name: '',

        data() {
            return {
                showSuccessAlert: true
            }
        },
        mounted() {

        },
        methods: {
            showLoading() {
                //this.$x.loading.show()
                this.$x.loading.show('loading') //默认显示‘正在加载中...’ 可配置
            },
            hideLoading() {
                this.$x.loading.hide()
            },
            showAlert() {
                //this.$x.alert('wm真帅')  //传字符串默认显示text
                this.$x.alert({
                        title:'这是title',//标题
                        subtitle:'这是subtitle',//副标题
                        text:'这是text', //主题
                        delayed: false // 默认3000ms后自动取消
                    })
            }
        },
        watch: {

        },
        computed: {

        }
    }

</script>

```
<img src="https://raw.githubusercontent.com/501981732/vue-x-ui/master/screenshot/2.png" alt="">
<img src="https://raw.githubusercontent.com/501981732/vue-x-ui/master/screenshot/1.png" alt="">
<img src="https://raw.githubusercontent.com/501981732/vue-x-ui/master/screenshot/3.png" alt="">
