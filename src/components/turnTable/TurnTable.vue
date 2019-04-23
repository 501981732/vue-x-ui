<template>
    <div class='turntable-container'>
        <div class='turntable-box' ref='wheelImg'>
            <img :src='wheelImg' alt='wheel' />
        </div>
        <div class='turntable-btn'>
            <img :src='arrowImg' alt='arrow' @click='handleTurn' />
        </div>
    </div>
</template>
<script>
import * as utils from './../../utils/utils'
export default {
    name: 'turnTable',
    components: {},
    data() {
        return {
            isRunning: false, //是否正在转
            awardI: 0, //中奖index
        }
    },
    props: {
        wheelImg: {
            type: String,
            required: true,
            default: ''
        },
        arrowImg: {
            type: String,
            required: true,
            default: ''
        },
        config: {
            type: Object,
            default: () => {}
        },
        awardIndex: {
            type: [Number, String],
            default: 0
        }
    },
    mounted() {
        const wheel = this.$refs.wheelImg
        wheel.addEventListener(utils.transitionEvent, () => {
            setTimeout(() => {
                this.isRunning = false
                this.$emit('done', this.awardI)
            }, 300)
        });
    },
    methods: {
        handleTurn() {
            this.$emit('handleTurn')
        },
        start(index) {
            if (this.isRunning) return //正在转动
            this.init()
            this.isRunning = true
            this.awardI = index || this.awardIndex
            const wheel = this.$refs.wheelImg
            const { total, maxTurn, duration } = this.config
            const unitDeg = 360 / total;
            const deg = maxTurn * 360 - (this.awardI - 0.5) * unitDeg
            // requestAnimationFrame(()=> {
            //     wheel.style.transform = `rotateZ(${deg}deg)`
            //     wheel.style.transition = `transform ${duration}s cubic-bezier(0.785, 0.135, 0.15, 0.86)`
            // })
            setTimeout(() => {
                wheel.style.transform = `rotateZ(${deg}deg)`
                wheel.style.transition = `transform ${duration}s cubic-bezier(0.785, 0.135, 0.15, 0.86)`
            }, 0)
        },
        init() {
            const wheel = this.$refs.wheelImg
            wheel.style.transform = `rotateZ(0deg)`
            wheel.style.transition = `none`;
        }
    },
    watch: {

    },
    computed: {

    }
}
</script>
<style lang='scss' >
.turntable-container {
    width: 600px;
    height: 600px;
    position: relative;

    .turntable-box {
        position: absolute;
        height: 100%;
        width: 100%;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .turntable-btn {
        width: 160px;
        height: 200px;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);

        img {
            height: 100%;
            width: 100%;
        }
    }
}

</style>
