<template>
  <div>
    <n-h3 prefix="bar">ref</n-h3>
    <n-button @click="counter++">counter + 1</n-button>
    <n-h4>Counter: {{ counter }}</n-h4>

    <n-h3 prefix="bar">reactive</n-h3>
    <n-h4>使用toRefs可以解构reactive，且保持响应式</n-h4>
    <n-button @click="foo++">foo + 1</n-button>
    <n-button @click="bar++">bar + 1</n-button>
    <n-h5>state.foo: {{ foo }}</n-h5>
    <n-h5>state.bar: {{ bar }}</n-h5>

    <n-h3 prefix="bar">computed</n-h3>
    <n-h5>{{ msg }}</n-h5>

    <n-h3 prefix="bar">watch</n-h3>
    <n-button @click="watchObj.attributes.name = 'Alex'">change Name</n-button>
    <n-h5>Name: {{ watchObj.attributes.name }}</n-h5>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs, watch } from 'vue';
import { cloneDeep } from '@/utils/cloneDeep';

export default defineComponent({
  name: 'Intro',
  setup(props, context) {
    console.log(props, context);

    const counter = ref(0);

    const state = reactive({
      foo: 1,
      bar: 2,
    });
    // const { foo, bar } = state;

    const watchObj = reactive({
      id: 1,
      attributes: {
        name: 'Bob',
      },
    });

    const msg = computed(() => {
      return `Hello World ${counter.value} times`;
    });

    watch(
      () => watchObj,
      (state, prevState) => {
        console.log(
          'not deep',
          state.attributes.name,
          prevState.attributes.name
        );
      }
    );

    watch(
      () => watchObj,
      (state, prevState) => {
        // state和prevState返回的是对象的当前值和上一个状态的引用，
        console.log('deep', state.attributes.name, prevState.attributes.name);
        // deep Alex Alex
      },
      { deep: true }
    );
    watch(
      () => cloneDeep(watchObj), // 为了完全监听深度嵌套的对象，需要对值进行深拷贝
      (state, prevState) => {
        // state和prevState返回的是对象的当前值和上一个状态的引用，
        // 为了完全监听深度嵌套的对象，需要对值进行深拷贝
        console.log(
          'deepclone + deep',
          state.attributes.name,
          prevState.attributes.name
        );
        // deep Alex Alex
      },
      { deep: true }
    );

    return {
      counter,
      ...toRefs(state),
      // foo,
      // bar,
      msg,
      watchObj,
    };
  },
});
</script>
