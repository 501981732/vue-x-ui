### useage:

```js
// arrowImg:中奖箭头图片
// wheelImg: 转盘图片
// config: 配置项
// handleTurn: 手动触发转动
// done： 转动结束后emit index
    <turn-table
        :arrowImg='arrowImg'
        :wheelImg='wheelImg'
        :config='turnTableConfig'
        @handleTurn='handleBefore'
        @done='turnDone'
        ref='turnTable'
    </turn-table>
    ...

    data() {
        return {
            turnTableConfig: {
                total: 9, //一共奖品数量
                maxTurn: 10, //转的圈数
                duration: 3 //持续时间 s
                //awardId: 1 //中奖第几个，应该异步返回
            },
            awardId: 0,
        }
    }，
    method: {
        <!-- 由于得奖通常都是RD给我们数据，所以这里需要异步请求之后 手动去调用转动 -->
        async handleBefore() {
                ({
                    data: {
                        awardId: this.awardId,
                    }
                } = await this.$api.lotteryDraw()),
        this.$refs.turnTable.start(prizeInfo.get(awardId).index) // awardId对应的index
        }
        <!-- 当转盘转动结束后，会延迟300ms触发 -->
        turnDone(index) {
            console.log(index)
        },
    }
```
