// Function Declaration 

function sayHello() {
    console.log("Hellooo");
}

sayHello();

// Function Expression // **Anonymous Function**

var sayBye = function() {
    console.log("Byee");
}

sayBye();

// Arguments allow our functions to be more extensible.

function sing(song) {
    console.log(song);
}

sing("Laaa deee daaa");

// Returning a Value // Return is the final execution of a function.

function multiply(a, b) {
    return a * b;
}

multiply(5, 10);

// Return exits the function.

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a * b;
    }
}

var total = multiply(5, 10);
alert(total);

//

var a = function multiply(a, b) {
    return a * b;
}

alert(a(3, 4));