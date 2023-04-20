<template>
  <svg aria-hidden="true" class="svg-icon" :class="className">
    <use :href="symbolId" />
  </svg>
</template>
<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  outline: none;
}
</style>
