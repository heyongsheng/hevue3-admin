import request from '@/utils/request'

// 员工登录
export function login(data: any): any {
  return Promise.resolve({
    code: 200,
    data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBhZTMwODNmNGI0MjQ5OGY3YmVlZjIiLCJpYXQiOjE2ODIwMDY2ODgsImV4cCI6MTY4MjE3OTQ4OH0.ODAgKM8LqSFerOpLN0PlU60DCBMHCpC8t2XJu8GU9JE',
    msg: 'success',
  })
}

// 添加员工
export function createStaff(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 更新员工信息
export function updateStaff(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取员工信息
export function getStaffInfo(): any {
  return Promise.resolve({
    code: 200,
    msg: 'success',
    data: {
      _id: '640ae3083f4b42498f7beef2',
      __v: 0,
      createdAt: '2022-11-14T07:42:52.076Z',
      gender: '1',
      staff_account: 'admin',
      staff_name: 'admin',
      status: '1',
      updatedAt: '2023-04-06T11:53:02.553Z',
      phone: '16655559999',
      roleId: '6416ebbc207e76b41336538e',
    },
  })
}
// 修改密码
export function updatePassword(data: {
  phone: string
  uuid: string
  captcha: string
  password: string
}): Promise<Object> {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取员工列表
export function getStaffList(query: any): any {
  return Promise.resolve({
    code: 200,
    data: {
      list: [
        {
          _id: '640ae3083f4b42498f7beef2',
          __v: 0,
          createdAt: '2022-11-14T07:42:52.076Z',
          gender: '1',
          staff_account: 'admin',
          staff_name: 'admin',
          status: '1',
          updatedAt: '2023-04-06T11:53:02.553Z',
          phone: '16655559999',
          roleId: '6416ebbc207e76b41336538e',
        },
        {
          _id: '6414234dd9611d9e7fe1e228',
          staff_account: '666',
          staff_name: '张三',
          gender: '1',
          phone: '13855556666',
          status: '2',
          createdAt: '2023-03-17T08:22:37.826Z',
          updatedAt: '2023-04-06T13:36:21.878Z',
          __v: 0,
          roleId: '641c45ee763ac1abc5df234d',
        },
        {
          _id: '64142a770d99bb664962325c',
          staff_account: '777',
          staff_name: '李四',
          gender: '1',
          phone: '19968774958',
          status: '1',
          createdAt: '2023-03-17T08:53:11.557Z',
          updatedAt: '2023-04-06T13:34:04.975Z',
          __v: 0,
          roleId: '641c45ee763ac1abc5df234d',
        },
        {
          _id: '64146e320d99bb66496232c2',
          staff_account: '888',
          staff_name: '王五',
          gender: '2',
          phone: '16655553333',
          status: '1',
          createdAt: '2023-03-17T13:42:10.258Z',
          updatedAt: '2023-04-03T14:27:59.206Z',
          __v: 0,
          roleId: '641c45ee763ac1abc5df234d',
        },
      ],
      total: 4,
    },
    msg: 'success',
  })
}

// 修改员工状态
export function updateStaffStatus(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}
