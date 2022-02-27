<template>
  <n-pagination
    class="flex justify-end"
    :page-sizes="pagination.pageSizes"
    show-size-picker
    :on-update:page-size="handleUpdatePageSize"
    :item-count="total"
    :page-size="pagination.pageSize"
    :on-update:page="handeUpdatePage"
    :page="pagination.currentPage"
  >
    <template #prefix="{ itemCount }"> 总数: {{ itemCount }}</template>
  </n-pagination>
</template>

<script lang="ts" setup>
import { useTodos } from '@/hooks';

const todo = useTodos();

const pagination = todo.pagination.pagination;
const total = todo.pagination.total;

const handleUpdatePageSize = (pageSize: number) => {
  pagination.value.pageSize = pageSize;
};

const handeUpdatePage = (page: number) => {
  pagination.value.currentPage = page;
};
</script>
