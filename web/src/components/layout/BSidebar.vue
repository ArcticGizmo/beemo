<template>
  <div v-show="show" class="b-sidebar">
    <div class="sidebar-element" v-for="route in routes" :key="route.path">
      <div class="separator" v-if="route.separator === true"></div>
      <router-link v-else :to="route.path">
        {{route.name}}
      </router-link>
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
      this.$emit('select', route)
    }
  }
};
</script>

<style>
.b-sidebar {
  background-color: green;
  position: fixed;
  width: 12rem;
  height: 100%;
}

.b-sidebar .element {
  height: 2rem;
  background-color: rgb(80, 80, 80);
}

.b-sidebar .element:hover {
  opacity: 0.75;
}
</style>