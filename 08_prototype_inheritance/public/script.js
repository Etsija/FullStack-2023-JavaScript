// This is now effectively a singleton: its prototype is the object itself
function Universe() {
    var instance;
    Universe = function Universe() {
        return instance;
    }
    Universe.prototype = this;
    instance = new Universe();
    instance.constructor = Universe;
    instance.size = 0;
    instance.bang = "big";
    return instance;
}

function start() {
    
    let HelloWorld = function() {
        this.name = "World";
        this.message = "Hello";
    }

    let helloInstance = new HelloWorld();

    HelloWorld.prototype.name = "Jaska";
    HelloWorld.prototype.message2 = "Goodbye";

    console.log(helloInstance.name);
    console.log(helloInstance.message);
    console.log(helloInstance.message2);
    console.log(helloInstance);

    let functionTest = {
        myVar:10,
        myFunction:function() {
            return this.myVar + 10;
        }
    }

    console.log(functionTest);
    let object1 = Object.create(functionTest);
    let object2 = Object.create(functionTest);
    console.log(object1);
    object1.myVar = 15;
    object2.myVar = 100;
    console.log(object1.myFunction());
    console.log(object2.myFunction());
    console.log(object1);
    console.log(object2);

    Universe.prototype.nothing = true;
    let uni1 = new Universe();
    console.log(uni1);
    let uni2 = new Universe();
    uni2.everything = false;
    console.log(uni1);
    console.log(uni2);
}