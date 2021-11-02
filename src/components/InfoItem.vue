<template>
  <div>
    {{ title }}
    <span class="font-bold block">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ["title", "value"],
};
</script>

<style></style>
