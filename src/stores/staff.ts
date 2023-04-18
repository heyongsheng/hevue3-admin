import { defineStore } from 'pinia'
export const useStaffStore = defineStore('staff', {
  state: () => ({
    token: '',
    staff: null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    logOut() {
      this.token = ''
    },
  },
})
