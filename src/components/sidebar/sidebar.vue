<template>
  <n-layout-sider
    collapse-mode="transform"
    :collapsed-width="0"
    :width="240"
    :show-collapsed-content="false"
    show-trigger="arrow-circle"
    :content-style="{ padding: '0.25rem', height: 'calc(100vh - 4rem)' }"
    collapsed-trigger-style="right:-1.25rem"
    bordered
  >
    <n-menu :options="sidebarItems" />
  </n-layout-sider>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { sideBars } from './';
export default defineComponent({
  name: 'SideBar',
  setup() {
    const sidebarState = reactive({
      sidebarItems: sideBars,
    });
    return {
      ...toRefs(sidebarState),
    };
  },
});
</script>
