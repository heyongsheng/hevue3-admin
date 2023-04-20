<template>
  <el-drawer :title="modalName" v-model="addVisible" @close="modalClose">
    <el-form
      :model="formContent"
      label-width="100px"
      :rules="rules"
      ref="addFormRef"
    >
      <el-form-item label="账号：" prop="staff_account">
        <template #label>
          <span>账号：</span>
          <el-tooltip
            effect="dark"
            content="账号可用于登录，具有唯一性，禁止与手机号相同"
            placement="top"
          >
            <svg-icon
              name="tishi"
              style="display: block; height: 100%"
            ></svg-icon>
          </el-tooltip>
        </template>
        <el-input
          v-model="formContent.staff_account"
          placeholder="请输入员工账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="姓名：" prop="staff_name">
        <el-input
          v-model="formContent.staff_name"
          placeholder="请输入员工姓名"
        ></el-input>
      </el-form-item>

      <el-form-item prop="phone">
        <template #label>
          <span>手机号：</span>
          <el-tooltip
            effect="dark"
            content="手机号必须填写正确，员工首次登录需使用手机号重置密码"
            placement="top"
          >
            <svg-icon
              name="tishi"
              style="display: block; height: 100%"
            ></svg-icon>
          </el-tooltip>
        </template>
        <el-input
          v-model="formContent.phone"
          placeholder="请输入员工手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="角色：" prop="roleId">
        <el-select v-model="formContent.roleId" placeholder="请选择角色">
          <el-option
            v-for="item in props.roleList"
            :key="item._id"
            :label="item.role_name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别：" prop="gender">
        <el-radio-group v-model="formContent.gender">
          <el-radio v-for="(value, key) in genderDic" :key="key" :label="key">{{
            value
          }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="addVisible = false">取消</el-button>
      <el-button
        :loading="isLoading"
        type="primary"
        @click="submitForm(addFormRef)"
        >确定</el-button
      >
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { createStaff, updateStaff } from '@/api/staff'

import { ElNotification } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { genderDic } from '@/dictionary/user'
// import { QuestionFilled } from '@element-plus/icons-vue'

// 添加菜单
const addVisible = ref(false)
const formContent = reactive<any>({
  staff_account: '',
  staff_name: '',
  phone: '',
  roleId: '',
  gender: genderDic.default,
})
const menuId = ref()

const props = defineProps(['roleList'])
const modalName = ref()

const addFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  staff_account: [
    {
      required: true,
      message: '请输入账号',
      trigger: ['blur', 'change'],
    },
  ],
  staff_name: [
    {
      required: true,
      message: '请输入姓名',
      trigger: ['blur', 'change'],
    },
  ],
  phone: [
    {
      required: true,
      message: '请输入员工手机号',
      trigger: ['blur', 'change'],
    },
  ],
  roleId: [
    {
      required: true,
      message: '请选择角色',
      trigger: ['blur', 'change'],
    },
  ],
})

const showModal = async (row: any) => {
  addVisible.value = true
  await nextTick()
  if (row) {
    Object.keys(formContent).forEach((key) => {
      formContent[key] = row[key] || formContent[key]
    })
    if (row._id) {
      menuId.value = row._id
      modalName.value = '编辑菜单'
    } else {
      modalName.value = '添加菜单'
      menuId.value = ''
    }
  } else {
    modalName.value = '添加菜单'
    menuId.value = ''
  }
}

const emit = defineEmits(['reloadList'])

const isLoading = ref(false)
const submitForm = (formEl: FormInstance | undefined) => {
  formEl?.validate().then(() => {
    let _api: Function
    let sendDate: any = {
      ...formContent,
    }
    if (menuId.value) {
      _api = updateStaff
      sendDate._id = menuId.value
    } else {
      _api = createStaff
    }
    isLoading.value = true
    _api(sendDate).then(() => {
      isLoading.value = false

      ElNotification.success({
        title: '成功',
        message: modalName.value + '成功',
      })
      addVisible.value = false
      emit('reloadList')
      // getMenuListHandle()
    })
  })
}

const modalClose = () => {
  addFormRef.value?.resetFields()
}

defineExpose({
  showModal,
})
</script>
<style lang="scss" scoped></style>
