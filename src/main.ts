import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import AppProvider from './AppProvider.vue';
import 'virtual:windi.css';
import { routes } from './router';

createApp(AppProvider)
  .use(
    createRouter({
      routes,
      history: createWebHashHistory(),
    })
  )
  .mount('#app');
