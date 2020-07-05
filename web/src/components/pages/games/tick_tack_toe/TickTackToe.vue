<template>
  <div class="tick-tack-toe">
    <div class="game-area">
      <div class="grid">
        <div
          class="grid-cell"
          :class="{ vacant: !cell.value }"
          v-for="cell in grid"
          :key="cell.index"
          @click="onCellClick(cell)"
        >
          <BIcon class="letter" :icon="getIcon(cell.value)" />
        </div>
      </div>
      <div class="overlay main-menu" @click.prevent>
        <div class="inner">
          <button class="b-btn start-btn" @click="startChannel">Start New Game</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BIcon from '../../../layout/BIcon.vue';
import XIcon from './XIcon.vue';
import OIcon from './OIcon.vue';
import Channel from '../../../../code/channel.js';

function fill1DArray(num, callback = () => null) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(callback(i));
  }
  return arr;
}

function divMod(x, y) {
  const quotient = Math.floor(y / x);
  const rem = y % x;
  return [quotient, rem];
}

function createGrid() {
  return fill1DArray(9, index => {
    const [row, col] = divMod(3, index);
    return {
      index,
      row,
      col,
      value: null,
    };
  });
}

export default {
  name: 'TickTackToe',
  components: {
    BIcon,
  },
  data: () => {
    return {
      game: null,
      player: 0,
      letters: ['X', 'O'],
      grid: createGrid(),
      channel: new Channel(),
    };
  },
  methods: {
    onCellClick(cell) {
      if (cell.value) {
        console.dir('[TTT] Player already occupied');
        return;
      }

      cell.value = this.getLetter();
      this.swapPlayer();
    },
    swapPlayer() {
      this.player = this.player ? 0 : 1;
    },
    getLetter() {
      return this.letters[this.player];
    },
    getIcon(value) {
      switch (value) {
        case 'X':
          return XIcon;
        case 'O':
          return OIcon;
      }
      return null;
    },
    startChannel() {
      console.dir('---- starting channel')
      this.channel.create(this.$hostname, 'tic-tac-toe');
      this.channel
        .join()
        .receive('ok', resp => {
          console.dir(resp);
        })
        .receive('error', error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.tick-tack-toe .game-area {
  height: calc(100vh - 6rem);
  border: 1px solid orange;
}

.tick-tack-toe .overlay {
  height: 100%;
  top: -100%;
  position: relative;
}

.tick-tack-toe .grid {
  height: 100%;
  border: 1px solid green;

  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 33% 33% 33%;
}

.tick-tack-toe .grid-cell {
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
}

.tick-tack-toe .grid-cell.vacant:hover {
  background-color: rgba(255, 255, 255, 0.062);
}

.tick-tack-toe .grid-cell .letter {
  height: 100%;
  width: 100%;
}

.tick-tack-toe .overlay {
  background-color: rgba(0, 0, 0, 0.2);
}

.tick-tack-toe .main-menu {
  padding: 3rem;
}

.tick-tack-toe .main-menu .inner {
  height: 100%;
  width: 100%;
  background-color: rgb(80, 80, 80);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tick-tack-toe .main-menu .inner .start-btn {
  height: 4rem;
  width: auto;
  font-size: 2rem;
}
</style>