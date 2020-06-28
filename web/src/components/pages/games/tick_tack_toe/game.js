// https://phaser.io/examples/v3/view/input/mouse/circle-hit-area
// https://phaser.io/examples/v3/view/game-objects/shapes/circle
// https://phaser.io/examples/v3/view/game-objects/graphics/primitives/rectangle-gradient-filled
import Phaser from 'phaser';

const BLACK = 0x000000;
const RED = 0xff0000;

function createEmptyCells() {
  const grid = [];
  for (let row = 0; row < 3; row++) {
    const rowList = [];
    for (let col = 0; col < 3; col++) {
      rowList.push({});
    }
    grid.push(rowList);
  }

  return grid;
}

class GameState {
  constructor(gridAreas) {
    this._player = 0;
    this._letters = ['X', 'O'];
    this._cells = createEmptyCells();

    // add game objects for each cell
    gridAreas.forEach(row => {
      row.forEach(cell => {
        this._cells[cell.row][cell.col] = {
          row: cell.row,
          col: cell.col,
          area: cell.area,
          text: cell.text,
          player: null,
          letter: '',
        };
      });
    });
  }

  updatePlacements() {
    console.dir('--- updating board');
    this._cells.forEach(row => {
      row.forEach(col => {
        col.text.setText(col.letter);
      });
    });
  }

  checkWinner() {}

  setLetter(row, col, player) {
    const cell = this._cells[row][col];

    if (!cell) {
      console.error(`[TTT] Invalid cell (${row}, ${col})`);
      return;
    }

    if (player == null) {
      console.error('[TTT] player not valid');
      return;
    }

    if (this._player !== player) {
      console.log('[TTT] Not the current players turn');
      return;
    }

    if (cell.letter) {
      console.log('[TTT] Cell already taken');
      return;
    }

    const letter = this._letters[player];
    cell.player = player;
    cell.letter = letter;
    this.switchPlayer();
    this.updatePlacements();
  }

  switchPlayer() {
    this._player = this._player === 0 ? 1 : 0;
  }
}

export function launch(containerId, width = 500, height = 500) {
  const config = {
    type: Phaser.AUTO,
    width,
    height,
    parent: containerId,
    scene: {
      preload: preload,
      create: create,
    },
  };

  return new Phaser.Game(config);
}

function preload() {
  this.width = this.cameras.main.width;
  this.height = this.cameras.main.height;
}

function create() {
  const widthSpacing = this.width / 3;
  const heightSpacing = this.height / 3;
  const lineTickness = 5;

  // create a background graphic
  createBackground.bind(this)();

  // create the bars to separate the game area
  createGridLines.bind(this)(widthSpacing, heightSpacing, lineTickness);

  // create grid areas
  const grid = createGridAreas.bind(this)(widthSpacing, heightSpacing);

  this.$state = new GameState(grid);
}

function createBackground() {
  const background = this.add.graphics();
  background.fillGradientStyle(0xff0000, 0xff0000, 0xffff00, 0xffff00, 1);
  background.fillRect(0, 0, this.width, this.height);
}

function createGridLines(widthSpacing, heightSpacing, tickness) {
  const vLineLeft = this.add.rectangle(widthSpacing, this.height / 2, tickness, this.height, BLACK);

  const vLineRight = this.add.rectangle(
    2 * widthSpacing,
    this.height / 2,
    tickness,
    this.height,
    BLACK,
  );

  const hLineTop = this.add.rectangle(this.width / 2, heightSpacing, this.width, tickness, BLACK);

  const hLineBottom = this.add.rectangle(
    this.width / 2,
    2 * heightSpacing,
    this.width,
    tickness,
    BLACK,
  );

  return [vLineLeft, vLineRight, hLineTop, hLineBottom];
}

function createGridAreas(widthSpacing, heightSpacing) {
  const grid = [];
  const colOffset = widthSpacing / 2;
  const rowOffset = heightSpacing / 2;
  for (let row = 0; row < 3; row++) {
    const rowList = [];

    for (let col = 0; col < 3; col++) {
      const rect = this.add
        .rectangle(
          widthSpacing * col + colOffset,
          heightSpacing * row + rowOffset,
          widthSpacing,
          heightSpacing,
          null,
          0,
        )
        .setInteractive()
        .on('pointerdown', () => {
          this.$state.setLetter(row, col, this.$state._player);
        });

      var style = {
        font: `bold ${heightSpacing}px Arial`,
        fill: '#fff',
      };

      const text = this.add
        .text(widthSpacing * (col + 0.5), heightSpacing * (row + 0.5), '', style)
        .setOrigin(0.5);

      rowList.push({
        row,
        col,
        area: rect,
        text,
      });
    }
    grid.push(rowList);
  }

  return grid;
}
