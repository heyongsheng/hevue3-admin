<template>
  <div class="page-wrap">
    <div class="page-content">
      <div class="title">重置密码</div>
      <div class="form-wrap">
        <el-form
          size="large"
          :model="sendData"
          :rules="rules"
          ref="passwordFormRef"
        >
          <el-form-item prop="phone">
            <el-input
              v-model.number="sendData.phone"
              placeholder="请输入您的手机号"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item prop="captcha">
            <el-input
              v-model="sendData.captcha"
              placeholder="请输入验证码"
              :readonly="noGetCaptcha"
            >
              <template #append>
                <el-button
                  @click="getCaptchaHandle(passwordFormRef)"
                  style="width: 150px"
                  :loading="sendLoading"
                  >{{ codeText }}</el-button
                >
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="sendData.password"
              placeholder="请输入要设置的密码"
              :readonly="noGetCaptcha"
              show-password
            ></el-input>
            <!-- <password-input
              v-model="sendData.password"
              placeholder="请输入要设置的密码"
              :readonly="noGetCaptcha"
            /> -->
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="full-btn"
              :loading="updateLoading"
              @click="submitForm(passwordFormRef)"
            >
              重置密码
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button class="full-btn" @click="closePage">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { phoneReg } from '@/utils/RegExp'
import type { FormInstance, FormRules } from 'element-plus'
import { getCaptcha } from '@/api/public'
import { updatePassword } from '@/api/staff'
import { useStaffStore } from '@/stores/staff'

const sendData = reactive({
  phone: '',
  captcha: '',
  password: '',
  uuid: '',
})

// 表单校验规则
const rules = reactive<FormRules>({
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: phoneReg,
      message: '请输入正确的手机号',
      trigger: 'blur',
    },
  ],
  captcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 4, max: 4, message: '请输入4位验证码', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
})

const passwordFormRef = ref<FormInstance>()
// 获取验证码
const codeText = ref('获取验证码')
const codeNum = ref(60)
const codeInterval: any = ref(null)
const sendLoading = ref(false)
// 未获取验证码
const noGetCaptcha = ref(true)
const getCaptchaHandle = (formEl: FormInstance | undefined) => {
  if (sendLoading.value || codeNum.value !== 60) return
  formEl?.validateField('phone', (validate) => {
    if (validate) {
      sendData.uuid = crypto.randomUUID()
      sendLoading.value = true
      getCaptcha({
        uuid: sendData.uuid,
        purpose: 'change_password',
        phone: sendData.phone,
      })
        .then((res: any) => {
          noGetCaptcha.value = false
          codeText.value = codeNum.value + '秒后重新获取'
          codeInterval.value = setInterval(() => {
            codeNum.value--
            codeText.value = codeNum.value + '秒后重新获取'
            if (codeNum.value === 0) {
              clearInterval(codeInterval.value)
              codeText.value = '获取验证码'
              codeNum.value = 60
            }
          }, 1000)
          sendLoading.value = false
          ElNotification.success({
            title: '成功',
            message: '模拟验证码为：' + res.data,
          })
        })
        .catch(() => {
          sendLoading.value = false
        })
    }
  })
}

// 修改密码
const updateLoading = ref(false)
const staffStore = useStaffStore()
const submitForm = (formEl: FormInstance | undefined) => {
  formEl?.validate().then(() => {
    updateLoading.value = true
    updatePassword(sendData)
      .then(() => {
        ElNotification.success({
          title: '成功',
          message: '修改成功',
        })
        staffStore.logOut()
        closePage()
      })
      .finally(() => {
        updateLoading.value = false
      })
  })
}
// 关闭页面
const emit = defineEmits(['update:showResetPassword'])
const closePage = () => {
  emit('update:showResetPassword', false)
}
</script>
<style lang="scss" scoped>
@use 'sass:map';
.page-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 8;
  backdrop-filter: blur(15px);
  // background: rgba($color: #000000, $alpha: 0.2);
}
html {
  .page-content {
    background: rgba(
      $color: map.get(globalScss.$light, --color-bg-1),
      $alpha: 0.5
    );
  }
}
html.dark {
  .page-content {
    background: rgba(
      $color: map.get(globalScss.$dark, --color-bg-1),
      $alpha: 0.5
    );
  }
}
.page-content {
  padding: 40px 60px;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  background: rgba($color: #000000, $alpha: 1);
  box-shadow: 0 0 30px 5px rgba($color: #000000, $alpha: 0.2);
}
// 输入框边框
:deep(.el-input__wrapper) {
  border-radius: 5px;
  box-shadow: 0 0 0 1px var(--el-color-primary-light-3) inset;
  outline: none;
}
// 验证码按钮边框
:deep(.el-input-group__append) {
  background-color: var(--el-color-primary-light-3);
  box-shadow: 0 1px 0 0 var(--el-color-primary-light-3) inset,
    0 -1px 0 0 var(--el-color-primary-light-3) inset,
    -1px 0 0 0 var(--el-color-primary-light-3) inset;
  color: var(--color-primary-reverse);
}
.title {
  color: var(--color-text-2);
  font-size: 32px;
}
.form-wrap {
  margin-top: 40px;
  width: 400px;
}

.full-btn {
  width: 100%;
}
</style>
