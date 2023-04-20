import { defineStore } from 'pinia'
import { login, getStaffInfo } from '@/api/staff'
import { setToken, getToken, removeToken } from '@/utils/auth'
import { usePermissionStore } from '@/stores/permission'
import router from '@/router'
interface Staff {
  staff_account: string
  password: string
}

export const useStaffStore = defineStore('staff', {
  state: () => ({
    token: getToken() || '',
    staff: ref<any>(),
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    logOut() {
      this.token = ''
      this.staff = null
      const permissionStore = usePermissionStore()
      permissionStore.$reset()
      removeToken()
      router.push('/login')
    },
    loginHandle(staff: Staff) {
      return new Promise((resolve, reject) => {
        login(staff)
          .then((res: any) => {
            this.setToken(res.data)
            setToken(res.data)
            resolve(res)
            // this.getUserInfo()
          })
          .catch((err: any) => {
            reject(err)
          })
      })
    },
    getStaffInfo() {
      return new Promise((resolve, reject) => {
        getStaffInfo()
          .then((res: any) => {
            this.staff = res.data
            resolve(res)
          })
          .catch((err: any) => {
            reject(err)
          })
      })
    },
  },
})
