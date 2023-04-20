import request from '@/utils/request'

// 获取验证码

export function getCaptcha(data: {
  phone: string
  uuid: string
  purpose: string
}): any {
  return Promise.resolve({
    code: 200,
    data: '2958',
    msg: 'success',
  })
}
