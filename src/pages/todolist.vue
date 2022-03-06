<template>
  <todo-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/todolist/index.vue';
import { useTodoProvider } from '@/hooks/useTodo';

export default defineComponent({
  name: 'TodoListPage',
  components: {
    TodoList,
  },
  setup() {
    useTodoProvider();
  },
});
</script>
