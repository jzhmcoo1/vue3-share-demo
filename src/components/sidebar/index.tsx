import { VNode } from 'vue';
import { RouterLink } from 'vue-router';
import { HomeOutlined, ChecklistOutlined } from '@vicons/material';

interface SideBarItem {
  label: string | (() => VNode);
  key: string;
  icon: () => VNode;
  children?: SideBarItem[];
}

export const sideBars: SideBarItem[] = [
  {
    label: () => <RouterLink to='/intro'>组合式API</RouterLink>,
    key: 'intro',
    icon: () => <HomeOutlined />,
  },
  {
    label: () => <RouterLink to='/todolist'>Todolist Demo</RouterLink>,
    key: 'todolist',
    icon: () => <ChecklistOutlined />,
  },
];
