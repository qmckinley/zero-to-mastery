// reference type /////////////////////////////////////////////////////////

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
// [] === []
//      false
// object1 === object2
//      true
// object1 === object3
//      false
// object1.value = 15;
//      15
// object2.value
//      15
// object3.value
//      10

// context vs scope ///////////////////////////////////////////////////////

const object4 = {
    a: function() {
        console.log(this);
    }
}
// object4.a()
//      {a: f()}

// instantiation //////////////////////////////////////////////////////////

class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log("wizard", this);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}.`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");