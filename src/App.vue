<template>
  <div>
    <el-button @click="showMessage">555</el-button>
  </div>
  <div></div>
</template>

<script setup lang="ts">
const showMessage = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
</script>

<style lang="scss"></style>
