<template>
  <el-menu
    :default-openeds="defaultOpeneds"
    :default-active="$route.fullPath"
    class="el-menu-vertical-demo"
    :unique-opened="true"
    :active-text-color="themeColor"
    router
    :collapse="isCollapse"
  >
    <template v-for="item in menus" :key="item._id">
      <sidebar-item :item-data="item" v-if="!item?.meta?.hidden"></sidebar-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { usePermissionStore } from '@/stores/permission'
import SidebarItem from './SidebarItem.vue'
import { reactive, inject } from 'vue'
import { compareVersion } from '@/utils/util'

const permissionStore = usePermissionStore()
const menus = permissionStore.routes
const router = useRouter()
const isCollapse: boolean | undefined = inject('isCollapse')

const themeColor = ref('')
onMounted(() => {
  themeColor.value =
    document.documentElement.style.getPropertyValue('--color-primary')
})

// 默认展开
const defaultOpeneds: any[] = reactive([])
const findActive = (menus: any) => {
  menus.forEach((item: any) => {
    if (item.children && item.children[0]) {
      findActive(item.children)
    } else {
      if (item.path === router.currentRoute.value.path) {
        defaultOpeneds.push(item.parentId)
      }
    }
  })
}
findActive(menus)

// 菜单排序
const sortMenus = (menus: any) => {
  menus.sort((a: any, b: any) =>
    compareVersion(b.meta.sort || '0', a.meta.sort || '0')
  )
  menus.forEach((item: any) => {
    if (item.children) {
      sortMenus(item.children)
    }
  })
}
sortMenus(menus)
</script>
<style scoped></style>
