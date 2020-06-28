<template>
  <div class="tick-tack-toe">
    <div class="game-area">
      <div :id="gameId"></div>
    </div>
  </div>
</template>

<script>
// import { launch } from './tick_tack_toe.js';
// import { launch } from "./game.js";
import TTTSingleplayer from './singleplayer/ttt_singleplayer.js';

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
    // this.game=  launch(this.gameId);
    this.game = new TTTSingleplayer(this.gameId);
    window.addEventListener('resize', () => this.game.resize());
  },
  methods: {},
};
</script>

<style>
.tick-tack-toe .game-area {
  height: calc(100vh - 6rem);
  border: 1px solid orange;
}
</style>