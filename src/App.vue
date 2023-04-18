<template>
  <router-view></router-view>
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

<style lang="scss" scoped></style>
