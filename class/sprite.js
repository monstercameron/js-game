class Sprite {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
  }
  setParent(parent) {
    this.parent = parent;
    return this;
  }
  getParent() {
    return parent;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  getName() {
    return this.name;
  }
  setImage(image) {
    this.image = image;
    return this;
  }
  getImage() {
    return this.image;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  getX() {
    return this.x;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  getY() {
    return this.y;
  }
  setHeight(height) {
    this.height = height;
    return this;
  }
  getHeight() {
    return this.height;
  }
  setWidth(width) {
    this.width = width;
    return this;
  }
  getWidth() {
    return this.width;
  }
  setAngle(angle) {
    this.angle = angle;
    return this;
  }
  getAngle() {
    return this.angle;
  }
  setScale(scale) {
    this.scale = scale;
    return this;
  }
  getScale() {
    return this.scale;
  }
  setContext(ctx) {
    this.ctx = ctx.getContext("2d");
    return this;
  }
  getContext() {
    return this.ctx;
  }
  drawImage() {
    //this.ctx.clearRect(this.x, this.y, this.height, this.width + 10);
    this.ctx.drawImage(this.image, this.x, this.y, this.height, this.width);
    //this.ctx.clearRect(0, 0, this.parent.setX(), this.parent.setY());
  }
  draw() {
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.angle * Math.PI) / 180);
    //this.ctx.fillRect(-this.height/2, -this.width/2, this.height, this.width, );
    this.ctx.drawImage(this.image, -this.height/2, -this.width/2, this.height, this.width);
    this.ctx.translate(0, 0);

    // this.ctx.fillStyle = "green";
    // this.ctx.fillRect(0, 0, this.parent.x, this.parent.y);
  }
}
