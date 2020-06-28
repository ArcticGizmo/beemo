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
    this.text = this.add
      .text(this.CONFIG.centerX, this.CONFIG.centerY, 'Menu')
      .setOrigin(0.5)
      .setColor(this.CONFIG.colors.BLACK)
      .setInteractive()
      .on('pointerdown', () => this.openGameOver());
  }

  openGameOver() {
    this.scene.pause();
    this.scene.launch('GameOver');

    this.scene.get('GameOver').events.on('gameover:restart', () => this.closeGameOver());
  }

  closeGameOver() {
    this.scene.stop('GameOver');
    this.scene.resume();
  }
}
