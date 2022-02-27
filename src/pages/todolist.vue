<template>
  <todo-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/todolist/index.vue';

export default defineComponent({
  name: '',
  components: {
    TodoList,
  },
  setup() {},
});
</script>
