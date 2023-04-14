<template>
  <div>
    <el-switch
      v-model="isDark"
      class="theme-btn"
      style="margin-left: 24px"
      inline-prompt
      :active-icon="Moon"
      :inactive-icon="Sunny"
      @change="toggleDark"
    />
    <el-button @click="showMessage">hello</el-button>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const showMessage = () => {
  ElMessage({
    message: 'hello',
    type: 'success',
  })
}
</script>

<style lang="scss" scoped>
.test {
  color: globalScss.$themeColor;
}
</style>
