<script setup lang="ts">
import TodoList from '@/components/todolist/index.vue';
import { darkTheme } from 'naive-ui';
import { useTheme } from './hooks';
import { Theme } from '@/hooks/useTheme';

const { theme } = useTheme();
</script>

<template>
  <n-config-provider :theme="theme === Theme.light ? null : darkTheme">
    <n-global-style />
    <div class="max-w-[50rem] mx-auto my-2">
      <todo-list />
    </div>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
