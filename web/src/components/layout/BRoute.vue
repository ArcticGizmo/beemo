<template>
  <div class="b-route">
    <div class="header">
      <BIcon class="route-icon" :icon="icon" />
      <div class="name">{{ route.name }}</div>
      <BIcon class="arrow-icon" :icon="chevron" :rotation="180" />
    </div>
    <div class="children"></div>
  </div>
</template>

<script>
import BIcon from './BIcon.vue';
import ControllerIcon from '../icons/Controller.vue';
import ChevronIcon from '../icons/Chevron.vue'

export default {
  name: 'BRoute',
  components: {
    BIcon,
  },
  data: () => {
    return {
      icon: ControllerIcon,
      chevron: ChevronIcon,
    };
  },
  props: {
    route: { type: Object, required: true },
  },
};
</script>

<style>
.b-route {
  width: 100%;
  height: 2rem;
  border: 1px solid green;
}

.b-route .header {
  display: flex;
}

.b-route .route-icon {
  width: 3rem;
}

.b-route .name {
  padding-left: 0.5rem;
  line-height: 2rem;
  width: 100%;
}

.b-route .arrow-icon {
  width: 2rem;
  padding: 0 10px;
}
</style>