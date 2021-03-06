import 'velocity-animate/velocity.min.js'
// import 'velocity-animate/velocity.ui.min.js'
import Vue from 'Vue'
/**
 * usesage
<staggered-group>
    <div v-for="(item, index) in computedList" :key="item.msg" :data-index="index" :height='20px'>{{ item.msg }}</div>
</staggered-group>
 */
export default {
    functional: true,
    name:'staggered-group',
    render: function(createElement, context) {
        var data = {
            props: {
                name: 'staggered-fade',
                mode: 'out-in',
                // h: '50px',
            },
            attrs: {
                appear: true,
                tag: 'div',
            },
            on: {
                beforeEnter: (el) => {
                    el.style.opacity = 0
                    el.style.height = 0
                },
                enter: (el, done) => {
                    const dataset = el.dataset
                    const height = dataset.height
                    const delay = dataset.index * dataset.delay
                    setTimeout(() => {
                        Velocity(
                            el, { opacity: 1, height }, { complete: done }
                        )
                    }, delay)
                },
                leave: function(el, done) {
                    const dataset = el.dataset
                    const delay = dataset.index * dataset.delay
                    setTimeout(function() {
                        Velocity(
                            el, { opacity: 0, height: 0 }, { complete: done }
                        )
                    }, delay)
                }
            }
        }
        return createElement('transition-group', data, context.children)
    }
}
