// How does Javascript Work?
// Javascript is a single-threaded language, that can be non-blocking.

// It has one Call Stack, and it does one thing at a time; in order to not
// block the single-thread, it can be Asynchronous, with Callback Functions.

// The Callback functions get ran, in the background, through the Callback Queue,
// and then the Event Loop, to bring it back into the Call Stack.

// Synchronous & Asynchronous

console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000);
console.log('3');

// Memory Heap

// Call Stack // 1st

// Web API // 2nd
// DOM AJAX Timeout

// Callback Queue // 3rd
// onClick onLoad onDone

// Event Loop // Last
// Checks to see if the call stack is empty