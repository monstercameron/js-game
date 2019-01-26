class Window {
  constructor() {
    this.layerDict = {};
    this.layerBgList = {};
    this.layerList = [];
    this.spriteList = [];
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setLayers(count) {
    this.layers = count;
    return this;
  }
  getLayery() {
    return this.layers;
  }
  nameLayer(name, layer) {
    this.layerDict[name] = layer;
    return this;
  }
  getLayerIndexByName(name) {
    return this.layerDict[name];
  }
  getLayerNameByCount(count) {
    return Object.keys(this.layerDict)[count];
  }
  addLayerBgList(layerName, bgList) {
    this.layerBgList[layerName] = bgList;
    return this;
  }
  getCanvas(count) {
    for (let index = 0; index < this.layerList.length; index++) {
      if (this.layerList[index].id == "layer:" + count) {
        return this.layerList[index];
      }
    }
    return null;
  }
  createCanvas() {
    for (let index = 0; index < this.layers; index++) {
      //selecting body element
      let body = document.querySelector("body");
      //creating new canvas element
      let canvas = document.createElement("canvas");
      canvas.id = "layer:" + index;
      canvas.width = this.x;
      canvas.height = this.y;
      canvas.classList.add("bg-dark", "stacked");
      //saving to layer list
      this.layerList.push(canvas);
      //appending canvas into html body element
      body.prepend(canvas);
    }

    return this;
  }
  addSprite(sprite) {
    this.spriteList.push(sprite);
    return this;
  }
  render() {
    for (let index = 0; index < this.layerList.length; index++) {
      var ctx = this.layerList[index].getContext("2d");
      ctx.clearRect(0, 0, this.x, this.y);
      //   ctx.save();

      var currentlayer = this.getLayerNameByCount(index);
      //console.log(currentlayer);

      //ctx.drawImage(this.layerBgList[currentlayer][0], 0, 0, this.x, this.y);
      
      for (let index = 0; index < this.spriteList.length; index++) {
        // this.spriteList[index].drawImage();

        ctx.save();

        if (this.spriteList[index].getContext() == ctx)
          this.spriteList[index].draw();

        ctx.restore();
      }
    }
    return this;
  }
  update() {
    if (this.spriteList.length < 1) {
      console.error("No sprites to draw, add sprites to the window");
    } else {
      for (let index = 0; index < this.spriteList.length; index++) {
        // this.spriteList[index].drawImage();
        //this.blank();
        this.spriteList[index].draw();
      }
      return this;
    }

    //requestAnimationFrame(this.update);
  }
}
