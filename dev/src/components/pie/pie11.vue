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

  const icon = 'path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z'
  const symbol = 'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z'
  const nameList = [
    '广州分公司',
    '福建公司',
    '武汉公司',
    '重庆公司',
    '广州分公司1',
    '福建公司1',
    '武汉公司1',
    '重庆公司1'
  ]
  // 销售额
  const data1 = [1250, 400, 500, 700, 1250, 400, 500, 700]
  // 目标
  const data2 = [1000, 800, 800, 600, 1000, 800, 800, 600]

  export default {
    name: 'pie',
    mixins: [ChartM],
    computed: {
      chartsOption() {
        const option = {
          backgroundColor: '#031d33',
          legend: {
            top: '20',
            x: 'center',
            textStyle: {
              fontSize: 16,
              color: 'rgba(101, 213, 255, 1)'
            },
            icon,
            itemWidth: 8, // 设置宽度
            itemHeight: 8, // 设置高度、
            itemGap: 12 // 设置间距
          },
          tooltip: {
            show: true,
            trigger: 'axis', // axis , item
            backgroundColor: 'RGBA(0, 49, 85, 1)',
            borderColor: 'rgba(0, 151, 251, 1)',
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
              color: '#BCE9FC',
              fontSize: 14,
              align: 'left'
            },
            formatter: arr => {
              const [val1 = {}, val2 = {}] = arr
              const { seriesName, value } = val1
              const { seriesName: _seriesName, value: _value } = val2
              if (seriesName && _seriesName) {
                const percentage = (value / _value * 100).toFixed(2)
                return `
                ${seriesName}: ${value}万
                <br />
                ${_seriesName}: ${_value}万
                 <br />
                 完成率: ${percentage}%
                `
              }
              if (seriesName) {
                return `${seriesName}: ${value}万`
              }
              if (_seriesName) {
                return `${_seriesName}: ${_value}万`
              }
            }
          },
          grid: {
            right: '5%',
            top: '10%',
            left: '5%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: {
            name: '',
            nameTextStyle: {
              color: '#65d5ff'
            },
            type: 'category',
            boundaryGap: true,
            data: nameList,
            axisLabel: {
              // 坐标轴刻度标签的相关设置。
              interval: 0, // 设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: '#65D5FF',
                fontStyle: 'normal',
                fontSize: 12
              }
            },
            axisTick: {
              // 坐标轴刻度相关设置。
              show: false
            },
            axisLine: {
              // 坐标轴轴线相关设置
              lineStyle: {
                color: 'rgba(77, 128, 254, 0.2)'
              }
            },
            splitLine: {
              // 坐标轴在 grid 区域中的分隔线。
              show: true,
              lineStyle: {
                color: 'rgba(77, 128, 254, 0.2)'
              }
            }
          },

          yAxis: [
            {
              name: '万',
              max: this.getMax(),
              nameTextStyle: {
                color: '#65d5ff'
              },
              type: 'value',
              splitNumber: 3,
              axisLabel: {
                textStyle: {
                  color: '#65D5FF',
                  fontStyle: 'normal',
                  fontSize: 12
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(77, 128, 254, 0.2)'
                }
              }
            },
            {
              type: 'value',
              name: '万',
              max: this.getMax(),
              nameTextStyle: {
                color: '#65d5ff'
              },
              min: 0,
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#233653'
                }
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#233653'
                }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#78bdf5'
                }

              },
              axisTick: {
                show: false
              }
            }
          ],
          series: [
            {
              name: '销售额',
              type: 'pictorialBar',
              barWidth: '50%',
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(48, 236, 166,0.8)' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(0, 34, 66, 0.5)' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  } // 渐变颜色
                }
              },
              symbol,
              data: data1
            },
            {
              name: '目标值',
              type: 'line',
              data: data2,
              // smooth: true, // 圆滑线条
              symbol: 'none',
              lineStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 227, 168, 0.3)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(255, 227, 168, 1)'
                  }, {
                    offset: 1,
                    color: 'rgba(255, 227, 168, 0.3)'
                  }]),
                  shadowColor: 'rgba(255, 120, 0,1)',
                  shadowBlur: 10
                }
              },
              yAxisIndex: 1
            }
          ]
        }
        return option
      }
    },
    methods: {
      getMax() {
        const max = Math.max(...data1.concat(data2))
        return Math.ceil(max + max * 0.05)
      }
    }
  }
</script>

<style lang="scss">

</style>
