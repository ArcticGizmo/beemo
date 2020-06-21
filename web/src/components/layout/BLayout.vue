<template>
  <div class="b-layout">
    <BHeader @nav-toggle="onNavToggle"></BHeader>
    <BSidebar :show="showSidebar" @select="onRouteSelect"></BSidebar>
    <router-view class="page-view"></router-view>
    <!-- <BFooter></BFooter> -->
  </div>
</template>

<script>
import vue from 'vue';
import BHeader from './BHeader.vue';
import BSidebar from './BSidebar.vue';
import BFooter from './BFooter.vue';

export default {
  name: 'BLayout',
  components: {
    BHeader,
    BSidebar,
    BFooter,
  },
  data: () => {
    return {
      showSidebar: true,
    };
  },
  computed: {
    routes() {
      console.dir(this.$router);
      return [];
    },
  },
  methods: {
    onNavToggle() {
      this.showSidebar = !this.showSidebar;
    },
    onRouteSelect() {
      this.showSidebar = false;
    }
  },
};
</script>

<style>
body {
  margin: 0;
}

.page-view {
  background-color: yellow;
}
</style>