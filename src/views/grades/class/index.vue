<template>
  <div>
    123
  </div>
</template>

<script>
import VChart, { THEME_KEY } from 'vue-echarts'

export default {
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: 'light'
  }
}
</script>

<style scoped>

</style>
