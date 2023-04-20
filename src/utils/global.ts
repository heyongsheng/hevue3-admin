import { getCurrentInstance } from 'vue'
import { superAdmin, superAdminRole } from '../dictionary/staff'

export default function useGetGlobalProperties() {
  const {
    appContext: {
      app: {
        config: { globalProperties },
      },
    },
  } = getCurrentInstance() as any

  return { ...globalProperties, superAdmin, superAdminRole }
}
