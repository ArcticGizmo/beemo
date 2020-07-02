<template>
  <div class="icon-page">
    <!-- default icon -->
    <BIcon class="icon-outline" :icon="icon" />

    <!-- larger (square) -->
    <BIcon class="icon-outline" style="width: 8rem; height: 8rem" :icon="icon" />

    <!-- larger in height -->
    <BIcon class="icon-outline" style="width: 4rem; height: 6rem" :icon="icon" />

    <!-- larger in width -->
    <BIcon class="icon-outline" style="width: 6rem; height: 4rem" :icon="icon" />

    <!-- rotation -->
    <BIcon class="icon-outline" :rotation="12.5" :icon="icon" />
    <BIcon class="icon-outline" :rotation="45" :icon="icon" />
    <BIcon class="icon-outline" :rotation="90" :icon="icon" />

    <!-- reflection -->
    <BIcon class="icon-outline" :reflectX="true" :icon="icon" />
    <BIcon class="icon-outline" :reflectY="true" :icon="icon" />
    <BIcon class="icon-outline" :reflectX="true" :reflectY="true" :icon="icon" />
  </div>
</template>

<script>
import BIcon from '../../layout/BIcon.vue';

import ControllerIcon from '../../icons/Controller.vue';

export default {
  name: 'IconPage',
  components: {
    BIcon,
  },
  data: () => {
    return {
      icon: ControllerIcon,
    };
  },
};
</script>

<style>
.icon-page {
  display: flex;
}

.icon-page .b-icon {
  height: 4rem;
  width: 4rem;
}

.icon-page .icon-outline {
  border: 1px solid orange;
}
</style>