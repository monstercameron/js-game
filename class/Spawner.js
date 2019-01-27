class Spawner {
    constructor(parent, layer) {
        this.parent = parent;
        this.layer = layer;
        this.imageList = [];
        return this;
    }
    addImage(image) {
        this.imageList.push(image);
        return this;
    }
    spawn() {

        var layer = this.parent.getLayerByName(this.layer);
        var randPos = Math.floor((Math.random() * 4) + 1);
        let sprite = new Sprite("hero", this.parent)
            .setX(100)
            .setY(100)
            .setHeight(50)
            .setWidth(50)
            .setAngle(0)
            .setScale(2)
            .setImage(img)
            .setContext(layer)
            .setX(100)
            .moveTo(100, this.parent.y, 0 ,0 ,1)
            ;
        this.parent
            .getLayerByName('enemy')
            .addSprite(sprite);

        return this;
    }
}