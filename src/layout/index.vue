<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <sidebar
      id="guide-sidebar"
      class="sidebar"
      :class="{ 'sidebar-container': !isCollapse }"
    ></sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 navbar -->
        <navbar>
          <template #collapse>
            <div class="collapse-btn" :class="{ row: isCollapse }">
              <svg-icon
                name="gengduo-heng"
                @click="isCollapse = !isCollapse"
              ></svg-icon>
            </div>
          </template>
        </navbar>
        <!-- 标签 -->
        <tags-view></tags-view>
      </div>
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import TagsView from './components/TagsView/index.vue'
import AppMain from './components/AppMain.vue'

const isCollapse = ref(false)
provide('isCollapse', isCollapse)
</script>
<style lang="scss">
.app-wrapper {
  @include globalScss.clearfix;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
}
.sidebar {
  position: relative;
  z-index: 2;
  background: var(--color-menu-bg);
}
.sidebar-container {
  min-width: globalScss.$sideBarWidth;
}
.main-container {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.collapse-btn {
  cursor: pointer;
  margin-left: 16px;
  transition: all 0.3s;
  &.row {
    transform: rotate(90deg);
  }
}
</style>
