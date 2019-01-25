<template>
    <div id="demo">
        <div @click='showLoading'>loading插件</div><br>
        <div @click='showAlert'>alert插件</div><br>
        <div @click='showToast'>toast插件</div><br>
        <div @click='showConfirm'>confirm插件</div><br>
        <!-- <loading :show='true' text='哈哈'></loading> -->
        <!-- <alert  title='你好' subtitle="恭喜您年会获奖" text="xr~" v-model="showSuccessAlert" ></alert> -->
        <input v-model="query">    <br>
        <staggered-group >
            <div v-for="(item, index) in computedList" :key="item.msg" :data-index="index" data-delay='50' data-height='50px' class="demo" >{{ item.msg }}</div>
        </staggered-group>
    </div>
</template>
<script>
import { loading } from './../src/index.js'
import { alert } from './../src/index.js'
import { staggeredGroup } from './../src/index.js'
export default {
    name: '',
    components: {
        loading,
        alert,
        staggeredGroup
    },
    data() {
        return {
            showSuccessAlert: true,
            query: '',
            list: [
                { msg: '1.苹果' },
                { msg: '2.香蕉' },
                { msg: '3.橘子' },
                { msg: '4.榴莲' },
                { msg: '5.火龙果' }
            ]
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
                title: '提示',
                body: '你喜欢我么？',
                cancleText: '取消',
                confirmText: '确定',
                btnReverse: false, //按钮是否反正
                useHTMLString: 'false' //是否使用动态HTML插入
            }).then(res => {
                console.log(res) //根据res判断是取消还是确定
                res ? this.$x.toast('确定') : this.$x.toast('取消')
            })
        },
        showAlert() {
            // this.$x.alert('wm真帅')
            this.$x.alert({
                title: '这是title', //标题
                subtitle: '这是subtitle', //副标题
                text: '这是text', //主题
                delayed: false // 默认3000ms后自动取消
            })
        }
    },
    watch: {

    },
    computed: {
        computedList: function () {
          return this.list.filter( (item) => {
            return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
          })
        }
    }
}

</script>
<style lang="scss">
@import './../src/style/reset.css';

body {
    margin: 0;
    min-height: 100vh;
    font-size: 24px;
    background:
        linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
        linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
        linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
        linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
}

#demo {
    text-align: center;
    font-size: 24px;
    >div {
        display: inline-block;
    }
    input {
        font-size: 24px;
        background: #fff;
    }
}

</style>
