class Sprite {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.scale = 1;
    this.tick = 0;
    this.target = null;
    this.shouldMove = false;
    this.inPosX = false;
    this.inPosY = false;
    this.animBuffer = [];
    return this;
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
    this.ctx = ctx.getContext();
    return this;
  }
  getContext() {
    return this.ctx;
  }
  draw() {
    this.tick++;

    //console.log(this.tick + ' frame');
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.angle * Math.PI) / 180);
    //this.ctx.fillRect(-this.height/2, -this.width/2, this.height, this.width, );
    this.ctx.drawImage(this.image, -this.height * this.scale / 2, -this.width * this.scale / 2, this.height * this.scale, this.width * this.scale);
    //this.ctx.translate(0, 0);
    this.ctx.restore();

    //only move if the values dont match up
    if (this.animBuffer.length > 0)
      this.move();

    // this.ctx.fillStyle = "green";
    // this.ctx.fillRect(0, 0, this.parent.x, this.parent.y);
  }
  moveTo(x, y, angle, scale, duration) {
    //chaining animations
    this.animBuffer.push({ x: x, y: y, angle: angle, duration: duration });
    console.log(this.animBuffer);
    // console.error(this.target);
    this.shouldMove = true;
    this.newAnim = true;
    //debugger;
    return this;
  }
  move() {
    console.log('Framerate: ' + this.parent.fps);
    if (this.newAnim) {
      this.target = this.animBuffer[0];
      this.old = { x: this.x, y: this.y, angle: this.angle };
      this.gapx = Math.abs(this.target.x - this.old.x) / (this.parent.fps * this.target.duration);
      this.gapy = Math.abs(this.target.y - this.old.y) / (this.parent.fps * this.target.duration);
      this.gapangle = this.target.angle / (this.parent.fps * this.target.duration);
      this.newAnim = false;
      this.inPosX = false;
      this.inPosY = false;
    }


    console.log('old y:' + this.old.y + ' | this y:' + this.y + ' | target y:' + this.target.y + ' | with gap :' + this.gapy);
    console.log('old x:' + this.old.x + ' | this x:' + this.x + ' | target x:' + this.target.x + ' | with gap :' + this.gapx + ' | should move:' + this.shouldMove)
    console.log('Angle:' + this.angle + ' | target Angle:' + this.target.angle);
    console.log('animBuffer length:' + this.animBuffer.length);


    //checks the x axis
    if (this.x < this.target.x) {
      console.log('is moving right');
      this.x += this.gapx;
    } else if (this.x > this.target.x) {
      console.log('is moving left');
      this.x -= this.gapx;
    }
    //checks the y axis
    if (this.y < this.target.y) {
      console.log('is moving right');
      this.y += this.gapy;
    } else if (this.y > this.target.y) {
      console.log('is moving left');
      this.y -= this.gapy;
    }
    //checks the angle
    if (this.angle < this.target.angle) {
      console.log('is moving right');
      if (this.target.angle > 0)
        this.angle += this.gapangle;
      else
        this.angle -= this.gapangle;
    } else if (this.angle > this.target.angle) {
      console.log('is moving left');
      if (this.target.angle > 0)
        this.angle -= this.gapangle;
      else
        this.angle += this.gapangle;
    }

    if (Math.abs(this.x - this.target.x) <= this.gapx) {
      this.x = this.target.x;
      this.inPosX = true;
    }
    if (Math.abs(this.y - this.target.y) <= this.gapy) {
      this.y = this.target.y;
      this.inPosY = true;
    }
    if (Math.abs(this.angle - this.target.angle) <= this.gapangle) {
      this.angle = this.target.angle;
      this.inPosAngle = true;
    }

    console.log('posx:' + this.inPosX + ' | posy:' + this.inPosY + ' | posangle:' + this.inPosAngle);
    if (this.inPosX && this.inPosY && this.inPosAngle) {// && this.inPosScale){
      this.newAnim = true;
      this.animBuffer.shift();
    }


  }
  move2() {
    console.log('Framerate: ' + this.parent.fps);
    if (this.target != null) {

      if (this.newAnim) {
        this.gapx = Math.abs(this.target.x - this.old.x) / (this.parent.fps * this.target.duration);
        this.gapy = Math.abs(this.target.y - this.old.y) / (this.parent.fps * this.target.duration);
        this.gapangle = this.target.angle / (this.parent.fps * this.target.duration);
        //this.target = this.animBuffer[0];
        this.newAnim = false;
        this.inPosX = false;
        this.inPosY = false;
      }

      console.log('old y:' + this.old.y + ' | this y:' + this.y + ' | target y:' + this.target.y + ' | with gap :' + this.gapy);
      console.log('old x:' + this.old.x + ' | this x:' + this.x + ' | target x:' + this.target.x + ' | with gap :' + this.gapx + ' | should move:' + this.shouldMove)
      console.log('Angle:' + this.angle + ' | target Angle:' + this.target.angle);


      //checks the x axis
      if (this.x < this.target.x) {
        console.log('is moving right');
        this.x += this.gapx;
      } else if (this.x > this.target.x) {
        console.log('is moving left');
        this.x -= this.gapx;
      }
      //checks the y axis
      if (this.y < this.target.y) {
        console.log('is moving right');
        this.y += this.gapy;
      } else if (this.y > this.target.y) {
        console.log('is moving left');
        this.y -= this.gapy;
      }
      //checks the angle
      if (this.angle < this.target.angle) {
        console.log('is moving right');
        this.angle += this.gapangle;
      } else if (this.angle > this.target.angle) {
        console.log('is moving left');
        this.angle -= this.gapangle;
      }

      if (Math.abs(this.x - this.target.x) < this.gapx) {
        this.x = this.target.x;
        this.inPosX = true;
      }
      if (Math.abs(this.y - this.target.y) < this.gapy) {
        this.y = this.target.y;
        this.inPosY = true;
      }
      if (Math.abs(this.angle - this.target.angle) < 1) {
        this.angle = this.target.angle;
        this.inPosAngle = true;
      }
      // if (Math.abs(this.scale - this.target.scale) < gap) {
      //   this.scale = this.target.scale;
      //   this.inPosScale = false;
      // }

      if (this.inPosX && this.inPosY && this.inPosAngle)// && this.inPosScale)
        this.shouldMove = false;

      if (this.gapy < 1) {
        this.shouldMove = false;
      }

    } else
      if (this.target == null)
        console.log('target is ' + this.target)
  }
  jump() {

    this
      .moveTo(this.x, this.y - 50, 0, 0, 2.5)
      // .moveTo(this.x,this.y, 0, 0, 2.5)
      // .moveTo(this.x, this.y, 0, 0, 2.5)
      .moveTo(this.x, this.y, 0, 0, 2.5);
  }
  moveHoriz(count) {
    if (this.animBuffer.length < 1)
      if (count > 0)
        this.moveTo(this.x + count, this.y, 7.5, 0, .33).moveTo(this.x + count + 1, this.y, -7.5, 0, .1);
      else
        this.moveTo(this.x + count, this.y, -7.5, 0, .33).moveTo(this.x + count + 1, this.y, 7.5, 0, .1);

    else
      console.error('blocked becuase buffer is too deep');
  }
  moveVert(count) {
    if (this.animBuffer.length < 1)
      this.moveTo(this.x, this.y + count, 0, 0, .25);
    else
      console.error('blocked becuase buffer is too deep');
  }

}
