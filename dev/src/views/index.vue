<template>
  <div>
    <div class="type-item" @click="jump({ type: 'pikpak' })">Pikpak1</div>
    <div
      v-for="(item, index) in chartTypeList"
      :key="index"
      class="type-item"
      @click="jump(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'index',
    props: {},
    data() {
      return {
        chartTypeList: [
          {
            type: 'line',
            name: '折线图'
          },
          {
            type: 'pie',
            name: '柱状图'
          },
          {
            type: 'pie2',
            name: '饼图'
          },
          {
            type: 'gauge',
            name: '仪表盘'
          }
        ]
      }
    },
    methods: {
      jump({ type }) {
        this.$router.push({
          path: `/${type}`
        })
      }
    }
  }
</script>

<style lang="scss">
.type-item {
  width: 80%;
  height: 50px;
  background-color: #3A55B5;
  color: #fff;
  border-radius: 5px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
