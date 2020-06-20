<template>
  <header id="b-header" role="banner">
    <div class="nav-bar-btn">NavBar</div>
    <div class="b-header-content">
      This is the header
    </div>
  </header>
</template>

<script>
export default {
  name: 'BHeader',
};
</script>

<style>
header {
  box-sizing: border-box;
  width: 100%;
  display: block;
  height: 4rem;
  background-color: orange;
  display: flex;
}

.b-header .b-header-content {
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  height: 100%;
  align-items: center;
}

.b-header .nav-bar-btn {
  position: absolute;
  left: 0;
}
</style>