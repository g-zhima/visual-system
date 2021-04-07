<template>
  <div>
    <div ref="charts" class="charts-container"/>
  </div>
</template>

<script>
// import { onMounted, reactive } from '@vue/composition-api'
import * as echarts from 'echarts/core'
import {
  GridComponent
} from 'echarts/components'
import {
  BarChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [GridComponent, BarChart, CanvasRenderer]
)

export default {
  name: 'Index',
  data () {
    return {
      charts: ''
    }
  },
  mounted () {
    this.initCharts()
  },
  methods: {
    initCharts () {
      this.charts = echarts.init(this.$refs.charts)
      this.setOptions()
    },
    setOptions () {
      this.charts.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style scoped>
.charts-container {
  width: 700px;
  height: 500px;
}
</style>
