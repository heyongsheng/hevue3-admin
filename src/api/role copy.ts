import request from '@/utils/request'

// 添加角色
export function createRole(data: any): any {
  return request({
    url: '/role/createRole',
    method: 'post',
    data
  })
}

// 更新角色信息
export function updateRole(data: any): any {
  return request({
    url: '/role/updateRole',
    method: 'post',
    data
  })
}

// 获取角色信息
export function getRoleInfo(): any {
  return request({
    url: '/role/getRoleInfo',
    method: 'get'
  })
}

// 获取角色列表
export function getRoleList(query: any): any {
  return request({
    url: '/role/getRoleList',
    method: 'get',
    params: query
  })
}

// 删除角色
export function deleteRole(data: any): any {
  return request({
    url: '/role/deleteRole',
    method: 'post',
    data
  })
}

// 获取登录者所属角色的权限
export function getRolePermission(): any {
  return request({
    url: '/role/getRolePermission',
    method: 'get'
  })
}
