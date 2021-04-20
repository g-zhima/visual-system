<template>
  <div class="page-container">
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="展示图表" name="chart">
        <div class="chart-container">
          <v-chart class="chart" :option="option" autoresize/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="添加数据" name="table">
        <div class="form-container">

        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { onMounted, reactive } from '@vue/composition-api'
import VChart, { THEME_KEY } from 'vue-echarts'
import { getDetail } from '@/api/test'

export default {
  name: 'Index',
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: 'light'
  },
  data () {
    return {
      activeTab: 'chart',
      option: {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '0',
          right: '3%',
          bottom: '0',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  mounted () {
    getDetail({ id: 1234 }).then(res => {
      console.log(res)
    })
  },
  methods: {
    handleClick (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.page-container {
  padding: 30px;
}

.chart-container {
  height: 600px;
}

.form-container {

}
</style>
