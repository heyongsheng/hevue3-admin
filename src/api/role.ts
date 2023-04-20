import request from '@/utils/request'

// 添加角色
export function createRole(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 更新角色信息
export function updateRole(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取角色列表
export function getRoleList(query: any): any {
  return Promise.resolve({
    code: 200,
    data: {
      list: [
        {
          _id: '6416ebbc207e76b41336538e',
          role_name: '超级管理员',
          role_code: 'admin',
          createdAt: '2023-03-19T11:02:20.342Z',
          updatedAt: '2023-03-23T07:52:37.658Z',
          __v: 0,
          role_permission: '',
        },
        {
          _id: '641c45ee763ac1abc5df234d',
          role_name: '测试',
          role_permission:
            '641b004f1eebd89ba2e4b4f1,641b027d1eebd89ba2e4b4f7,641bf1bc587cb819a6075f04,6378bc38709df7310c080b8a,6378bd4a709df7310c080b90,6379eab79c420db812549b8b',
          createdAt: '2023-03-23T12:28:30.904Z',
          updatedAt: '2023-03-31T05:04:50.786Z',
          __v: 0,
        },
      ],
      total: 2,
    },
    msg: 'success',
  })
}

// 删除角色
export function deleteRole(data: any): any {
  ElNotification.error({
    title: '错误',
    message: '抱歉，您没有相关权限',
  })
  return Promise.reject({
    code: 500,
    data: '抱歉，您没有相关权限',
  })
}

// 获取登录者所属角色的权限
export function getRolePermission(): any {
  return Promise.resolve({
    code: 200,
    msg: 'success',
    data: {
      menus: [
        {
          _id: '6378bc38709df7310c080b8a',
          __v: 0,
          component: '',
          createdAt: '1970-01-01T11:21:28.207Z',
          hidden: '0',
          icon: 'shezhi02',
          menuType: '1',
          name: 'sysManage',
          parentId: '',
          path: '/sysManage',
          permission: '',
          sort: '0',
          title: '系统设置',
          updatedAt: '2023-04-20T13:52:37.119Z',
          cache: '0',
          affix: '0',
          alwaysShow: '1',
          id: '6378bc38709df7310c080b8a',
        },
        {
          _id: '6378bd4a709df7310c080b90',
          __v: 0,
          component: '/sysManage/menuManage/menuManage',
          createdAt: '1970-01-01T11:26:02.239Z',
          hidden: '0',
          icon: 'fenlei',
          menuType: '2',
          name: 'menuManage',
          parentId: '6378bc38709df7310c080b8a',
          path: '/sysManage/menuManage',
          permission: '',
          sort: '0',
          title: '菜单管理',
          updatedAt: '2023-04-03T08:59:28.619Z',
          cache: '0',
          affix: '0',
          alwaysShow: '1',
          id: '6378bd4a709df7310c080b90',
        },
        {
          _id: '6379eab79c420db812549b8b',
          __v: 0,
          component: '/sysManage/roleManage/roleManage',
          createdAt: '1970-01-01T08:52:07.268Z',
          hidden: '0',
          icon: 'jiaoseguanli',
          menuType: '2',
          name: 'roleManage',
          parentId: '6378bc38709df7310c080b8a',
          path: '/sysManage/roleManage',
          permission: '',
          sort: '0',
          title: '角色管理',
          updatedAt: '2023-04-03T08:58:21.642Z',
          cache: '1',
          affix: '0',
          alwaysShow: '1',
          id: '6379eab79c420db812549b8b',
        },
        {
          _id: '640837d5656a9e134389845d',
          __v: 0,
          component: '/sysManage/staffManage/staffManage',
          createdAt: '1970-01-01T07:23:01.408Z',
          hidden: '0',
          icon: 'yuangong',
          menuType: '2',
          name: 'staffManage',
          parentId: '6378bc38709df7310c080b8a',
          path: '/sysManage/staffManage',
          permission: '',
          sort: '0',
          title: '员工管理',
          updatedAt: '2023-04-03T09:00:52.155Z',
          cache: '0',
          affix: '0',
          alwaysShow: '1',
          id: '640837d5656a9e134389845d',
        },
      ],
      permissions: [
        'sys:menu:view',
        'sys:menu:add',
        'sys:menu:edit',
        'sys:menu:delete',
        'sys:role:view',
        'sys:role:add',
        'sys:role:edit',
        'sys:role:delete',
        'sys:staff:view',
        'sys:staff:add',
        'sys:staff:edit',
        'sys:staff:forbidden',
        'sys:staff:unban',
      ],
    },
  })
}
