<template>
  <div>
    <EChart
      :options="chartsOption"
      class="echart"
    ></EChart>
  </div>
</template>

<script>

  import ChartM from '@/mixins/echart-mixins'
  import echarts from 'echarts/lib/export'
  export default {
    name: 'pie',
    mixins: [ChartM],
    computed: {
      chartsOption() {
        var xData2 = ['南越天辰弃土场', '重庆东站弃土场', '五星村弃土场']
        var data1 = [250, 100, 130]
        var data2 = [400, 200, 300]
        var barWidth = 30
        const option = {
          backgroundColor: '#021132',
          tooltip: {
            trigger: 'item'
          },
          grid: {
            left: 100,
            bottom: 100
          },
          xAxis: {
            data: xData2,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#fff',
                fontSize: 16
              },
              margin: 26 // 刻度标签与轴线之间的距离。
            }
          },
          yAxis: {
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 16
              }
            }
          },
          series: [{ // 上半截柱子
                     name: '2019',
                     type: 'bar',
                     barWidth: barWidth,
                     barGap: '-100%',
                     z: 0,
                     itemStyle: {
                       color: '#163F7A',
                       opacity: 0.7
                     },
                     data: data2
                   },
                   { // 下半截柱子
                     name: '2020',
                     type: 'bar',
                     barWidth: barWidth,
                     barGap: '-100%',
                     itemStyle: { // lenged文本
                       opacity: 0.7,
                       color: function(params) {
                         return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#FF9A22' // 0% 处的颜色
                         }, {
                           offset: 1,
                           color: '#FFD56E' // 100% 处的颜色
                         }], false)
                       }
                     },
                     data: data1
                   },
                   { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
                     type: 'bar',
                     barWidth: barWidth,
                     barGap: '-100%',
                     stack: '广告',
                     itemStyle: {
                       color: 'transparent'
                     },
                     data: data1
                   },
                   { // 上半截柱子顶部圆片
                     name: '',
                     type: 'pictorialBar',
                     symbolSize: [barWidth, 15],
                     symbolOffset: [0, -5],
                     z: 12,
                     symbolPosition: 'end',
                     itemStyle: {
                       color: '#163F7A',
                       opacity: 1
                     },
                     label: {
                       show: true,
                       position: 'top',
                       fontSize: 16,
                       color: '#fff'
                     },
                     data: data2
                   },
                   { // 下半截柱子顶部圆片
                     name: '',
                     type: 'pictorialBar',
                     symbolSize: [barWidth, 15],
                     symbolOffset: [0, -10],
                     z: 12,
                     itemStyle: {
                       opacity: 1,
                       color: function(params) {
                         return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#FF9A22' // 0% 处的颜色
                         }, {
                           offset: 1,
                           color: '#FFD56E' // 100% 处的颜色
                         }], false)
                       }
                     },
                     label: {
                       show: true,
                       position: 'top',
                       fontSize: 16,
                       color: '#fff'
                       // formatter:(item)=>{
                       //     console.log(item)
                       //     return 'ssss'
                       // }
                     },
                     symbolPosition: 'end',
                     data: data1
                   },
                   { // 下半截柱子底部圆片
                     name: '',
                     type: 'pictorialBar',
                     symbolSize: [barWidth, 15],
                     symbolOffset: [0, 5],
                     z: 12,
                     itemStyle: {
                       opacity: 1,
                       color: function(params) {
                         return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#FF9A22' // 0% 处的颜色
                         }, {
                           offset: 1,
                           color: '#FFD56E' // 100% 处的颜色
                         }], false)
                       }
                     },
                     data: [1, 1, 1, 1, 1]
                   },
                   {
                     name: '第一圈',
                     type: 'pictorialBar',
                     symbolSize: [47, 16],
                     symbolOffset: [0, 11],
                     z: 11,
                     itemStyle: {
                       normal: {
                         color: 'transparent',
                         borderColor: '#3ACDC5',
                         borderWidth: 2
                       }
                     },
                     data: [1, 1, 1, 1, 1]
                   }, {
                     name: '第二圈',
                     type: 'pictorialBar',
                     symbolSize: [62, 22],
                     symbolOffset: [0, 17],
                     z: 10,
                     itemStyle: {
                       normal: {
                         color: 'transparent',
                         borderColor: '#02c3f1',
                         borderWidth: 2
                       }
                     },
                     data: [1, 1, 1, 1, 1]
                   }
          ]
        }
        return option
      }
    },
    methods: {}
  }
</script>

<style lang="scss">

</style>
