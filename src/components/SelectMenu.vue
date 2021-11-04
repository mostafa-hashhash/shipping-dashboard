<template>
  <select
    class="border-2 border-black bg-white p-2 my-2 w-full rounded-lg"
    v-model="selectedOption"
    @change="emitOption"
  >
    <option value="" selected disabled hidden>{{ title }}</option>
    <option value="">All</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.title }}
    </option>
  </select>
</template>

<script>
import { ref, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    options: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    const selectedOption = ref("");

    function emitOption() {
      emit("update", selectedOption.value);
    }

    return {
      selectedOption,
      emitOption,
    };
  },
});
</script>

<style></style>
