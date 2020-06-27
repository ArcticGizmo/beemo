<template>
  <component
    class="b-icon"
    :is="icon"
    :viewBox="computedViewBox"
    :preserveAsectRatio="aspectRatio"
    :transform="transform"
  >
  </component>
</template>

<script>
function parseViewBox(value) {
  if (!isNaN(value)) {
    return [0, 0, value, value];
  }

  if (value.length === 2) {
    return [0, 0, value[0], value[1]];
  }

  return value;
}

function parseScale(value) {
  if (!isNaN(value)) {
    return { x: value, y: value };
  }

  return {
    x: value.x || 1,
    y: value.y || 1,
  };
}

const ASPECT_RATIOS = {
  fill: 'none',
  left: 'xMinYMid meet',
  top: 'xMidYMin meet',
  right: 'xMaxYMix meet',
  bottom: 'xMidYMax meet',
  center: '',
};

export default {
  name: 'BIcon',
  props: {
    icon: { type: Object, default: null },
    viewBox: { type: [Array, Number], default: null },
    rotation: { type: Number, default: null },
    scale: { type: [Object, Number], default: null },
    aspectRatio: { type: String, default: 'center' },
  },
  computed: {
    computedViewBox() {
      const icon = this.icon || {};
      return parseViewBox(this.viewBox || icon.viewBox);
    },
    computedScale() {
      const icon = this.icon || {};
      return parseScale(this.scale || icon.scale || 1);
    },
    computedRotation() {
      const icon = this.icon || {};
      return this.rotation != null ? this.rotation : icon.rotation;
    },
    transform() {
      const rotation = `rotate(${this.computedRotation})`;
      const scale = `scale(${this.computedScale.x} ${this.computedScale.y})`;
      return [rotation, scale];
      s;
    },
  },
};
</script>

<style>
.b-icon {
  height: 2rem;
  transform-origin: 50% 50%;
}
</style>