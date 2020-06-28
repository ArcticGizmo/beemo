// https://phaser.io/examples/v3/view/input/mouse/circle-hit-area
// https://phaser.io/examples/v3/view/game-objects/shapes/circle
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
  // create a background graphic
  const background = this.add.graphics();
  background.fillGradientStyle(0xff0000, 0xff0000, 0xffff00, 0xffff00, 1);
  background.fillRect(0, 0, this.width, this.height);

  // create the bars to separate the game area
  const widthSpacing = this.width / 3;
  const heightSpacing = this.height / 3;
  const barThickness = 5;

  // const circle = this.add.circle(200, 200, 80, 0x6666ff);

  const vLineLeft = this.add.rectangle(
    widthSpacing,
    this.height / 2,
    barThickness,
    this.height,
    BLACK,
  );

  const vLineRight = this.add.rectangle(
    2 * widthSpacing,
    this.height / 2,
    barThickness,
    this.height,
    BLACK,
  );

  const hLineTop = this.add.rectangle(
    this.width / 2,
    heightSpacing,
    this.width,
    barThickness,
    BLACK,
  )

  const hLineBottom = this.add.rectangle(
    this.width / 2,
    2 * heightSpacing,
    this.width,
    barThickness,
    BLACK,
  )

  // create the clickable regions (change color on click)
}
