<template>
  <div class="icon-page">
    Default
    <div class="icons">
      <BIcon class="icon-outline" :icon="icon" />
    </div>

    Larger square
    <div class="icons">
      <BIcon class="icon-outline" style="width: 8rem; height: 8rem" :icon="icon" />
    </div>

    Larger height (center)
    <div class="icons">
      <BIcon class="icon-outline" style="width: 4rem; height: 6rem" :icon="icon" />
    </div>

    Larger width (center)
    <div class="icons">
      <BIcon class="icon-outline" style="width: 6rem; height: 4rem" :icon="icon" />
    </div>
    Rotations
    <div class="icons">
      <BIcon class="icon-outline" :rotation="12.5" :icon="icon" />
      <BIcon class="icon-outline" :rotation="45" :icon="icon" />
      <BIcon class="icon-outline" :rotation="90" :icon="icon" />
    </div>

    Reflections
    <div class="icons">
      <BIcon class="icon-outline" :reflectX="true" :icon="icon" />
      <BIcon class="icon-outline" :reflectY="true" :icon="icon" />
      <BIcon class="icon-outline" :reflectX="true" :reflectY="true" :icon="icon" />
    </div>

    Fill and center
    <div class="icons">
      <BIcon class="icon-outline" style="height: 6rem" :icon="icon" aspectRatio="fill" />
      <BIcon class="icon-outline" style="height: 6rem" :icon="icon" aspectRatio="center" />
      <BIcon class="icon-outline" style="width: 6rem" :icon="icon" aspectRatio="fill" />
      <BIcon class="icon-outline" style="width: 6rem" :icon="icon" aspectRatio="center" />
    </div>
    Left and Right
    <div class="icons">
      <BIcon class="icon-outline" style="width: 6rem" :icon="icon" aspectRatio="left" />
      <BIcon class="icon-outline" style="width: 6rem" :icon="icon" aspectRatio="right" />
    </div>
    Top and Bottom
    <div class="icons">
      <BIcon class="icon-outline" style="height: 6rem" :icon="icon" aspectRatio="top" />
      <BIcon class="icon-outline" style="height: 6rem" :icon="icon" aspectRatio="bottom" />
    </div>

    Width only
    <div class="icons">
      <div class="width-container">
        <BIcon class="icon-outline" style="width: 100%; height: auto" :icon="icon" />
      </div>
    </div>
    Height only
    <div class="icons">
      <div class="height-container">
        <BIcon class="icon-outline" style="height: 100%; width: auto" :icon="icon" />
      </div>
    </div>
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
.icon-page .icons {
  display: flex;
  flex-wrap: wrap;
}

.icon-page .b-icon {
  height: 4rem;
  width: 4rem;
}

.icon-page .width-container {
  width: 75px;
  height: 150px;
  border: 1px solid green;
}

.icon-page .height-container {
  height: 75px;
  width: 150px;
  border: 1px solid green;
}


.icon-page .icon-outline {
  border: 1px solid orange;
}
</style>