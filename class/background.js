class Background{
    constructor(){
        this.imgList = [];
        return this;
    }
    addImage(img){
        this.imgList.push(img);
        return this;
    }
    getImages(){
        return this.imgList;
    }
    setContext(ctx) {
      this.ctx = ctx.getContext();
      return this;
    }
    getContext() {
      return this.ctx;
    }
    draw(){
        this.ctx.drawImage(0,0,100,100);
        return this.setContext;
    }
}