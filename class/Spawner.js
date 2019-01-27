class Spawner {
    constructor(parent, layer) {
        console.info('Spawning rand');
        this.parent = parent;
        this.layer = layer;
        return this;
    }
    setParent(parent) {
        this.parent = parent;
        return this;
    }
    getParent() {
        return this.parent;
    }
    addImage(image) {
        this.image = image;
        return this;
    }
    getImage(){
        return this.image;
    }
    spawn(posx, posy) {

        var layer = this.parent.getLayerByName(this.layer);
        this.sprite = new Sprite("hero", this.parent)
            .setY(posy)
            .setX(posx)
            .setHeight(150)
            .setWidth(80)
            .setAngle(90)
            .setScale(1)
            .setImage(img)
            .setContext(layer)
            .moveTo(posx, this.parent.y, 0, 0, 2)
            ;
        //console.error(this.sprite.getX());
        this.parent
            .getLayerByName('enemy')
            .addSprite(this.sprite);

        return this;
    }
}