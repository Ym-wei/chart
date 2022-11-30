<template>
  <div>
    <pie-1/>
    <pie-2/>
    <pie-3/>
    <pie-4/>
    <pie-5/>
    <pie-6/>
    <pie-7/>
    <pie-8/>
  </div>
</template>

<script>
  export default {
    components: {
      pie1: () => import(/* webpackChunkName: "pie2" */ '@/components/pie2/pie1'),
      pie2: () => import(/* webpackChunkName: "pie2" */ '@/components/pie2/pie2'),
      pie3: () => import(/* webpackChunkName: "pie2" */ '@/components/pie2/pie3'),
      pie4: () => import(/* webpackChunkName: "pie2" */ '@/components/pie2/pie4'),
      pie5: () => import(/* webpackChunkName: "pie2" */ '@/components/pie2/pie5'),
      pie6: () => import(/* webpackChunkName: "pie2" */ '@/components/pie2/pie6'),
      pie7: () => import(/* webpackChunkName: "pie2" */ '@/components/pie2/pie7'),
      pie8: () => import(/* webpackChunkName: "pie2" */ '@/components/pie2/pie8')
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
