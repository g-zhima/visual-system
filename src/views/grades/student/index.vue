<template>
  <div class="container">
    <div class="header">
      <div class="student-info">
        <div class="info-item">姓名: XXXX</div>
        <el-divider direction="vertical"/>
        <div class="info-item">学号: 172022118</div>
        <el-divider direction="vertical"/>
        <div class="info-item">性别: 男</div>
        <el-divider direction="vertical"/>
        <div class="info-item">年级: 大四</div>
        <el-divider direction="vertical"/>
        <div class="info-item">班级: 1720221</div>
        <el-divider direction="vertical"/>
        <div class="info-item">系部: 电子工程系</div>
        <el-divider direction="vertical"/>
        <div class="info-item">专业: 电子信息工程</div>
      </div>
      <div class="semester-select">
        <el-select v-model="currentSemester" placeholder="请选择学期">
          <el-option
            v-for="item in semester"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="scores-table">
      <el-table :data="scoresData" border size="medium" style="width: 30%">
        <el-table-column
          prop="subject"
          align="center"
          label="科目"
        />
        <el-table-column
          prop="score"
          align="center"
          label="成绩"
        />
        <el-table-column
          prop="mark"
          align="center"
          label="备注"
        />
      </el-table>
      <div class="scores-chart">
        <v-chart class="chart" :option="option3" autoresize/>
      </div>
      <div class="scores-chart">
        <v-chart class="chart" :option="option4" autoresize/>
      </div>
    </div>
    <div class="chart-container">
      <div class="chart-container">
        <v-chart class="chart" :option="option1" autoresize/>
      </div>
      <div class="chart-container">
        <v-chart class="chart" :option="option2" autoresize/>
      </div>
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
      scoresData: [
        {
          subject: '高等数学A1',
          score: 80,
          mark: '-'
        },
        {
          subject: '概率论',
          score: 80,
          mark: '-'
        },
        {
          subject: '复变函数与积分变化',
          score: 80,
          mark: '-'
        },
        {
          subject: '线性代数',
          score: 80,
          mark: '-'
        },
        {
          subject: '数字信号分析',
          score: 80,
          mark: '-'
        },
        {
          subject: '随机信号分析',
          score: 80,
          mark: '-'
        }
      ],
      currentSemester: 1,
      semester: [
        {
          label: '2020-2021学年第一学期',
          value: 1
        },
        {
          label: '2020-2021学年第二学期',
          value: 2
        },
        {
          label: '2019-2020学年第一学期',
          value: 3
        },
        {
          label: '2019-2020学年第二学期',
          value: 4
        }
      ],
      option1: {
        title: {
          text: '平均成绩趋势'
        },
        grid: {
          left: 40
        },
        xAxis: {
          type: 'category',
          data: ['2019-2020', '2019-2020', '2020-2021', '2020-2021']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [90, 80, 70, 73],
          type: 'line'
        }]
      },
      option2: {
        title: {
          text: '专业排名趋势'
        },
        grid: {
          left: 40
        },
        xAxis: {
          type: 'category',
          data: ['2019-2020', '2019-2020', '2020-2021', '2020-2021']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [100, 120, 30, 50],
          type: 'line'
        }]
      },
      option3: {
        title: {
          text: '各科成绩分布',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '所占科目数',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 2, name: '90分以上' },
              { value: 1, name: '80分-90分' },
              { value: 1, name: '70分-80分' },
              { value: 2, name: '60分-70分' },
              { value: 1, name: '60分以下' }
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
      option4: {
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '高等数学A1', max: 100 },
            { name: '概率论', max: 100 },
            { name: '复变函数与积分变换', max: 100 },
            { name: '线性代数', max: 100 },
            { name: '数字信号分析', max: 100 },
            { name: '随机信号分析', max: 100 }
          ]
        },
        series: [{
          name: '预算 vs 开销',
          type: 'radar',
          data: [
            {
              value: [90, 88, 78, 89, 80, 82],
              name: '专业平均'
            },
            {
              value: [89, 78, 99, 67, 80, 67],
              name: '个人成绩'
            }
          ]
        }]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.student-info {
  display: flex;
  font-size: 14px;

}

.scores-table {
  display: flex;
  align-items: center;
  margin-top: 20px;

  .scores-chart {
    width: 35%;
    height: 400px;
  }
}

.chart-container {
  display: flex;
  margin-top: 20px;

  .chart-container {
    width: 50%;
    height: 380px;
  }
}
</style>
