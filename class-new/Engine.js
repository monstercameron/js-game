class Engine extends Base {
    #window;
    constructor(label) {
        super(label);
        return this;
    }

    start = (config) => {
        this.setWindow(config.window.window);
        this.window.setTitle(config.window.title);
        this.dressWindow(config.window.style);
        this.placeWindow(config.selector);
        return this;
    }

    setWindow = (aWindow) => {
        this.window = aWindow;
    }

    placeWindow = (selector) => {
        document.querySelector(selector).appendChild(this.window.getCanvas());
    }

    dressWindow = (style) => {
        let aCanvas = this.window.getCanvas();
        for (let index = 0; index < style.length; index++) {
            aCanvas.classList.add(style[index]);
        }
        this.window.updateCanvas(aCanvas);
    }

}