import request from '@/utils/request'

export function getDetail (params) {
  return request({
    url: '/test/detail',
    method: 'get',
    params
  })
}
