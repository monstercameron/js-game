class Layer {
    constructor(parent, name) {
        this.parent = parent;
        this.name = name;
        this.spriteList = [];
        this.createCanvas();
    }
    createSpawner(name, img) {
        this.spawn = new Spawner(this.parent, name).addImage(img);
        return this;
    }
    getSpawn() {
        //console.log(this.spawn);
        return this.spawn;
    }
    getSpriteByName(name) {
    }
    setParent(parent) {
        this.parent = parent;
        return this;
    }
    getparent() {
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
    getSprites() {
        return this.spriteList;
    }
    addSprite(sprite) {
        this.spriteList.push(sprite);
        return this;
    }
    addBackground(background) {
        this.background = background;
        //console.log(this.background);
        return this;
    }
    getBackground() {
        return this.background;
    }
    levelSpawnerLogic() {

        //console.error(this.parent.y + ' | ' + this.getSpawn().sprite.y);
        if (Math.abs(this.getSpawn().sprite.y - this.parent.y) < 1) {
            //console.error('clear');

            var randPos = Math.floor((Math.random() * 4) + 1);
            //var randPos = 4;
            switch (randPos) {
                case 1:
                    this.spawn.spawn(80, 0)
                    break;
                case 2:
                    this.spawn.spawn(240, 0)
                    break;
                case 3:
                    this.spawn.spawn(400, 0)
                    break;
                case 4:
                    this.spawn.spawn(560, 0)
                    break;
                default:
                    this.spawn.spawn(100, 0)
                    break;
            }

            this.spriteList.shift();
        }


    }
}