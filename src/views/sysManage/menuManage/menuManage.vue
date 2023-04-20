<template>
  <div class="menu-manage">
    <el-button
      type="primary"
      @click="showMenuPop()"
      v-permission="'sys:menu:add'"
      >添加菜单</el-button
    >
    <!-- 菜单列表 -->
    <el-table
      :data="menuList"
      :border="true"
      row-key="_id"
      v-loading="isLoading"
      style="margin-top: 20px"
    >
      <el-table-column prop="title" label="菜单名称"></el-table-column>
      <el-table-column prop="menuType" label="菜单类型" width="100">
        <template #default="{ row }">
          <div>{{ menuTypeDic[row.menuType] }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="path" label="访问路径"></el-table-column>
      <el-table-column prop="name" label="路由名称"></el-table-column>
      <el-table-column prop="icon" label="图标" width="80" align="center">
        <template #default="{ row }">
          <svg-icon :name="row.icon"></svg-icon>
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        width="80"
        align="center"
      ></el-table-column>
      <el-table-column prop="hidden" label="隐藏菜单" width="80" align="center">
        <template #default="{ row }">
          <div>{{ menuHideDic[row.hidden] }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="cachee" label="缓存页面" width="80" align="center">
        <template #default="{ row }">
          <div>{{ menuCacheDic[row.cache] }}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="affix"
        label="固定标签栏"
        width="80"
        align="center"
      >
        <template #default="{ row }">
          <div>{{ menuAffixDic[row.affix] }}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="alwaysShow"
        label="常显菜单"
        width="80"
        align="center"
      >
        <template #default="{ row }">
          <div>{{ menuAlwaysShowDic[row.alwaysShow] }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="permission" label="权限标识"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button
            type="primary"
            link
            v-show="row.menuType !== '3'"
            @click="
              showMenuPop({
                parentId: row._id,
                menuType: row.menuType === '1' ? '2' : '3',
              })
            "
            >添加</el-button
          >
          <el-button
            link
            type="primary"
            v-permission="'sys:menu:edit'"
            @click="showMenuPop(row)"
            >编辑</el-button
          >
          <el-popconfirm
            title="确定删除吗?"
            @confirm="deleteMenuHandle(row._id)"
          >
            <template #reference>
              <el-button link type="primary" v-permission="'sys:menu:delete'"
                >删除</el-button
              >
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增菜单弹窗 -->
    <menu-pop
      ref="menuPopRef"
      @reloadList="getMenuListHandle"
      :menuList="menuList"
    ></menu-pop>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { ElNotification } from 'element-plus'
import { getMenuList, deleteMenu } from '@/api/menu'
import { onMounted } from 'vue'
import { arrToTree } from '@/utils/util'
import menuPop from './menuModal.vue'
import {
  menuTypeDic,
  menuHideDic,
  menuCacheDic,
  menuAffixDic,
  menuAlwaysShowDic,
} from '@/dictionary/menu'

const menuList = ref()
const isLoading = ref(false)
// 获取菜单列表
const getMenuListHandle = () => {
  isLoading.value = true
  getMenuList().then((res: { data: any }) => {
    isLoading.value = false
    menuList.value = arrToTree({ list: res.data })
  })
}

onMounted(() => {
  getMenuListHandle()
})

const menuPopRef = ref()
const showMenuPop = (row?: Object | undefined) => {
  menuPopRef.value.showPop(row)
}

// 删除菜单
const deleteMenuHandle = (id: string) => {
  deleteMenu({ _id: id }).then(() => {
    ElNotification.success({
      title: '成功',
      message: '删除菜单成功',
    })
    getMenuListHandle()
  })
}
</script>
<style scoped>
.icon {
  color: aqua;
  font-size: 30px;
}
</style>
