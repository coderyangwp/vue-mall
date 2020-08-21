import {request} from './request.js'

export function getMultidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getGoods(type,page){
  return request({
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  })
}
