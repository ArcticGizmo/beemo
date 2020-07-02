<template>
  <svg id="x-icon">
    <path d="M 12,12 116,116" />
    <path d="M 116,12 12,116" />
  </svg>
</template>

<script>
export default {
  name: 'XIcon',
  viewBox: [0, 0, 256, 256],
  rotation: 0,
  scale: 0,
};
</script>

<style>
#x-icon {
  fill: none;
  stroke: var(--c-light);
  stroke-width: 5;
}
</style>