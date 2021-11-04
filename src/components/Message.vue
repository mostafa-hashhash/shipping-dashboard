<template>
  <div class="flex items-center justify-center py-16 text-xl">
    <p
      v-if="message"
      class="w-full py-5 text-center"
      :class="[isError ? 'text-red-600 bg-red-100 rounded-xl' : 'text-xl']"
    >
      {{ message }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isError: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
