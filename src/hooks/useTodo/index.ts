import { inject, ref, watchEffect, provide, Ref, ComputedRef } from 'vue';
import storage from '@/utils/storage';
import { nanoid } from 'nanoid';
import useSearch from './useSearch';
import usePagination from './usePagination';

const TODOLIST_KEY = 'todo-list';
const TodoSymbol = Symbol('todo symbol');

const initTodoList: () => Todo[] = () => [
  { id: nanoid(), content: '吃饭', done: false },
  { id: nanoid(), content: '睡觉', done: false },
  { id: nanoid(), content: '敲代码', done: false },
];

interface TodoProvider {
  addTodoItem: (todo: Todo) => void;
  findItemIndexById: (id: Todo['id']) => number;
  deleteItemById: (id: Todo['id']) => boolean;
  editItem: (todo: Todo) => boolean;
  search: {
    searchQuery: Ref<string>;
    filteredTodos: ComputedRef<Todo[]>;
  };
  pagination: {
    pagination: Ref<{
      currentPage: number;
      pageSizes: number[];
      pageSize: number;
    }>;
    paginationList: ComputedRef<Todo[]>;
    total: ComputedRef<number>;
  };
}

export const useTodoProvider = () => {
  const todoList = ref<Todo[]>(
    storage.fetch<Todo[]>(TODOLIST_KEY) || initTodoList()
  );

  const addTodoItem = (todo: Todo) => {
    todoList.value.unshift(todo);
  };

  const findItemIndexById = (id: Todo['id']) => {
    return todoList.value.findIndex((item) => item.id === id);
  };

  const deleteItemById = (id: Todo['id']) => {
    const index = findItemIndexById(id);
    if (index === -1) {
      return false;
    } else {
      todoList.value.splice(index, 1);
    }
  };

  const editItem = ({ id, done, content }: Todo) => {
    const index = findItemIndexById(id);
    if (index === -1) {
      return false;
    } else {
      todoList.value[index] = { id, done, content };
      return true;
    }
  };

  watchEffect(() => {
    storage.save<Todo[]>(TODOLIST_KEY, todoList.value);
  });

  const search = useSearch(todoList);
  const pagination = usePagination(search.filteredTodos);

  provide(TodoSymbol, {
    addTodoItem,
    findItemIndexById,
    deleteItemById,
    editItem,
    search,
    pagination,
  });
};

export const useTodos = () => {
  const todoContext = inject<TodoProvider>(TodoSymbol);
  if (!todoContext) {
    throw new Error('useTodoInject must be used after useTodoProvider');
  }
  return todoContext;
};
