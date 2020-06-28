import Phaser from 'phaser';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'Menu', active: false });
  }

  init() {
    this.CONFIG = this.sys.game.CONFIG;
  }

  preload() {}

  create() {
    this.text = this.add.text(0, 0, 'Menu').setColor(this.CONFIG.colors.BLACK);
  }
}
