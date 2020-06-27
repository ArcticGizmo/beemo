<template>
  <svg id="menu-icon">
    <path d="M 40,130 H 220" />
    <path d="M 40,60 H 220" />
    <path d="M 40,200 H 220" />
  </svg>
</template>

<script>
export default {
  name: 'MenuIcon',
  viewBox: [0, 0, 256, 256],
  rotation: 0,
  scale: 0,
};
</script>

<style>
#menu-icon {
  fill: none;
  stroke: var(--c-light);
  stroke-width: 5;
}
</style>