class Controller{
    constructor(type){
        this.type = type;
        this.functionDict = {};
        return this;
    }
    registerFunction(name, action){
        this.functionDict[name] = action;
        return this;
    }

    executeFunction(name){
        return this.functionDict[name];
    }
    
}