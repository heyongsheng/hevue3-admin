<template>
  <div class="tag-wrap">
    <el-scrollbar
      ref="scrollPane"
      class="scroll-pane"
      @wheel.native.prevent="handleScroll"
    >
      <div class="tag-list">
        <router-link
          :to="item.path"
          class="tag-item"
          :class="{ checked: isCheck(item) }"
          v-for="item in tagsViewStore.visitedViews"
          ref="tagItem"
        >
          {{ item.meta.title }}
          <i-ep-close
            class="close-icon"
            v-if="!item.meta.affix"
            @click.prevent="closeTag(item)"
          />
        </router-link>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { useTagsViewStore } from '@/stores/tagView'
import { compareVersion } from '@/utils/util'

const tagsViewStore = useTagsViewStore()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  initTags()
  addTags()
})

const scrollPane = ref<any>([])
// 标签栏横向滚动
const handleScroll = (e: any) => {
  const eventDelta = e.wheelDelta || -e.deltaY * 40
  let scrollLeft = scrollPane.value?.wrapRef.scrollLeft
  scrollLeft += eventDelta / 8
  scrollPane.value.setScrollLeft(scrollLeft)
}

// 给当前页面tag添加样式
const isCheck = computed(() => {
  return (item: any) => {
    return item.path === route.path
  }
})

// 页面初始化时，添加固定tag
const affixTags = ref<any>([])
const initTags = () => {
  const routes = router
    .getRoutes()
    .sort((a: any, b: any) =>
      compareVersion(b?.meta?.sort || '0', a?.meta?.sort || '0')
    )
  routes.forEach((item) => {
    if (item?.meta?.affix) {
      affixTags.value.push(item)
      tagsViewStore.addView(item)
    }
  })
}

// 监听路由变化，添加tag，标签栏滚动到当前tag
watch(
  () => route.path,
  () => {
    addTags()
    moveToCurrentTag()
  }
)

const addTags = () => {
  const { name } = route
  if (name) {
    tagsViewStore.addView(route)
  }
}

// 滚动到当前tag
const tagItem = ref<any[]>()
const moveToCurrentTag = async () => {
  tagItem.value?.forEach((item: any) => {
    if (item.to === route.path) {
      // 判断当前元素是否超出屏幕
      const isOut =
        item.$el.offsetLeft + item.$el.offsetWidth >
          scrollPane.value?.wrapRef.offsetWidth +
            scrollPane.value?.wrapRef.scrollLeft ||
        item.$el.offsetLeft < scrollPane.value?.wrapRef.scrollLeft + 20

      if (isOut) {
        scrollPane.value?.scrollTo(item.$el.offsetLeft - 20, 0)
      }
      // when query is different then update
      if (item.to.fullPath !== route.fullPath) {
        tagsViewStore.updateVisitedView(route)
      }
    }
  })
}

// 关闭tag
const closeTag = (tag: any) => {
  tagsViewStore.delView(tag)
  // 如果关闭的是当前tag，跳转到最后一个tag
  if (tag.path === route.path) {
    const { path } =
      tagsViewStore.visitedViews[tagsViewStore.visitedViews.length - 1]
    router.push(path)
  }
}
</script>
<style lang="scss" scoped>
.tag-wrap {
  // height: 40px;
  background: var(--color-bg-1);
  // box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;
}
.tag-list {
  display: flex;
  padding: 10px 20px;
  // overflow-x: auto;
  .tag-item {
    border: 1px solid var(--color-border-1);
    font-size: 14px;
    padding: 3px 10px;
    margin-right: 10px;
    color: var(--color-text-2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    &.checked {
      color: var(--color-primary-reverse);
      background: var(--color-primary);
      border: none;
    }
    .close-icon {
      margin-left: 5px;
      transition: all 0.2s;
      &:hover {
        transform: rotateZ(90deg);
      }
    }
  }
}
.scroll-pane {
  width: 100%;
  min-width: none;
}
</style>
