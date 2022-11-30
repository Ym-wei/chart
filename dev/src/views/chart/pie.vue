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
    <pie-9/>
    <pie-10/>
    <pie-11/>
  </div>
</template>

<script>
  export default {
    components: {
      pie1: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie1'),
      pie2: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie2'),
      pie3: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie3'),
      pie4: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie4'),
      pie5: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie5'),
      pie6: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie6'),
      pie7: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie7'),
      pie8: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie8'),
      pie9: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie9'),
      pie11: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie11')
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
