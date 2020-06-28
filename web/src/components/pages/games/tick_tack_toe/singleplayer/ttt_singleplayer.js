import Phaser from 'phaser';
import Boot from './boot.js';
import Preload from './preload.js';
import Menu from './menu.js';

const COLORS = {
  WHITE: '#ffffff',
  BLACK: '#000000',
  RED: '#ff0000',
  GREEN: '#00ff00',
  BLUE: '#0000ff',
};

export default class TTTSingleplayer {
  constructor(containerId, size = 300) {
    // scenes
    const scenes = [Boot, Preload, Menu];

    // game config
    this.config = {
      type: Phaser.AUTO,
      parent: containerId,
      width: size,
      height: size,
      scene: scenes,
      backgroundColor: COLORS.WHITE,
    };

    // create the game
    this.game = new Phaser.Game(this.config);

    this.game.CONFIG = {
      width: size,
      height: size,
      centerX: size / 2,
      centerY: size / 2,
      parentId: containerId,
      colors: COLORS,
    };

    this.game.$resize = this.resize;
  }

  resize() {
    const ratio = 1;

    // make div ful height of browser and keep the ratio of game resolution
    const div = document.getElementById(this.game.CONFIG.parentId);
    const height = div.parentElement.clientHeight;
    div.style.width = `${height * ratio}px`;
    div.style.height = `${height}px`;

    // Check if device DPI messes up the width-height-ratio
    const canvas = document.getElementsByTagName('canvas')[0];

    const dpiW = parseInt(div.style.width) / canvas.width;
    const dpiH = parseInt(div.style.height) / canvas.height;

    const scaledHeight = height * (dpiW / dpiH);
    const width = height * ratio;

    // scale canvas
    canvas.style.width = `${width}px`;
    canvas.style.height = `${scaledHeight}px`;
  }
}
