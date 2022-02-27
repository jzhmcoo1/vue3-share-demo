<template>
  <div class="py-4 px-6 flex flex-nowrap justify-between items-center">
    <h1 class="text-xl font-bold">Vue3 Share</h1>
    <div class="flex justify-between items-center w-[3.5rem]">
      <n-button text @click="handleThemeClick">
        <n-icon size="25" v-if="theme === 1">
          <light-mode-outlined />
        </n-icon>
        <n-icon size="25" v-else>
          <dark-mode-outlined />
        </n-icon>
      </n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LightModeOutlined, DarkModeOutlined } from '@vicons/material';
import { useTheme } from '@/hooks/useTheme';

const { theme, changeTheme } = useTheme();
const handleThemeClick = () => changeTheme();
</script>
