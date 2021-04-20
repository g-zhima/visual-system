module.exports = [
  {
    url: '/test/detail',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: 12
        }
      }
    }
  }
]
