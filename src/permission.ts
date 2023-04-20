import router from '@/router'
import { useStaffStore } from '@/stores/staff'
import { usePermissionStore } from '@/stores/permission'

const whiteList = ['/login', '/404', '/resetPassword'] // no redirect whitelist
// 路由前置守卫

router.beforeEach(async (to, _from, next) => {
  const store = useStaffStore()
  // 获取token
  const token = store.token

  // 如果token存在
  if (token) {
    // 如果是登录页
    if (to.path === '/login') {
      // 跳转到首页
      next('/')
    } else {
      if (!store.staff) {
        try {
          await store.getStaffInfo()
        } catch (error) {
          store.logOut()
          next('/login')
        }
      }
      const permissionStore = usePermissionStore()
      if (!permissionStore.routes || permissionStore.routes.length == 0) {
        const accessRoutes = await permissionStore.getAccessRoutes()

        accessRoutes.forEach((route) => {
          router.addRoute(route)
        })
        next({ path: to.fullPath, replace: true, query: to.query })
      } else {
        next()
      }
    }
  } else {
    // 如果是白名单
    if (whiteList.indexOf(to.path) !== -1) {
      // 正常跳转
      next()
    } else {
      // 否则跳转到登录页
      next('/login')
    }
  }
})
