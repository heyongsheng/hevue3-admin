import request from '@/utils/request'

// 员工登录
export function login(data: any): any {
  return request({
    url: '/staff/login',
    method: 'post',
    data,
  })
}

// 添加员工
export function createStaff(data: any): any {
  return request({
    url: '/staff/createStaff',
    method: 'post',
    data,
  })
}

// 更新员工信息
export function updateStaff(data: any): any {
  return request({
    url: '/staff/updateStaff',
    method: 'post',
    data,
  })
}
// 获取员工信息
export function getStaffInfo(): any {
  return request({
    url: '/staff/getStaffInfo',
    method: 'get',
  })
}
// 修改密码
export function updatePassword(data: {
  phone: string
  uuid: string
  captcha: string
  password: string
}): Promise<Object> {
  return request({
    url: '/staff/updateStaffPassword',
    method: 'post',
    data,
  })
}

// 获取员工列表
export function getStaffList(query: any): any {
  return request({
    url: '/staff/getStaffList',
    method: 'get',
    params: query,
  })
}

// 修改员工状态
export function updateStaffStatus(data: any): any {
  return request({
    url: '/staff/updateStaffStatus',
    method: 'post',
    data,
  })
}
