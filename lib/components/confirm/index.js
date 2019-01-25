/**
 *  @file Confirm 插件
 * @example
 *   this.$x.confirm({
 *      title:'提示1',
 *       body: '1',
 *       cancleText: '取消',
 *       confirmText: '确定',
 *       btnReverse: false, //按钮是否反正
 *       useHTMLString: 'false' //是否使用动态HTML插入
 *   }).then(res => {
 *       console.log(res)     //根据res判断是取消还是确定
 *   })
 */
import Vue from 'vue';
import Confirm from './Confirm.vue';

var defaultProps = {};

var plugin = {
    install: function install(vue) {
        var _this = this;

        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var ConfirmPlugin = vue.extend(Confirm);
        var $vm = new ConfirmPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);

        function confirm(options) {
            if ($vm.show) return;

            if (typeof options === 'string') {
                options = {
                    body: arguments[0]
                };
            }

            $vm = Object.assign($vm, defaultProps, props, options);

            $vm.show = true;

            return new Promise(function (resolve, reject) {
                $vm.$on('confirm', function (_) {
                    resolve(true);
                });

                $vm.$on('cancle', function (_) {
                    resolve(false);
                });
            });
        }

        if (!vue.$x) {
            vue.$x = {
                confirm: confirm
            };
        } else {
            vue.$x.confirm = confirm;
        }
        vue.mixin({
            created: function created(_) {
                _this.$x = vue.$x;
            }
        });
    }
};
export default plugin;