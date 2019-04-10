class ImageBuffer extends Base{
    #canvas;
    constructor(label){
        super(label);
        this.ImageBufferArray = [];
        return this;
    }
    init = () => {
        this.canvas = document.createElement('canvas');
        return this;
    }
    /**
     * WIP
     */
    addImageBuffer = (anImageBuffer) => {
        this.ImageBufferArray.push(anImageBuffer);
    }
    /**
     * WIP
     */
    getImageBuffer = () => {
        return this.ImageBufferArray;
    }
}