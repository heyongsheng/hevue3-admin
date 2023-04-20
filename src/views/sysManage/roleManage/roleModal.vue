<template>
  <el-drawer :title="modalName" v-model="addVisible" @close="modalClose">
    <el-form
      :model="formContent"
      label-width="100px"
      :rules="rules"
      ref="addFormRef"
    >
      <el-form-item label="角色名称：" prop="role_name">
        <el-input
          v-model="formContent.role_name"
          placeholder="请输入角色名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="角色权限：" prop="gender">
        <el-tree
          ref="menuTreeRef"
          :data="props.menuData"
          :props="defaultProps"
          show-checkbox
          node-key="_id"
          default-expand-all
        />
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
import { createRole, updateRole } from '@/api/role'
import { ElNotification } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

// 菜单数据
const props = defineProps(['menuData'])
const defaultProps = {
  children: 'children',
  label: 'title',
}

// 添加角色
const addVisible = ref(false)
const formContent = reactive<{ [key: string]: string }>({
  role_name: '',
})
const menuId = ref()

const modalName = ref('')

const addFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  role_name: [
    {
      required: true,
      message: '请输入角色名称',
      trigger: ['blur', 'change'],
    },
  ],
})

// 展示弹窗
const menuTreeRef = ref<any>()
const showModal = async (row: any) => {
  addVisible.value = true
  await nextTick()
  if (row) {
    Object.keys(formContent).forEach((key) => {
      formContent[key] = row[key] || formContent[key]
    })

    // 回显菜单
    let role_permission = row.role_permission
    let _arr = role_permission ? role_permission.split(',') : []
    _arr.map((item: string) => {
      //获取该id对应的tree节点
      let node = menuTreeRef.value.getNode(item)
      //判断该节点是否是子节点（即该节点是否是末级节点），是的话就设置选中状态
      if (node.isLeaf) {
        menuTreeRef.value.setChecked(node, true)
      }
    })

    menuId.value = row._id
    modalName.value = '编辑角色'
  } else {
    modalName.value = '添加角色'
    menuId.value = ''
  }
}

const emit = defineEmits(['reloadList'])

const isLoading = ref(false)
const submitForm = (formEl: FormInstance | undefined) => {
  formEl?.validate().then(() => {
    // 获取选中的菜单key
    const checkedKeys = menuTreeRef.value.getCheckedKeys()
    const halfCheckedKeys = menuTreeRef.value.getHalfCheckedKeys()
    const allKeys = [...checkedKeys, ...halfCheckedKeys]

    let _api: Function
    let sendDate: any = {
      ...formContent,
      role_permission: allKeys.join(','),
    }
    if (menuId.value) {
      _api = updateRole
      sendDate._id = menuId.value
    } else {
      _api = createRole
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
