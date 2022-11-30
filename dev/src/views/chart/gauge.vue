<template>
  <div>
    <gauge-1/>
  </div>
</template>

<script>
  export default {
    components: {
      gauge1: () => import(/* webpackChunkName: "pie2" */ '@/components/gauge/gauge1')

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
