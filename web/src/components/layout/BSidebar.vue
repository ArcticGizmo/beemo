<template>
  <div v-if="show" class="b-sidebar-wrapper">
    <div class="b-sidebar">
      <div class="element-wrapper" v-for="route in routes" :key="route.path">
        <div v-if="!route.path" class="separator">Separator</div>
        <div
          v-else-if="!route.hasChildren"
          class="route"
          :class="{ selected: route.selected }"
          @click="onItemClick(route.path)"
        >
          simple {{ route.name }}
        </div>
        <div v-else class="route-parent" :class="{ selected: route.selected }">
          <div class="heading">
            <div class="route-name">-- {{ route.name }} {{ route.open }}</div>
            <div class="arrow" @click="onArrowClick(route)">arrow</div>
          </div>
          <div v-show="route.open" class="sub-children" :class="route.open ? 'open' : 'closed'">
            <div
              class="route"
              :class="{ selected: child.selected }"
              v-for="child in route.children"
              :key="child.fullPath"
              @click="onItemClick(child.fullPath)"
            >
              c -- {{ child.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="b-sidebar-outer" @click="onOuterClick"></div>
  </div>
</template>

<script>
function parseRoutes(routes, currentRoute) {
  const currentPath = (currentRoute || {}).fullPath || '';
  return routes.map(r => {
    const children = (r.children || []).map(c => {
      const fullPath = `${r.path}${c.path}`;
      return {
        name: c.name,
        path: c.path,
        fullPath,
        selected: fullPath === currentPath,
      };
    });

    const hasSelectedChild = children.some(c => c.selected);
    const isSelected = r.path === currentPath;
    return {
      open: hasSelectedChild,
      children,
      hasChildren: children.length > 0,
      name: r.name,
      path: r.path,
      selected: isSelected,
    };
  });
}
export default {
  name: 'BNavbar',
  props: {
    show: { type: Boolean, default: false },
  },
  data: () => {
    return {
      routes: [],
    };
  },
  watch: {
    show(bool) {
      if (bool) {
        const routes = this.$router.options.routes || [];
        const route = this.$route;
        this.setRoutes(routes, route);
      }
    },
  },
  mounted() {
    const routes = this.$router.options.routes || [];
    const route = this.$route;
    this.setRoutes(routes, route);
  },
  methods: {
    setRoutes(routes, curRoute) {
      this.routes = parseRoutes(routes, curRoute);
    },
    onItemClick(path) {
      this.$emit('select', path);
      const curRoute = this.$route;
      if (!curRoute || curRoute.fullPath !== path) {
        this.$router.push(path);
      }
    },
    onOuterClick() {
      this.$emit('close');
    },
    onArrowClick(route) {
      route.open = !route.open;
    },
  },
};
</script>

<style>
.b-sidebar-wrapper {
  display: flex;
  position: absolute;
  width: 100vw;
  min-height: calc(100% - 4rem);
  background-color: rgba(0, 0, 0, 0.1);
}

.b-sidebar {
  background-color: var(--b-dark);
  position: absolute;
  width: 16rem;
  height: 100%;
}

.b-sidebar-outer {
  width: 100%;
}

.b-sidebar .outer-click {
  background: purple;
  position: fixed;
  width: 100vw;
  height: 100vh;
}

.b-sidebar .route,
.b-sidebar .route-parent {
  width: 100%;
  min-height: 4rem;
  border: 1px solid grey;
}

.b-sidebar .route:hover,
.b-sidebar .route-parent:hover {
  opacity: 0.75;
}

.b-sidebar .heading {
  display: flex;
}

.b-sidebar .heading .route-name {
  width: 100%;
}

.b-sidebar .heading .arrow {
  width: 2rem;
  border: 1px solid orange;
}

.b-sidebar .selected {
  border: 2px solid green;
}
</style>