import Phaser from 'phaser';

// https://phaser.io/examples/v3/view/input/mouse/circle-hit-area
// https://phaser.io/examples/v3/view/game-objects/shapes/circle
// https://phaser.io/examples/v3/view/game-objects/graphics/primitives/rectangle-gradient-filled

const BLACK = 0x000000;
const GREEN = 0x00ff00;

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
    this._winner = '';

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

  restart() {
    this._cells.forEach(row => {
      row.forEach(cell => {
        cell.player = null;
        cell.letter = '';
      });
    });
    this._winner = null;
    this.updatePlacements();
  }

  showWinner() {
    
  }

  hideWinner() {

  }

  updatePlacements() {
    this._cells.forEach(row => {
      row.forEach(col => {
        col.text.setText(col.letter);
        if (col.isWinner) {
          col.text.setTint(GREEN);
        } else {
          col.text.clearTint();
        }
      });
    });
  }

  // returns a cells that make up a win
  getWinningCells(cell) {
    if (!cell || !cell.letter) {
      return null;
    }

    const { row, col } = cell;

    return [
      getVertical(this._cells, col),
      getHorizontal(this._cells, row),
      getDiag(this._cells, row, col),
      getAntiDiag(this._cells, row, col),
    ].find(cells => {
      return cells.length === 3 && cells.every(c => c.letter === cell.letter);
    });
  }

  setLetter(row, col, player) {
    const cell = this._cells[row][col];

    if (this._winner) {
      console.log('[TTT] Cannot continue when there is a winner. Please restart');
      return;
    }

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
    const winningCells = this.getWinningCells(cell);
    console.dir(winningCells);
    if (winningCells) {
      this._winner = this._letters[this._player];
      winningCells.forEach(cell => (cell.isWinner = true));
    } else {
      this.switchPlayer();
    }
    this.updatePlacements();
  }

  switchPlayer() {
    this._player = this._player === 0 ? 1 : 0;
  }
}

function getVertical(cells, col) {
  return cells.map(row => row[col]);
}

function getHorizontal(cells, row) {
  return cells[row];
}

function getDiag(cells, row, col) {
  const start = cells[row][col];
  const topLeft = getAllAdj(cells, row, col, -1, -1);
  const bottomRight = getAllAdj(cells, row, col, 1, 1);

  return topLeft.concat([start]).concat(bottomRight);
}

function getAntiDiag(cells, row, col) {
  const start = cells[row][col];
  const topRight = getAllAdj(cells, row, col, -1, 1);
  const bottomLeft = getAllAdj(cells, row, col, 1, -1);

  return topRight.concat([start]).concat(bottomLeft);
}

function getAllAdj(cells, row, col, dRow, dCol, journey = []) {
  const nextCell = getAdj(cells, row, col, dRow, dCol);
  if (!nextCell) {
    return journey;
  }

  journey.push(nextCell);
  return getAllAdj(cells, nextCell.row, nextCell.col, dRow, dCol, journey);
}

function getAdj(cells, row, col, dRow, dCol) {
  const r = row + dRow;
  const c = col + dCol;

  if (c < 0 || r < 0 || c > 2 || r > 2) {
    return null;
  }

  return cells[r][c];
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
  this.restart = this.$state.restart();
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
