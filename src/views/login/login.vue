<template>
  <div class="login-wrap">
    <el-switch
      v-model="isDark"
      class="theme-btn"
      style="margin-left: 24px"
      inline-prompt
      :active-icon="Moon"
      :inactive-icon="Sunny"
      @change="toggleDark"
    />
    <!-- 背景 -->
    <div class="back-wrap">
      <div class="bg-item left one"></div>
      <div class="bg-item right two"></div>
      <div class="bg-item left three"></div>
      <div class="bg-item right four"></div>
    </div>
    <div class="loogin-container">
      <div class="login-title">登录</div>
      <el-form
        :model="sendData"
        class="form-wrap"
        ref="ruleFormRef"
        :rules="rules"
        autocomplete="off"
      >
        <el-form-item prop="staff_account">
          <el-input
            class="login-input"
            v-model="sendData.staff_account"
            placeholder="请输入账号或手机号"
            :prefix-icon="User"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="login-input"
            v-model="sendData.password"
            placeholder="请输入密码"
            show-password
            :prefix-icon="Lock"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 忘记密码 -->
      <div class="other-wrap">
        <el-button type="primary" link @click="showResetPasswordHandle"
          >忘记密码？</el-button
        >
      </div>
      <el-button
        class="login-btn"
        type="primary"
        :loading="loginLoading"
        @click="loginHandle(ruleFormRef)"
        >登录</el-button
      >
    </div>
    <reset-password
      class="reset-password"
      v-if="showResetPassword"
      @update:showResetPassword="showResetPassword = $event"
    ></reset-password>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock, Sunny, Moon } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useStaffStore } from '@/stores/staff'
import resetPassword from './resetPassword.vue'
import { useDark, useToggle } from '@vueuse/core'

// 暗黑主题切换
const isDark = useDark()
const toggleDark = useToggle(isDark)

// 表单数据
const sendData = reactive({
  staff_account: '',
  password: '',
})

// 表单校验规则
const rules = reactive<FormRules>({
  staff_account: [
    { required: true, message: '请输入员工账号', trigger: 'blur' },
    { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
})

const ruleFormRef = ref<FormInstance>()
const staffStore = useStaffStore()
const router = useRouter()
const loginLoading = ref(false)

const loginHandle = (formEl: FormInstance | undefined) => {
  formEl?.validate((valid) => {
    if (valid) {
      loginLoading.value = true
      staffStore
        .loginHandle(sendData)
        .then(() => {
          router.push('/')
        })
        .finally(() => {
          loginLoading.value = false
        })
    }
  })
}

// 忘记密码
const showResetPassword = ref(false)
const showResetPasswordHandle = () => {
  showResetPassword.value = true
}
</script>
<style>
input:-internal-autofill-selected {
  background-color: transparent !important;
  background-image: none !important;
  color: rgb(255, 255, 255) !important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition-delay: 500000s;
  transition: background-color 50000s ease-out;
  -webkit-transition-delay: 50000s;
  -webkit-transition: background-color 50000s ease-out;
}
</style>
<style scoped lang="scss">
.login-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-color: var(--el-color-primary-light-5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.theme-btn {
  position: absolute;
  right: 100px;
  top: 50px;
  z-index: 9;
}
// 背景
.back-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background: var(--el-color-primary-light-9);
  .bg-item {
    position: absolute;
    &.left {
      bottom: 0;
      left: 0;
      filter: drop-shadow(5px 0 20px rgba(0, 0, 0, 0.1));
    }
    &.right {
      bottom: 0;
      right: 0;
      filter: drop-shadow(-5px 0 20px rgba(0, 0, 0, 0.2));
    }
    &.one {
      border-bottom: 50vh solid var(--el-color-primary-light-3);
      border-right: 60vw solid transparent;
      z-index: 6;
    }
    &.two {
      border-bottom: 70vh solid var(--el-color-primary-light-5);
      border-left: 80vw solid transparent;
      z-index: 5;
    }
    &.three {
      border-bottom: 90vh solid var(--el-color-primary-light-7);
      border-right: 90vw solid transparent;
      z-index: 4;
    }
    &.four {
      border-bottom: 110vh solid var(--el-color-primary-light-8);
      border-left: 110vw solid transparent;
      z-index: 3;
    }
  }
}
.loogin-container {
  padding: 20px;
  position: relative;
  z-index: 2;
}
.login-title {
  color: var(--color-primary);
  font-size: 48px;
}
.form-wrap {
  width: 400px;
  margin: 0 auto;
  margin-top: 5vh;
  color: var(--color-text-2);
  :deep(.el-input__wrapper) {
    border-radius: 5px;
    border: 1px solid var(--el-color-primary-light-3);
    outline: none;
    box-shadow: none;
    &.is-focus,
    &:hover {
      box-shadow: 0 0 0 1px var(--el-color-primary) inset !important;
    }
  }
  :deep(.el-input__prefix) {
    color: var(--color-text-2);
  }
  :deep(.el-input__inner) {
    // color: var(--color-text-2);
    // outline: none;
    height: 40px;
  }
}

.other-wrap {
  width: 400px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: right;
}

.login-btn {
  width: 400px;
  height: 40px;
  // font-size: 16px;
  display: block;
  margin: 20px auto;
}
</style>
