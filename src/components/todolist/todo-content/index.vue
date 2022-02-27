<template>
  <n-data-table
    :columns="columns"
    :key="(row:Todo) => row.id"
    :data="data"
    class="my-2"
  />
</template>

<script lang="ts" setup>
import { useTodos } from '@/hooks';
import { NButton, NCheckbox } from 'naive-ui';
import { h } from 'vue';
import ShowOrEdit from './ShowOrEdit';
const todo = useTodos();

const data = todo.pagination.paginationList;

const columns = [
  {
    title: '是否完成',
    key: 'done',
    align: 'center',
    width: 100,
    render(row: Todo) {
      return h(NCheckbox, {
        checked: row.done,
        onUpdateChecked(checked: boolean) {
          todo.editItem({ ...row, done: checked });
        },
      });
    },
  },
  {
    title: '内容',
    key: 'content',
    render(row: Todo) {
      return h(ShowOrEdit, {
        value: row.content,
        onUpdateValue(v: string) {
          todo.editItem({ ...row, content: v });
        },
      });
    },
  },
  {
    title: '操作',
    key: 'actions',
    align: 'center',
    width: 84,
    render(row: Todo) {
      return h(
        NButton,
        {
          type: 'error',
          quaternary: true,
          onClick() {
            todo.deleteItemById(row.id);
          },
        },
        () => '删除'
      );
    },
  },
];
</script>
