<template>
  <el-drawer :title="modalName" v-model="addVisible" @close="modalClose">
    <el-form
      :model="formContent"
      label-width="140px"
      :rules="rules"
      ref="addFormRef"
    >
      <el-form-item label="菜单类型：" prop="menuType">
        <el-radio-group v-model="formContent.menuType">
          <el-radio
            v-for="(value, key) in menuTypeDic"
            :label="key"
            :key="key"
            >{{ value }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item
        :label="menuTypeDic[formContent.menuType] + '名称：'"
        prop="title"
      >
        <el-input v-model="formContent.title"></el-input>
      </el-form-item>
      <el-form-item
        label="访问路径："
        v-if="formContent.menuType !== '3'"
        prop="path"
      >
        <el-input v-model="formContent.path"></el-input>
      </el-form-item>
      <el-form-item
        label="模板地址："
        v-if="formContent.menuType === '2'"
        prop="component"
      >
        <el-input v-model="formContent.component"></el-input>
      </el-form-item>
      <el-form-item
        label="路由名称："
        v-if="formContent.menuType === '2'"
        prop="name"
      >
        <el-input v-model="formContent.name"></el-input>
      </el-form-item>
      <el-form-item
        label="父级菜单："
        v-if="formContent.menuType !== '1'"
        prop="parentId"
      >
        <el-tree-select
          v-model="formContent.parentId"
          :data="menuList"
          check-strictly
          placeholder="请选择"
          :props="{
            children: 'children',
            label: 'title',
            value: '_id',
          }"
          :render-after-expand="false"
        />
        <!-- <el-input v-model="formContent.parentId"></el-input> -->
      </el-form-item>
      <el-form-item
        label="权限标识："
        v-if="formContent.menuType === '3'"
        prop="permission"
      >
        <el-input v-model="formContent.permission"></el-input>
      </el-form-item>
      <el-form-item
        label="图标："
        v-if="formContent.menuType !== '3'"
        prop="icon"
      >
        <el-input v-model="formContent.icon" readonly>
          <template #append>
            <el-popover placement="bottom-start" :width="390" trigger="click">
              <template #reference>
                <el-button>
                  <svg-icon
                    :name="formContent.icon || 'gengduo-heng'"
                    className="icon"
                  ></svg-icon>
                </el-button>
              </template>
              <div class="icon-box">
                <ul class="icon-list">
                  <li
                    v-for="item in iconNames"
                    :key="item"
                    :title="item"
                    @click="checkMenuIcon(item)"
                    :class="{ activeIcon: formContent.icon == item }"
                  >
                    <svg-icon :name="item"></svg-icon>
                    <span class="icon-name">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </el-popover>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item
        label="排序："
        v-if="formContent.menuType !== '3'"
        prop="name"
      >
        <el-input v-model="formContent.sort"></el-input>
      </el-form-item>
      <el-form-item label="隐藏菜单：" v-if="formContent.menuType !== '3'">
        <el-radio-group v-model="formContent.hidden">
          <el-radio
            v-for="(value, key) in menuHideDic"
            :key="key"
            :label="key"
            >{{ value }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="缓存页面：" v-if="formContent.menuType !== '3'">
        <el-radio-group v-model="formContent.cache">
          <el-radio
            v-for="(value, key) in menuCacheDic"
            :key="key"
            :label="key"
            >{{ value }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="固定标签栏：" v-if="formContent.menuType === '2'">
        <el-radio-group v-model="formContent.affix">
          <el-radio
            v-for="(value, key) in menuAffixDic"
            :key="key"
            :label="key"
            >{{ value }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="常显菜单：" v-if="formContent.menuType === '1'">
        <el-radio-group v-model="formContent.alwaysShow">
          <el-radio
            v-for="(value, key) in menuAlwaysShowDic"
            :key="key"
            :label="key"
            >{{ value }}</el-radio
          >
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
import { createMenu, updateMenu } from '@/api/menu'
import { ElNotification } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import iconNames from '@/assets/icons'
import {
  menuTypeDic,
  menuHideDic,
  menuCacheDic,
  menuAffixDic,
  menuAlwaysShowDic,
} from '@/dictionary/menu'

defineProps(['menuList'])
// 添加菜单
const addVisible = ref(false)
const formContent = reactive<any>({
  menuType: menuTypeDic.default,
  title: '',
  path: '',
  component: '',
  name: '',
  icon: '',
  sort: '0',
  hidden: menuHideDic.default,
  parentId: '',
  permission: '',
  redirect: '',
  cache: menuCacheDic.default,
  affix: menuAffixDic.default,
  alwaysShow: menuAlwaysShowDic.default,
})
const menuId = ref()

const checkMenuIcon = (icon: string) => {
  formContent.icon = icon
}

const modalName = ref()

const addFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  title: [
    {
      required: true,
      message: '请输入名称',
      trigger: ['blur', 'change'],
    },
  ],
  path: [
    {
      required: true,
      message: '请输入访问路径',
      trigger: ['blur', 'change'],
    },
  ],
  component: [
    {
      required: true,
      message: '请输入模板地址',
      trigger: ['blur', 'change'],
    },
  ],
  parentId: [
    {
      required: true,
      message: '请选择父级菜单',
      trigger: ['blur', 'change'],
    },
  ],
  permission: [
    {
      required: true,
      message: '请输入权限标识',
      trigger: ['blur', 'change'],
    },
  ],
})

const showPop = async (row: any) => {
  addVisible.value = true
  await nextTick()
  row && (formContent.menuType = row.menuType)
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
      _api = updateMenu
      sendDate._id = menuId.value
    } else {
      _api = createMenu
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
  showPop,
})
</script>
<style lang="scss" scoped>
.icon-list {
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  overflow: auto;
  list-style: none;
  li {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
    &.activeIcon {
      background-color: #e6f7ff;
    }
    .icon-name {
      font-size: 12px;
      margin-top: 5px;
      @include globalScss.text-overflow(1);
    }
  }
}
</style>
