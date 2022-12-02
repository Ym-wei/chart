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
  const lineColorList = [
    { top: '#fccb05', bottom: '#f5804d' },
    { top: '#8bd46e', bottom: '#09bcb7' },
    { top: '#248ff7', bottom: '#6851f1' },
    { top: '#D30DCE', bottom: '#480548' }
  ]

  const propsOptions = [
    {
      name: '2021',
      data: [
        { name: '绿色办公', value: '400' },
        { name: '教育培训', value: '310' },
        { name: '医疗养老', value: '650' },
        { name: '酒店公寓', value: '800' }
      ]
    },
    {
      name: '2022',
      data: [
        { name: '绿色办公', value: '500' },
        { name: '教育培训', value: '410' },
        { name: '医疗养老', value: '750' },
        { name: '酒店公寓', value: '900' }
      ]
    }
  ]
  export default {
    name: 'pie',
    mixins: [ChartM],
    computed: {
      nameList() {
        const { data = [] } = propsOptions[0] || {}
        return data.map(item => item.name)
      },
      chartsOption() {
        var option = {
          backgroundColor: '#323a5e',
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '2%',
            right: '4%',
            bottom: '5%',
            top: '10%',
            containLabel: true
          },
          legend: {
            data: propsOptions.map(item => item.name),
            right: 10,
            top: 12,
            textStyle: {
              color: '#fff'
            },
            itemWidth: 12,
            itemHeight: 10
            // itemGap: 35
          },
          xAxis: {
            type: 'category',
            data: this.nameList,
            axisLine: {
              lineStyle: {
                color: 'white'

              }
            },
            axisLabel: {
              // interval: 0,
              // rotate: 40,
              textStyle: {
                fontFamily: 'Microsoft YaHei'
              }
            }
          },

          yAxis: {
            type: 'value',
            name: '万元',
            max: '1200',
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)'
              }
            },
            axisLabel: {}
          },
          series: propsOptions.map((item, index) => {
            const { name, data } = item
            return {
              name,
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: lineColorList[index].top
                  }, {
                    offset: 1,
                    color: lineColorList[index].bottom
                  }]),
                  barBorderRadius: 12
                }
              },
              data: data.map(({ value }) => value)
            }
          })
        }
        return option
      }
    }
  }
</script>
