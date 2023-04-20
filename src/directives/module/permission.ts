import { usePermissionStore } from '@/stores/permission'
import { useStaffStore } from '@/stores/staff'
import { superAdminRole } from '@/dictionary/staff'

export default {
  mounted(el: any, binding: any) {
    const permissionStore = usePermissionStore()
    const staffStore = useStaffStore()

    if (staffStore.staff?.role_code === superAdminRole) {
      return
    }
    const hasPermission = permissionStore.permissions.includes(binding.value)
    if (!hasPermission) {
      el.remove()
    }
  }
}
