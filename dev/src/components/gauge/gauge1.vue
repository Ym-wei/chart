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
  const ECharts = require('echarts')

  const configCenter = {
    1: ['50%'],
    2: ['26%', '73%'],
    3: ['16.75%', '50%', '82.75%']
  }
  const configRadius = {
    // 外圈,内圈,刻度
    1: ['80%', '72%', '60%'],
    2: ['65%', '55%', '45%'],
    3: ['65%', '57%', '60%']
  }
  const configFontSize = {
    1: 20,
    2: 30,
    3: 12
  }
  const chartNum = 2

  const propData = [
    {
      name: '本月销售业绩',
      value: 652.68,
      target: 600
    },
    {
      name: '年度销售业绩',
      value: 7890.16,
      target: 12000
    }
  ]
  export default {
    name: 'gauge1',
    mixins: [ChartM],
    computed: {
      series() {
        const series = []
        const baseSeries = {
          type: 'gauge',
          startAngle: 220,
          endAngle: -40,
          min: 0,
          max: 1000,
          splitNumber: chartNum === 3 ? 2 : 6, // 刻度数量 三个图形刻度少一点
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          // 刻度数值
          axisLabel: {
            show: false
          },
          // 仪表盘指针
          pointer: {
            show: false
          },
          detail: {
            show: false
          }
        }
        const gradualColorList = [
          {
            offset: 0,
            color: '#0076FF'
          },
          {
            offset: 0.4,
            color: '#00D0B7'
          },
          {
            offset: 0.8,
            color: '#00D0B7'
          },
          {
            offset: 1,
            color: '#0076FF'
          }
        ]
        const linearColor = [[1, new ECharts.graphic.LinearGradient(0, 0, 1, 0, gradualColorList)]]
        propData.forEach((item, index) => {
          const name = item.name
          const center = [configCenter[chartNum][index], '50%']
          baseSeries.max = item.target

          const percentage = (item.value / item.target * 100).toFixed(2)
          const dataName = {
            name: `${item.name}-${percentage}%`,
            value: item.value
          }
          series.push(
            // 外圈
            {
              ...baseSeries,
              name,
              center, // 默认全局居中
              radius: configRadius[chartNum][0],
              clockwise: true,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 3,
                  color: linearColor
                }
              }
            },
            // 内圈
            {
              ...baseSeries,
              name,
              center, // 默认全局居中
              radius: configRadius[chartNum][1], // 大小
              axisLine: {
                // 坐标轴线
                lineStyle: {
                  color: linearColor, // 属性lineStyle控制线条样式
                  width: 12
                }
              },
              pointer: {
                // 分隔线 指针
                show: true,
                length: '70%',
                width: chartNum === 3 ? 5 : chartNum === 2 ? 7 : 10
              },
              itemStyle: {
                color: '#FFA232'
              },
              detail: {
                show: true,
                textStyle: {
                  fontSize: configFontSize[chartNum] + 3
                },
                offsetCenter: [0, '65%'],
                color: '#017DEB',
                formatter: function(value) {
                  return value + '万'
                }
              },
              title: {
                show: true,
                offsetCenter: ['0', '100%'],
                color: [
                  '#017DEB',
                  '#E74781',
                  '#51FFAD',
                  '#30BD30',
                  '#FFC400',
                  '#FF911A',
                  '#FF5660',
                  '#D93914',
                  '#3CE1E1',
                  '#80B560',
                  '#EB5EBD',
                  '#7246DC'
                ],
                fontSize: configFontSize[chartNum]
              },
              data: [dataName]
            },
            // 刻度
            {
              ...baseSeries,
              name,
              center, // 默认全局居中
              radius: configRadius[chartNum][2],
              axisLine: {
                // 坐标轴线
                show: false
              },
              // 刻度
              axisTick: {
                show: true,
                lineStyle: {
                  color: '#C2C2C2',
                  width: 1.2
                },
                length: 4
              },
              // 刻度数值
              axisLabel: {
                show: true,
                // 刻度值位置
                distance: -25,
                formatter: value => parseInt(value),
                textStyle: {
                  color: '#999999',
                  fontSize: 12
                  // fontWeight: 'bold'
                }
              }
            }
          )
        })
        return series
      },
      chartsOption() {
        const option = {
          backgroundColor: '#031d33',
          tooltip: {
            show: true
          },
          series: this.series
        }
        return option
      }
    },
    methods: {}
  }
</script>

<style lang="scss">

</style>
