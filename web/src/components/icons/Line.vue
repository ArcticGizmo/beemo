<template>
  <svg id="line-icon">
    <path d="M 40,130 H 220" />
  </svg>
</template>

<script>
export default {
  name: 'LineIcon',
  viewBox: [0, 0, 256, 256],
  rotation: 0,
  scale: 0,
};
</script>

<style>
#line-icon {
  fill: none;
  stroke: var(--c-light);
  stroke-width: 5;
}
</style>