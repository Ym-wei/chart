<template>
  <div>
    <div v-for="index in chartNumber" :key="index">
      <div>图表 {{ index +1 }}</div>
      <components :is="`pie${index+1}`"></components>
    </div>
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
      pie10: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie10'),
      pie11: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie11'),
      pie12: () => import(/* webpackChunkName: "pie" */ '@/components/pie/pie12')
    },
    props: {},
    data() {
      return {
        chartNumber: 11
      }
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
