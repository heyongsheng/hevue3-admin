import request from '@/utils/request'

// 新建菜单
export function createMenu(data: any): any {
  return request({
    url: '/menu/createMenu',
    method: 'post',
    data
  })
}

// 修改菜单
export function updateMenu(data: any): any {
  return request({
    url: '/menu/updateMenu',
    method: 'post',
    data
  })
}

// 删除菜单
export function deleteMenu(data: any): any {
  return request({
    url: '/menu/deleteMenu',
    method: 'post',
    data
  })
}

// 获取菜单列表
export function getMenuList(): any {
  return request({
    url: '/menu/getMenuList',
    method: 'get'
  })
}
