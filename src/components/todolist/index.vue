<template>
  <div>
    <TodoHeader />
    <TodoContent />
    <TodoFooter />
  </div>
</template>

<script lang="ts" setup>
import TodoHeader from './todo-header/index.vue';
import TodoFooter from './todo-footer/index.vue';
import TodoContent from './todo-content/index.vue';
</script>
