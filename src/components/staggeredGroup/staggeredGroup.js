import '@an/velocity.min.js'
import '@an/velocity.ui.min.js'
import Vue from 'Vue'
/**
 * usesage
<staggered-group>
    <div v-for="(item, index) in computedList" :key="item.msg" :data-index="index" :height='20px'>{{ item.msg }}</div>
</staggered-group>
 */
export default {
    functional: true,
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
                    let height = el.dataset.height
                    let delay = el.dataset.index * 150
                    setTimeout(() => {
                        Velocity(
                            el, { opacity: 1, height }, { complete: done }
                        )
                    }, delay)
                },
                leave: function(el, done) {
                    let delay = el.dataset.index * 150
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
