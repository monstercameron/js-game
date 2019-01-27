class Window {
  constructor() {
    this.layerList = [];
    this.parent = document.querySelector('body');
    this.bgScrolla = -470;
    this.bgScrollb = 0;
    return this;
  }
  setFps(fps){
    this.fps = fps;
    return this;
  }
  getFps(){
    return this.fps;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  addLayers(name) {
    let layer = new Layer(this, name);
    this.layerList.push(layer);
    return this;
  }
  getLayery() {
    return this.layers;
  }
  nameLayer(pos, name) {
    for (let index = 0; index < this.LayerList.length; index++) {
      if (this.layerList[index].index == pos) {
        console.log('matched');
        this.layerList[index].name = name;
      }
    }
    return this;
  }
  insertCanvas() {
    for (let index = 0; index < this.layerList.length; index++) {
      this.parent.append(this.layerList[index].getCanvas());
    }
  }
  getLayerByIndex(index) {
    return this.LayerList[index];
  }
  getLayerByName(name) {
    for (let index = 0; index < this.layerList.length; index++) {

      //console.log(this.layerList[index]);

      if (this.layerList[index].getName() == name) {
        return this.layerList[index];
      }
    }
    console.error("Layer " + name + " Doesn't Exist");
    return null;
  }
  render() {
    for (let index = 0; index < this.layerList.length; index++) {
      var ctx = this.layerList[index].getContext("2d");
      ctx.clearRect(0, 0, this.x, this.y);
      //   ctx.save();

      var currentlayer = this.getLayerNameByCount(index);
      //console.log(this.layerBgList);

      if (typeof this.layerBgList[currentlayer] !== 'undefined')
        ctx.drawImage(this.layerBgList[currentlayer][0], 0, 0, this.x, this.y);

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
  render2() {
    //assuming back to front?
    //traversing layers
    for (let index = 0; index < this.layerList.length; index++) {

      //get layer and context
      var ctx = this.layerList[index].getContext();
      ctx.clearRect(0, 0, this.x, this.y);
      ctx.save();


      //console.log('Index: ' + index);
      //console.log(this.layerList[index]);

      //traversing layer's sprite list
      for (let a = 0; a < this.layerList[index].getSprites().length; a++) {
        this.layerList[index].getSprites()[a].draw();
      }

      //traversing the bg objs list
      //checking is list is not undefined
      if (typeof this.layerList[index].getBackground() !== 'undefined') {
        for (let a = 0; a < this.layerList[index].getBackground().getImages().length; a++) {

            //console.log(this.layerList[index].getBackground().getImages()[a]);
            ctx.drawImage(this.layerList[index].getBackground().getImages()[a], 0, this.bgScrolla, this.x, this.y);
            ctx.drawImage(this.layerList[index].getBackground().getImages()[a], 0, this.bgScrollb, this.x, this.y);

        }
      }

      if(this.layerList[index].getName() == 'hud'){
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 10, 50)
      }

      //ctx.restore();

    }


    var speed = 4;

    //console.log('bg scrolla:'+this.bgScrolla);
    if(this.bgScrolla < 470){
      this.bgScrolla += speed;
    }else if(this.bgScrolla >= 470){
      this.bgScrolla = -470;
    }
    if(this.bgScrollb < 470){
      this.bgScrollb += speed;
    }else if(this.bgScrollb >= 470){
      this.bgScrollb = -470;
    }

  }
  update() {
    if (this.spriteList.length < 1) {
      //console.error("No sprites to draw, add sprites to the window");
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
