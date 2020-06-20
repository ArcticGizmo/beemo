<template>
  <div v-show="show" class="b-navbar">
    This is a navbar
  </div>
</template>

<script>
export default {
  name: 'BNavbar',
  props: {
    show: {type: Boolean, default: false},
  },
  methods: {

  }
};
</script>

<style>
.b-navbar {
  background-color: green;
  position: fixed;
  width: 10rem;
  height: 100%;
}
</style>