// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

// inside true
// outside false

const player = "bobby";
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
    var wizardLevel = true;
    console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

// inside true
// outside true

player = "Sally";

// TypeError: Assignment to constant variable.

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

// obj.wizardLevel = true;
// obj
//      {player: "bobby", experience: 100, wizardLevel: true}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// Destructuring

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// Object Properties

const name = "john snow";

const obj = {
    [name]: "hello",
    [1 + 2]: "hihi"
}

// obj
//      {3: "hihi", john snow: "hello"}

const a = "Simon";
const b = true;
const c = {};

const obj = {
    a, b, c
}

// obj
//      {a: "Simon", b: true, c: {..}}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// Template Strings

const name = "Sally";
const age = 34;
const pet = "horse";

// const greeting = "Hello " + name + " you seem to be doing " + greeting + "!";

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;

// default arguments

function greet(name="", age=30, pet="cat") {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;
}

// greet();
// "Hello   you seem to be 20. What a lovely cat you have!"

// greet("john", 50, "monkey");
// "Hello john you seem to be 40. What a lovely monkey you have!"

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// Symbol

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

// sym1
// Symbol()
// sym2
// Symbol(foo)
// sym3
// Symbol(foo)
// sym2 === sym3
// false

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// Arrow Functions

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

const add3 = (a, b) => {
    return a + b;
}