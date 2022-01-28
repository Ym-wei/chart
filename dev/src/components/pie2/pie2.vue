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
  export default {
    name: 'pie1',
    mixins: [ChartM],
    props: {},
    data() {
      return {}
    },
    computed: {
      chartsOption() {
        var piePatternImg = new Image()
        piePatternImg.src = require('./pie-bg.jpg')
        var bgPatternImg = new Image()
        bgPatternImg.src = require('./bg.png')
        var itemStyle = {
          normal: {
            opacity: 1,
            borderRadius: 10,
            color: {
              image: piePatternImg,
              repeat: 'repeat'
            },
            borderWidth: 3,
            borderColor: '#2a2a34',
            shadowColor: '#FFF',
            shadowBlur: 1,
            shadowOffsetY: 0,
            shadowOffsetX: 0
          }
        }
        const option = {
          backgroundColor: {
            image: bgPatternImg,
            repeat: 'repeat'
          },
          title: [
            {
              text: 'PAPER ELEMENTS',
              x: '20',
              y: '20',
              textStyle: {
                fontSize: '20',
                fontWeight: '100',
                color: '#c795bb',
                textAlign: 'center',
                textShadowColor: '#000',
                textShadowBlur: '1',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1
              }
            },
            {
              text: 'SHAPE OF HEART',
              x: '20',
              y: '45',
              textStyle: {
                fontSize: '24',
                fontWeight: '300',
                color: '#d8a9bd',
                textAlign: 'center',
                textShadowColor: '#000',
                textShadowBlur: '1',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1
              }
            }
          ],
          series: [
            {
              name: 'pie',
              type: 'pie',
              selectedMode: 'single', // multiple
              selectedOffset: 10, // 距离
              label: {
                fontSize: 18,
                color: '#fff'
              },
              labelLine: {
                length: 10,
                length2: 45,
                smooth: true,
                lineStyle: {
                  width: 2
                }
              },
              data: [
                { value: 1024, name: 'A' },
                { value: 689, name: 'B' },
                { value: 602, name: 'C' },
                { value: 501, name: 'D', selected: true },
                { value: 299, name: 'E' }
              ],
              itemStyle: itemStyle
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
