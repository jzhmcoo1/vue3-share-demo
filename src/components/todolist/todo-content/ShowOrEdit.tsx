import { defineComponent, nextTick, ref } from 'vue';
import { NInput } from 'naive-ui';

export default defineComponent({
  props: {
    value: [String],
    onUpdateValue: [Function],
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref<HTMLInputElement | null>(null);
    const inputValue = ref(props.value);
    function handleOnClick() {
      isEdit.value = true;
      nextTick(() => {
        inputRef.value!.focus();
      });
    }
    function handleChange() {
      props.onUpdateValue!(inputValue.value);
      isEdit.value = false;
    }
    return () => (
      <div onClick={handleOnClick}>
        {isEdit.value ? (
          <NInput
            ref={inputRef}
            value={inputValue.value}
            onUpdateValue={(v) => (inputValue.value = v)}
            onChange={handleChange}
            onBlur={handleChange}
          />
        ) : (
          props.value
        )}
      </div>
    );
  },
});
