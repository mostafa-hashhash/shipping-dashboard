<template>
  <div class="Spinner"></div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style lang="postcss" scoped>
.Spinner {
  @apply inline-block;
  border-radius: 2em;
  border-color: transparent transparent #000 #000;
  border-style: solid;
  border-width: 0.15em;
  animation: spinner-rotation 0.75s infinite;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@keyframes spinner-rotation {
  to {
    transform: rotate(360deg);
  }
}
</style>
