import { Ref, ref, computed } from 'vue';

export default function useSearch(todolist: Ref<Todo[]>) {
  const searchQuery = ref('');

  const filteredTodos = computed(() =>
    todolist.value.filter((todo) => todo.content.includes(searchQuery.value))
  );

  return {
    searchQuery,
    filteredTodos,
  };
}
