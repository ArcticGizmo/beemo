<template>
  <div class="b-layout">
    <BHeader></BHeader>
    <BNavbar></BNavbar>
    <!-- <BFooter></BFooter> -->
  </div>
</template>

<script>
import BHeader from './BHeader.vue';
import BNavbar from './BNavbar.vue';
import BFooter from './BFooter.vue';

export default {
  name: 'BLayout',
  components: {
    BHeader,
    BNavbar,
    BFooter,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>