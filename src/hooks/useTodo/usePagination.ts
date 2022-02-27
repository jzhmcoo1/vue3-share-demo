import { computed, ref, Ref } from 'vue';

export default function usePagination(todoList: Ref<Todo[]>) {
  const pagination = ref({
    currentPage: 1,
    pageSizes: [5, 10, 15],
    pageSize: 10,
  });

  const paginationList = computed(() => {
    return todoList.value.slice(
      (pagination.value.currentPage - 1) * pagination.value.pageSize,
      pagination.value.currentPage * pagination.value.pageSize
    );
  });

  const total = computed(() => todoList.value.length);

  return {
    pagination,
    paginationList,
    total,
  };
}
