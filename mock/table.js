const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@cname',
    'status|1': ['在线', '下线', 'deleted'],
    'author|1': ['大一', '大二', '大三', '大四'],
    display_time: '@date',
    'pageviews|1': ['电子工程系', '机械工程系', '外语系', '自动化系']
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
