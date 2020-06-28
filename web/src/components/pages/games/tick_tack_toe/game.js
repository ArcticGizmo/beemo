// https://phaser.io/examples/v3/view/input/mouse/circle-hit-area
// https://phaser.io/examples/v3/view/game-objects/shapes/circle
// https://phaser.io/examples/v3/view/game-objects/graphics/primitives/rectangle-gradient-filled
import Phaser from 'phaser';

const BLACK = '#000000';

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
  createGridAreas.bind(this)(widthSpacing, heightSpacing, lineTickness);

  // const circle = this.add.circle(200, 200, 80, 0x6666ff);

  // vLineLeft.setInteractive();

  // // use this for hover
  // vLineLeft.on('pointerover', () => { console.log('pointerover'); });

  //

  // vLineLeft.input.useHandCursor = true;

  //   graphics.inputEnabled = true;
  // graphics.input.useHandCursor = true;
  // graphics.events.onInputUp.add(onClick, this);

  // create the clickable regions (change color on click)
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

function createGridAreas(widthSpacing, heightSpacing, thickness) {
  const grid = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      var style = {
        font: `bold ${heightSpacing}px Arial`,
        fill: '#fff',
      };

      const text = this.add
        .text(widthSpacing * (i + 0.5), heightSpacing * (j + 0.5), 'X', style)
        .setOrigin(0.5)
        .setInteractive()
        .on('pointerover', function() {
          this.setTint('#ababab');
        })
        .on('pointerout', function() {
          this.clearTint();
        });
      row.push(text);
    }
    grid.push(row);
  }

  return grid;
}
