import Phaser from 'phaser';

export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot', active: true });
  }

  init() {
    this.resize = this.sys.game.$resize;
  }

  preload() {}

  create() {
    this.resize();
    this.scene.start('Preload');
  }
}
