import axios from 'axios'
import { useStaffStore } from '@/stores/staff'
import { getToken } from '@/utils/auth'
import { ElNotification } from 'element-plus'

// create an axios instance
const service = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  timeout: 20000, // request timeout
})

service.interceptors.request.use(
  (config) => {
    // const baseURL = config.requestBase || 'VITE_APP_BASE_API'

    // config.baseURL = import.meta.env[baseURL]
    const staffStore = useStaffStore()
    config.baseURL = '/api'

    if (staffStore.token) {
      config.headers['x-authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const staffStore = useStaffStore()
    const res = response.data
    if (res.code === 401) {
      ElNotification.error({
        title: '错误',
        message: res.msg,
      })

      staffStore.logOut()
      return Promise.reject(res)
    } else if (res.code !== 200) {
      ElNotification.error({
        title: '错误',
        message: res.msg || '网络错误，请稍后重试',
      })
      return Promise.reject(res)
    } else {
      return res
    }
  },
  (error) => {
    console.log(error) // for debug
    const errContent = error.response
    const staffStore = useStaffStore()
    if (errContent?.status === 401) {
      ElNotification.error({
        title: '错误',
        message: errContent.data.msg,
      })

      staffStore.logOut()
      return Promise.reject(error)
    } else {
      ElNotification.error({
        title: '错误',
        message: errContent?.data?.msg || '网络错误，请稍后重试',
      })
      return Promise.reject(error)
    }
  }
)

export default service
