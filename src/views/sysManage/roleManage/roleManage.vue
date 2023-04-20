<template>
  <div class="role-manage">
    <!-- 筛选 -->
    <div class="search-wrap">
      <el-form
        :inline="true"
        :model="listQuery"
        class="demo-form-inline"
        ref="searchForm"
      >
        <el-form-item label="角色名称" prop="role_name">
          <el-input v-model="listQuery.role_name" />
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="resetSearch">重置</el-button>
          <el-button type="primary" @click="searchHandle">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 添加角色 -->
    <el-button type="primary" @click="showModal()" v-permission="'sys:role:add'"
      >添加角色</el-button
    >

    <!-- 角色列表 -->
    <el-table
      :data="datalist"
      :border="true"
      row-key="_id"
      v-loading="isLoading"
      style="margin-top: 20px"
    >
      <el-table-column prop="role_name" label="角色名称"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button
            type="primary"
            link
            @click="showModal(row)"
            v-permission="'sys:role:edit'"
            v-if="row.role_code !== globalProperties.superAdminRole"
            >编辑</el-button
          >
          <el-popconfirm
            title="确定删除吗?"
            @confirm="deleteHandle(row._id)"
            v-if="row.role_code !== globalProperties.superAdminRole"
          >
            <template #reference>
              <el-button link type="primary" v-permission="'sys:role:delete'"
                >删除</el-button
              >
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增角色弹窗 -->
    <role-modal
      ref="roleModalRef"
      @reloadList="getDataListHandle"
      :menuData="menuData"
    ></role-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import roleModal from './roleModal.vue'
import { getRoleList, deleteRole } from '@/api/role'
import { getMenuList } from '@/api/menu'
import { arrToTree } from '@/utils/util'
import useGetGlobalProperties from '@/utils/global'
const globalProperties = useGetGlobalProperties()

onMounted(() => {
  getDataListHandle()
  getMenuListHandle()
})

// 获取菜单列表
const menuData = ref<Array<any>>()
const getMenuListHandle = () => {
  getMenuList().then((res: { data: any }) => {
    menuData.value = arrToTree({ list: res.data })
  })
}

// 展示新增、编辑弹窗
const roleModalRef = ref()
const showModal = (row?: Object) => {
  roleModalRef.value.showModal(row)
}

// 获取角色列表
const datalist = ref([])
const dataTotal = ref(0)
const isLoading = ref(false)
const listQuery = reactive({
  role_name: '',
  page_num: 1,
  page_size: 10,
})
// 筛选
const searchHandle = () => {
  listQuery.page_num = 1
  getDataListHandle()
}
// 重置
const searchForm = ref()
const resetSearch = () => {
  searchForm.value.resetFields()
  searchHandle()
}
const getDataListHandle = () => {
  if (isLoading.value) return
  isLoading.value = true
  getRoleList(listQuery).then((res: { data: any }) => {
    isLoading.value = false
    datalist.value = res.data.list
    dataTotal.value = res.data.total
  })
}

// 删除
const deleteHandle = (_id: string) => {
  deleteRole({ _id }).then(() => {
    ElNotification.success({
      title: '成功',
      message: '删除成功',
    })
    getDataListHandle()
  })
}
</script>
<style scoped></style>
