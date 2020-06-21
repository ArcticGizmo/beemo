<template>
  <div v-show="show" class="b-sidebar-wrapper" @click.capture="onOuterClick">
    <div class="b-sidebar">
      <div class="element-wrapper" v-for="route in routes" :key="route.path">
        <div class="separator" v-if="route.separator === true"></div>
        <router-link class="item" v-else :to="route.path" tag="div">
          <span class="icon">%%</span>
          <span class="name">{{ route.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BNavbar',
  props: {
    show: { type: Boolean, default: false },
  },
  computed: {
    routes() {
      return this.$router.options.routes || [];
    },
  },
  methods: {
    onItemClick(route) {
      this.$emit('select', route);
    },
    onOuterClick() {
      this.$emit('close');
    }
  },
};
</script>

<style>
.b-sidebar-wrapper {
  position: absolute;
  width: 100vw;
  min-height: calc(100% - 4rem);
  background-color: rgba(0, 0, 0, 0.062);
}

.b-sidebar {
  background-color: var(--b-dark);
  position: absolute;
  width: 16rem;
  height: 100%;
}

.b-sidebar .outer-click {
  background: purple;
  position: fixed;
  width: 100vw;
  height: 100vh;
}

.b-sidebar .item {
  height: 4rem;
  border: 1px solid grey;
}

.b-sidebar .item:hover {
  opacity: 0.75;
}

.b-sidebar .element .icon {
  width: 2rem;
}
</style>