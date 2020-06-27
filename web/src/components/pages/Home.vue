<template>
  <div class="home-page">
    <div class="list-wrapper">
      <button v-on:click="add()">Add</button>
      <transition-group name="list" tag="div">
        <div class="card" v-for="(item, index) in items" :key="index">Id: {{ item.id }}</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => {
    return {
      items: [],
    };
  },
  methods: {
    add() {
      this.items.push(this.items.length + 1);
    },
  },
};
</script>

<style>
.list-wrapper {
  border: 1px solid orange;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/* .card {
  transition: all 0.5s;
} */
.card-enter, .card-leave-to
/* .card-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.card-enter-to {
  opacity: 1;
  transform: scale(1);
}

.card-leave-active {
  /*position: absolute;*/
}

.card-move {
  opacity: 1;
  transition: all 0.5s;
}
</style>