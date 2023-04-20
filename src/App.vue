<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = ref(zhCn)
useDark()
</script>

<style lang="scss" scoped></style>
