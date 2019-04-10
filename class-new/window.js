/**
 * Window: Displays the back buffer.
 */
class Window extends Base {
    #height;
    #width;
    #title;
    constructor(label) {
        super(label);
        this.canvas = document.createElement('canvas');
        this.canvas.id = this.id + '#canvas';
        return this;
    }
    /**
     * Sets the height in pixels of the viewport
     * @argument window height
     * @returns instance of class
     */
    setHeight = (aheight) => {
        this.height = aheight;
        return this;
    }
    /**
     * Gets the height of the viewport in pixels
     * @returns int height (pixels)
     */
    getHeight = () => {
        return this.height;
    }
    /**
     * Sets the width in pixels of the viewport
     * @argument window width
     * @returns instance of class
     */
    setWidth = (aWidth) => {
        this.Width = aWidth;
        return this;
    }
    /**
     * Gets the width of the viewport in pixels
     * @returns int width (pixels)
     */
    getWidth = () => {
        return this.Width;
    }
    /**
     * Goes to DOM
     */
    getCanvas = () => {
        return this.canvas;
    }
    /**
     * Updates the Canvas Element
     */
    updateCanvas = (canvas) => {
        this.canvas = canvas;
    }
    /**
     * Sets Window Title
     */
    setTitle = (title) => {
        document.title = title;
    }
}