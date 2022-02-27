<template>
  <n-page-header class="mb-3">
    <template #title> Vue3 Todolist </template>
    <template #extra>
      <n-button text @click="handleThemeClick">
        <template v-if="theme === 1" #icon>
          <light-mode-outlined />
        </template>
        <template #icon v-else>
          <dark-mode-outlined />
        </template>
      </n-button>
    </template>
  </n-page-header>
  <div class="flex">
    <n-input
      v-model:value="inputValue"
      :placeholder="placeholder"
      @keyup.enter="handleAdd"
      @input="handleFilter"
    />
    <n-button @click="isFiltered = !isFiltered">{{ btnText }}</n-button>
  </div>
</template>

<script lang="ts" setup>
import { useTodos, useTheme } from '@/hooks';
import { computed, ref, watch } from 'vue';
import { nanoid } from 'nanoid';
import { LightModeOutlined, DarkModeOutlined } from '@vicons/material';

// theme

const { theme, changeTheme } = useTheme();
const handleThemeClick = () => changeTheme();

// todos

const todo = useTodos();
const inputValue = ref('');

const isFiltered = ref(false);

const btnText = computed(() => (isFiltered.value ? '切换添加' : '切换搜索'));

const placeholder = computed(() =>
  isFiltered.value ? '输入以搜索内容' : '输入待办事项，回车以添加'
);

watch(
  () => isFiltered.value,
  (newVal) => {
    if (newVal === false) {
      todo.search.searchQuery.value = '';
    }
    if (newVal === true) {
      todo.search.searchQuery.value = inputValue.value;
    }
  }
);

const handleAdd = () => {
  if (!isFiltered.value && inputValue.value.trim() !== '') {
    todo.addTodoItem({
      id: nanoid(),
      content: inputValue.value,
      done: false,
    });
    inputValue.value = '';
  }
};

const handleFilter = () => {
  if (isFiltered.value) {
    todo.search.searchQuery.value = inputValue.value;
  }
};
</script>
