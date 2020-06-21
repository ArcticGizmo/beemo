<template>
  <header class="b-header" role="banner">
    <div class="sidebar-btn" @click="onSidebarToggle">|||</div>
    <div class="b-header-content">
      This is the header
    </div>
  </header>
</template>

<script>
export default {
  name: 'BHeader',
  methods: {
    onSidebarToggle() {
      this.$emit('sidebar-toggle');
    },
  },
};
</script>

<style>
header {
  box-sizing: border-box;
  width: 100%;
  display: block;
  height: 4rem;
  background-color: var(--b-darkest);
  display: flex;
}

.b-header .b-header-content {
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  height: 100%;
  align-items: center;
}

.b-header .sidebar-btn {
  width: 4rem;
}
</style>