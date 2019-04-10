class Base {
    constructor(label){
        this.id = uuid();
        this.label = label;
    }

    log = () => {
        console.log(this);
    }

    
}