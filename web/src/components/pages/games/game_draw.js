export default class GameDraw {
  constructor(id) {
    const canvas = document.getElementById(id);
    this.ctx = canvas.getContext('2d');
    this.shapes = [];
  }

  update() {
    console.dir('--- update');

    this.shapes.forEach(s => {
      this.ctx.fillStyle = s.color;
      this.ctx.fillRect(s.x, s.y, s.width, s.height);
    });
  }

  createRect(x, y, width, height, color) {
    const rect = new Rect(x, y, width, height, color);
    this.shapes.push(rect);
  }

  removeShape(shape) {
    const index = this.shapes.indexOf(shape);
    if (index !== -1) {
      this.shapes.splice(index, 1);
    }
  }
}

class Rect {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.xMax = x + width;
    this.yMax = y + height;
  }

  isWithin(x, y) {
    return x < this.xMax && y < this.yMax && x > this.x && y > this.yMax;
  }
}
