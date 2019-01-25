## vue-x-ui

> A UI for vue you can use it for components or plugin

### install

```
npm install @gblw/vue-x-ui
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
    import {loading,alert} from '@gblw/vue-x-ui'
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
        <div @click='showLoading'>loading插件</div><br>
        <div @click='showAlert'>alert插件</div><br>
        <div @click='showToast'>toast插件</div><br>
        <div @click='showConfirm'>confirm插件</div><br>
    </div>
</template>
<script>

export default {
    name: '',
    components: {
    },
    data() {
        return {
            showSuccessAlert: true
        }
    },
    mounted() {

    },
    methods: {
        showLoading() {
            this.$x.loading.show()
        },
        hideLoading() {
            this.$x.loading.hide()
        },
        showToast() {
            this.$x.toast('我是toast')
        },
        showConfirm() {
           this.$x.confirm({
              title:'提示',
               body: '你喜欢我么？',
               cancleText: '取消',
               confirmText: '确定',
               btnReverse: false, //按钮是否反正
               useHTMLString: 'false' //是否使用动态HTML插入
           }).then(res => {
               console.log(res)     //根据res判断是取消还是确定
               res ? this.$x.toast('确定') : this.$x.toast('取消')
           })
        },
        showAlert() {
            // this.$x.alert('wm真帅')
                this.$x.alert({
                        title:'这是title',//标题
                        subtitle:'这是subtitle',//副标题
                        text:'这是text', //主题
                        delayed: false // 默认2000ms后自动取消
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
<img src="https://raw.githubusercontent.com/501981732/vue-x-ui/master/screenshot/a.gif" width='300' height='500' alt="">

