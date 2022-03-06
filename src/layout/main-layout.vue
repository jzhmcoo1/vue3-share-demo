<template>
  <n-layout embedded>
    <n-layout-header bordered class="h-16">
      <Header />
    </n-layout-header>
    <n-layout-content class="h-[calc(100vh-4rem)]" :native-scrollbar="false">
      <n-layout has-sider position="absolute">
        <SideBar />
        <n-layout>
          <n-layout-content
            :content-style="{
              padding: '2rem 1.5rem 3.5rem 3.5rem',
            }"
          >
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </n-layout-content>
        </n-layout>
      </n-layout>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/sidebar/sidebar.vue';
import Header from '@/components/header/index.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    SideBar,
    Header,
  },
  setup() {},
});
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
