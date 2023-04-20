<template>
  <div class="staff-manage">
    <!-- 筛选 -->
    <div class="search-wrap">
      <el-form
        :inline="true"
        :model="listQuery"
        class="demo-form-inline"
        ref="searchForm"
      >
        <el-form-item label="id" prop="_id">
          <template #label>
            <span style="margin-right: 5px">id</span>
            <el-tooltip
              effect="dark"
              content="请输入完整员工Id，员工id不支持模糊搜索"
              placement="top"
            >
              <svg-icon
                name="tishi"
                style="display: block; height: 100%"
              ></svg-icon>
            </el-tooltip>
          </template>
          <el-input v-model="listQuery._id" />
        </el-form-item>
        <el-form-item label="账号" prop="staff_account">
          <el-input v-model="listQuery.staff_account" />
        </el-form-item>
        <el-form-item label="姓名" prop="staff_name">
          <el-input v-model="listQuery.staff_name" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="listQuery.phone" />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="listQuery.gender">
            <el-option
              v-for="(value, key) in genderDic"
              :key="key"
              :label="value"
              :value="key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="角色" prop="gender">
          <el-select v-model="listQuery.roleId">
            <el-option
              v-for="item in roleList"
              :key="item._id"
              :label="item.role_name"
              :value="item._id"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="resetSearch">重置</el-button>
          <el-button type="primary" @click="searchHandle">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-button
      type="primary"
      @click="showModal()"
      v-permission="'sys:staff:add'"
      >添加员工</el-button
    >
    <!-- 员工列表 -->
    <el-table
      :data="datalist"
      :border="true"
      row-key="_id"
      v-loading="isLoading"
      style="margin-top: 20px"
    >
      <el-table-column prop="_id" label="员工id"></el-table-column>
      <el-table-column prop="staff_account" label="员工账号"> </el-table-column>
      <el-table-column prop="staff_name" label="员工名字"></el-table-column>
      <el-table-column prop="staff_account" label="性别" align="center">
        <template #default="{ row }">
          <div>{{ genderDic[row.gender] }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号码"> </el-table-column>
      <el-table-column prop="roleId" label="角色" align="center">
        <template #default="{ row }">
          <div>{{ getRoleName(row.roleId) }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template #default="{ row }">
          <el-tag :type="staffStatusDic[row.status].type">{{
            staffStatusDic[row.status].text
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button
            link
            type="primary"
            @click="showModal(row)"
            v-permission="'sys:staff:edit'"
            >编辑</el-button
          >
          <el-button
            link
            type="danger"
            @click="changeStatusHandle(row._id, '2')"
            v-if="row.staff_account !== globalProperties.superAdmin"
            v-show="row.status !== '2'"
            v-permission="'sys:staff:forbidden'"
            >禁用</el-button
          >
          <el-button
            link
            type="success"
            @click="changeStatusHandle(row._id, '1')"
            v-show="row.status === '2'"
            v-permission="'sys:staff:unban'"
            >启用</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px; display: flex; justify-content: flex-end"
      :page-size="listQuery.page_size"
      background
      hide-on-single-page
      layout="prev, pager, next"
      :total="dataTotal"
      @current-change="handleCurrentChange"
    />
    <!-- 新增员工弹窗 -->
    <staff-modal
      ref="staffPopRef"
      @reloadList="getDataListHandle"
      :roleList="roleList"
    ></staff-modal>
  </div>
</template>

<script setup lang="ts">
import { getRoleList } from '@/api/role'
import { getStaffList, updateStaffStatus } from '@/api/staff'
import staffModal from './staffModal.vue'
import { genderDic } from '@/dictionary/user'
import { staffStatusDic } from '@/dictionary/staff'
import useGetGlobalProperties from '@/utils/global'
const globalProperties = useGetGlobalProperties()

onMounted(() => {
  getRoleListHandle()
  getDataListHandle()
})

// 获取角色列表
const roleList = ref()
const getRoleListHandle = async () => {
  const res = await getRoleList({ page_num: 1, page_size: 100 })
  roleList.value = res.data.list
}

// 列表回显角色名称
const getRoleName = computed<Function>(() => {
  return (roleId: string) => {
    const obj =
      roleList.value && roleList.value.find((item: any) => item._id === roleId)
    return obj?.role_name
  }
})

// 获取员工列表
const datalist = ref([])
const dataTotal = ref(0)
const isLoading = ref(false)
const listQuery = reactive({
  _id: '',
  staff_account: '',
  staff_name: '',
  phone: '',
  gender: '',
  page_num: 1,
  page_size: 10,
  roleId: '',
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
  getStaffList(listQuery).then((res: { data: any }) => {
    isLoading.value = false
    datalist.value = res.data.list
    dataTotal.value = res.data.total
  })
}

// 分页
const handleCurrentChange = (val: number) => {
  listQuery.page_num = val
  getDataListHandle()
}

// 展示新增、编辑弹窗
const staffPopRef = ref()
const showModal = (row?: Object) => {
  staffPopRef.value.showModal(row)
}

// 启用/禁用员工
const changeStatusHandle = (id: string, status: string) => {
  if (isLoading.value) return
  isLoading.value = true
  updateStaffStatus({ _id: id, status }).then(() => {
    ElNotification.success({
      title: '成功',
      message: '修改员工状态成功',
    })
    isLoading.value = false
    getDataListHandle()
  })
}
</script>
<style scoped>
.icon {
  color: aqua;
  font-size: 30px;
}
</style>
