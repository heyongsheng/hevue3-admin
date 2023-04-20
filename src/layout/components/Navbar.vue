<template>
  <div class="navbar-wrap">
    <!-- 菜单折叠按钮 -->
    <slot name="collapse" class="collapse-btn"></slot>
    <div class="right-menu">
      <!-- 主题色 -->
      <!-- <el-color-picker v-model="color1" @change="changeTheme" /> -->
      <!-- 夜间模式-->
      <div class="dark-mode">
        <el-switch
          v-model="isDark"
          class="mt-2"
          style="margin-left: 24px"
          inline-prompt
          :active-icon="Moon"
          :inactive-icon="Sunny"
          @change="toggleDark"
        />
      </div>
      <!-- 用户-->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- <el-avatar
            shape="circle"
            :size="40"
            :src="staffStore.staff?.avatar"
          ></el-avatar> -->
          {{ staffStore.staff?.staff_name }}
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item @click="showResetPasswordHandle"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item @click="staffStore.logOut"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <reset-password
      class="reset-password"
      v-if="showResetPassword"
      @update:showResetPassword="showResetPassword = $event"
    ></reset-password>
  </div>
</template>

<script setup lang="ts">
import { useStaffStore } from '@/stores/staff'
import { useDark, useToggle } from '@vueuse/core'
import { Sunny, Moon } from '@element-plus/icons-vue'
import resetPassword from '@/views/login/resetPassword.vue'
// 暗黑主题切换
const isDark = useDark()
const toggleDark = useToggle(isDark)

// 修改密码
// 忘记密码
const showResetPassword = ref(false)
const showResetPasswordHandle = () => {
  showResetPassword.value = true
}

// 获取用户名字
const staffStore = useStaffStore()
</script>
<style scoped lang="scss">
.navbar-wrap {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: var(--color-bg-1);
  // box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  border-bottom: 1px solid var(--color-border-1);
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  .right-menu {
    display: flex;
    // padding-right: 16px;
    .dark-mode {
      margin-right: 20px;
    }
    .avatar-container {
      margin-right: 20px;
      .avatar-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
</style>
