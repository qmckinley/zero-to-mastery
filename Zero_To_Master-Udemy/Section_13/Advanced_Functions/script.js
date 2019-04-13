// function first() {
//     var greet = "Hi";
//     function second() {
//         alert(greet);
//     }
//     return second;
// }

// var newFunc = first();
// newFunc();

///////////////////////////////////////////////////////////////////////////

const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures - A function ran. The function executed.
// It's never going to execute again.
// But...it's going to remember that there are references to those variables, 
// so the child scope always has access to the parent scope.

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

// multiplyBy5(10);
// 50

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

// compose(sum, sum)(5);
// 7

// Avoiding Side Effects, and shoot for Functional Purity (determinism)
var a = 1;
function b() {
    a = 2;
}