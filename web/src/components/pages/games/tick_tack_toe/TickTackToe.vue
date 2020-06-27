<template>
  <div class="tick-tack-toe">
    <button @click="drawRect">Draw Rect</button>
    <div class="game-area">
      <canvas id="game_tick_tack_toe" width="500" height="500" />
    </div>
  </div>
</template>

<script>
import GameDraw from '../game_draw.js';

export default {
  name: 'TickTackToe',
  data: () => {
    return {
      game: null,
    };
  },
  mounted() {
    this.game = new GameDraw('game_tick_tack_toe');
  },
  methods: {
    drawRect() {
      console.dir('-----');
      this.game.createRect(100, 100, 100, 100, 'rgb(255, 0, 0)')
      this.game.update();
    },
  },
};
</script>

<style>
#game_tick_tack_toe {
  border: 1px solid orange;
}
</style>