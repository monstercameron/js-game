class Background{
    constructor(ctx){
        this.ctx = ctx;
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
}