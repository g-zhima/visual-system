<template>
  <div class="container">
    <div class="container1">
      <v-chart class="chart" :option="option1" autoresize/>
    </div>
    <div class="container2">
      <v-chart class="chart" :option="option2" autoresize/>
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
          text: '成绩段分布',
          subtext: '全校',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 300, name: '90分以上' },
              { value: 580, name: '80分-90分' },
              { value: 1048, name: '70分-80分' },
              { value: 735, name: '60分-70分' },
              { value: 484, name: '60分以下' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      option2: {
        title: {
          text: '各系部成绩段分布',
          top: 25,
          left: 180
          // textAlign: 'right'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['60分以下', '60分-70分', '70分-80分', '80分-90分', '90分以上']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['机械工程系', '电子工程系', '自动化系', '计算机系', '材料工程系', '外语系', '体育系']
        },
        series: [
          {
            name: '60分以下',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '60分-70分',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '70分-80分',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '80分-90分',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '90分以上',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.container1 {
  width: 500px;
  height: 500px;
}
.container2 {
  width: 500px;
  height: 500px;
}
</style>
