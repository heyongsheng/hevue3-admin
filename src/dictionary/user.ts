// 性别
export const genderDic: defaultType = {
  default: '1',
  '1': '男',
  '2': '女',
}
Object.defineProperty(genderDic, 'default', {
  enumerable: false,
})

// 账号状态
export const statusDic: object = {
  '0': '未激活',
  '1': '正常',
  '2': '封号',
  '3': '注销',
}
