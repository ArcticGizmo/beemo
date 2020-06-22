<template>
  <header class="b-header" role="banner">
    <div class="sidebar-btn" @click="onSidebarToggle">|||</div>
    <BIcon class="logo" :icon="beemoIcon" />
    <slot class="b-header-content"></slot>
  </header>
</template>

<script>
import BIcon from '../layout/BIcon.vue';
import BeemoIcon from '../icons/beemo.vue';

export default {
  name: 'BHeader',
  components: {
    BIcon,
  },
  data: () => {
    return {
      beemoIcon: BeemoIcon,
    };
  },
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

.b-header .logo {
  fill: #007fff;
  /* fill: #f8ca0f; */
  height: 100%;
}
</style>