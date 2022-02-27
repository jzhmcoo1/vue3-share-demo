<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import { useTheme } from './hooks';
import { Theme } from '@/hooks/useTheme';

const { theme } = useTheme();
</script>

<template>
  <n-config-provider :theme="theme === Theme.light ? null : darkTheme">
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>

<style>
</style>
