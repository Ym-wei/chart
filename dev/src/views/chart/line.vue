<template>
  <div>
    <line-1/>
    <line-2/>
    <line-3/>
    <line-4/>
    <line-5/>
    <line-6/>
  </div>
</template>

<script>
  export default {
    name: 'line',
    components: {
      line1: () => import(/* webpackChunkName: "line" */ '@/components/line/line1'),
      line2: () => import(/* webpackChunkName: "line" */ '@/components/line/line2'),
      line3: () => import(/* webpackChunkName: "line" */ '@/components/line/line3'),
      line4: () => import(/* webpackChunkName: "line" */ '@/components/line/line4'),
      line5: () => import(/* webpackChunkName: "line" */ '@/components/line/line5'),
      line6: () => import(/* webpackChunkName: "line" */ '@/components/line/line6')
    },
    props: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss">
  .echart {
    width: 900px;
    height: 600px;
    margin-bottom: 30px;
  }
</style>
