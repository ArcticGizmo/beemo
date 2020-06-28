<template>
  <div class="tick-tack-toe">
    <div class="game-area">
      <div :id="gameId"></div>
    </div>
  </div>
</template>

<script>
// import { launch } from './tick_tack_toe.js';
import { launch } from "./game.js";

export default {
  name: 'TickTackToe',
  data: () => {
    return {
      gameId: 'tick_tack_toe',
      game: null,
    };
  },
  mounted() {
    // this.game = launch(this.gameId);
    this.game=  launch(this.gameId);
  },
  methods: {},
};
</script>

<style>
#game_tick_tack_toe {
  border: 1px solid orange;
}
</style>