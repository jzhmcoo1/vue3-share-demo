<template>
  <App />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProvider from './hooks';
import App from './App.vue';

export default defineComponent({
  name: 'AppProvider',
  setup() {
    useProvider();
  },
  components: { App },
});
</script>
