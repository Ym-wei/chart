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
        var xdata = ['苏州市', '无锡市', '南京市']
        var data = [70, 60, 80]
        var maxArr = [100, 100, 100]
        const option = {
          backgroundColor: 'rgba(5,39,58,1)', // 背景色
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            // borderRadius: 5,
            // borderColor: "#6baab2",
            // borderWidth: 1,
            formatter: function(params) { // params[0].data.nameCode
              // const dot = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>'
              return (
                params[0].name +
                '<br>' +
                '杆塔数量 ：' +
                params[0].value
              )
            }
          },
          grid: {
            left: '4%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
          },
          xAxis: {
            data: xdata,
            triggerEvent: true,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              rotate: 0,
              interval: 0,
              textStyle: {
                padding: [14, 0, 0, 0],
                fontSize: 14,
                color: 'rgba(255,255,255,1)'
              }
            }
          },
          yAxis: {
            name: '单位：个数',
            triggerEvent: true,
            nameTextStyle: {
              color: 'rgba(255,255,255,1)',
              fontSize: 16,
              padding: [0, 0, 10, -20]
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: 'rgb(148,159,167)',
                fontSize: 16
              }
            }
          },
          // color: ["#e54035"],
          series: [{
                     name: '数量',
                     barMinHeight: 10,
                     type: 'pictorialBar',
                     barCategoryGap: '60%',
                     // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
                     symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                     itemStyle: {
                       normal: {
                         // barBorderRadius: 5,
                         // 渐变色
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                                  offset: 0,
                                                                                  color: '#01EAED'
                                                                                },
                                                                                {
                                                                                  offset: 0.5,
                                                                                  color: '#02C4DD'
                                                                                },
                                                                                {
                                                                                  offset: 1,
                                                                                  color: '#029ED9'
                                                                                }
                         ])
                       }
                     },
                     label: {
                       normal: {
                         show: true,
                         position: 'top',
                         textStyle: {
                           color: '#fff',
                           fontSize: 20
                         }
                       }
                     },
                     data: data,
                     z: 10
                   },
                   {
                     name: 'hill',
                     type: 'bar',
                     barWidth: '20%',
                     symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                     itemStyle: {
                       normal: {
                         color: 'rgba(11,47,68,.8)'
                       }
                     },
                     data: maxArr,
                     z: 9
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
