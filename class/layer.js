class Layer {
    constructor(parent, name) {
        this.parent = parent;
        this.name = name;
        this.spriteList = [];
        this.createCanvas();
    }
    setParent(parent){
        this.parent = parent;
        return this;
    }
    getparent(){
        return this.parent;
    }
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = "layer:" + this.parent.layerList.length;
        this.canvas.width = this.parent.x;
        this.canvas.height = this.parent.y;
        this.canvas.classList.add("bg-dark", "stacked");
    }
    getName() {
        return this.name;
    }
    getCanvas() {
        return this.canvas;
    }
    getContext() {
        return this.canvas.getContext('2d');
    }
    getSprites(){
        return this.spriteList;
    }
    addSprite(sprite) {
        this.spriteList.push(sprite);
        return this;
    }
    addBackground(background){
        this.background = background;
        //console.log(this.background);
        return this;
    }
    getBackground(){
        return this.background;
    }
}