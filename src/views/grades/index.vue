<template>
  <div class="page-container">
    <el-tabs v-model="activeTab" type="card" @tab-click="changeTab">
      <el-tab-pane label="全校成绩" name="all"><All/></el-tab-pane>
      <el-tab-pane label="系部成绩" name="Department">系部成绩</el-tab-pane>
      <el-tab-pane label="年级成绩" name="grade">年级成绩</el-tab-pane>
      <el-tab-pane label="班级成绩" name="class">班级成绩</el-tab-pane>
      <el-tab-pane label="个人成绩" name="student"><Student/></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import All from '@/views/grades/all'
import Student from '@/views/grades/student'

export default {
  components: {
    All,
    Student
  },
  data () {
    return {
      activeTab: 'all'
    }
  },
  methods: {
    changeTab (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.page-container {
  padding: 30px;
}
</style>
