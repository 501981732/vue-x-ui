import 'velocity-animate/velocity.min.js';
// import 'velocity-animate/velocity.ui.min.js'
import Vue from 'Vue';
/**
 * usesage
<staggered-group>
    <div v-for="(item, index) in computedList" :key="item.msg" :data-index="index" :height='20px'>{{ item.msg }}</div>
</staggered-group>
 */
export default {
    functional: true,
    render: function render(createElement, context) {
        var data = {
            props: {
                name: 'staggered-fade',
                mode: 'out-in'
                // h: '50px',
            },
            attrs: {
                appear: true,
                tag: 'div'
            },
            on: {
                beforeEnter: function beforeEnter(el) {
                    el.style.opacity = 0;
                    el.style.height = 0;
                },
                enter: function enter(el, done) {
                    var dataset = el.dataset;
                    var height = dataset.height;
                    var delay = dataset.index * dataset.delay;
                    setTimeout(function () {
                        Velocity(el, { opacity: 1, height: height }, { complete: done });
                    }, delay);
                },
                leave: function leave(el, done) {
                    var dataset = el.dataset;
                    var delay = dataset.index * dataset.delay;
                    setTimeout(function () {
                        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
                    }, delay);
                }
            }
        };
        return createElement('transition-group', data, context.children);
    }
};