<template>
  <div class="container">
    <el-cascader :options="cascadeData" :show-all-levels="false" placeholder="请选择专业" style="margin-bottom: 10px;"/>
    <div class="chart-container">
      <v-chart class="chart" :option="option1" autoresize/>
    </div>
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
  },
  data () {
    return {
      option1: {
        title: {
          text: '各班级平均成绩'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          // data: ['高等数学A1', '复变函数与积分变化', '概率论', '工程制图']
          data: ['1720221', '1720222', '1720223']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        xAxis: {
          type: 'category',
          // data: ['1720221', '1720222', '1720223'],
          data: ['高等数学A1', '复变函数与积分变化', '概率论', '工程制图', '线性代数', '英语']
        },
        series: [
          {
            name: '1720221',
            type: 'bar',
            data: [76, 87, 89, 94, 76, 80]
          },
          {
            name: '1720222',
            type: 'bar',
            data: [89, 80, 91, 93, 74, 81]
          },
          {
            name: '1720223',
            type: 'bar',
            data: [78, 88, 90, 90, 72, 76]
          }
        ]
      },
      cascadeData: [
        {
          value: '01',
          label: '机械工程系',
          children: []
        },
        {
          value: '02',
          label: '电子工程系',
          children: [
            {
              value: '01',
              label: '物联网工程专业'
            },
            {
              value: '02',
              label: '测控技术与仪器专业'
            },
            {
              value: '03',
              label: '通信工程专业'
            },
            {
              value: '04',
              label: '电子信息工程专业'
            }
          ]
        },
        {
          value: '03',
          label: '自动化系',
          children: []
        },
        {
          value: '04',
          label: '化学与化工系',
          children: []
        },
        {
          value: '05',
          label: '体育系',
          children: []
        },
        {
          value: '06',
          label: '外语系',
          children: []
        }
      ]
    }
  }
}
</script>

<style scoped>
.chart-container {
  height: 300px;
}
</style>
