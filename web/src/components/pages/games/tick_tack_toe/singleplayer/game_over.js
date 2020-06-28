import Phaser from 'phaser';
import text from './text.js';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver', active: false });
  }

  init() {
    this.CONFIG = this.sys.game.CONFIG;
  }

  preload() {
    this.text = this.add.text(100, 100, 'Eggs').setColor(this.CONFIG.colors.BLACK);
  }

  create() {
    const x = this.CONFIG.width * 0.2;
    const y = this.CONFIG.height * 0.2;

    const width = this.CONFIG.width * 0.6;
    const height = this.CONFIG.height * 0.6;

    this.background = this.add
      .graphics({ x: 0, y: 0 })
      .fillStyle(this.CONFIG.colors.GRAY, 0.2)
      .fillRect(0, 0, this.CONFIG.width, this.CONFIG.height);

    this.border = this.add
      .graphics({ x, y })
      .fillStyle(this.CONFIG.colors.GRAY, 1)
      .fillRoundedRect(0, 0, width, height, 20);

    this.restart = text(this, this.CONFIG.centerX, this.CONFIG.centerY, 'Restart')
      .setInteractive()
      .on('pointerdown', () => {
        this.events.emit('gameover:restart');
      });
  }
}
