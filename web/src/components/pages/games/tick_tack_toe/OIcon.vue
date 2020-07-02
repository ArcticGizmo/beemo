<template>
  <svg id="o-icon">
    <circle r="50" cy="64" cx="64" />
  </svg>
</template>

<script>
export default {
  name: 'OIcon',
  viewBox: [0, 0, 256, 256],
  rotation: 0,
  scale: 0,
};
</script>

<style>
#o-icon {
  fill: none;
  stroke: var(--c-light);
  stroke-width: 5;
}
</style>