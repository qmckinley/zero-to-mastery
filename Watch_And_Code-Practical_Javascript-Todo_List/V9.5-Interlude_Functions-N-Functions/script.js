// Enhancing Functions with Functions

function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}

function logTenNumbers() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
} 

runWithDebugger(function logTenNumbers() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
});

///////////////////////////////////////////////////////////

setTimeout(function() {
    console.log("Wake up Quinton!");
}, 5000)

// Will wait 5 seconds before running console.log

///////////////////////////////////////////////////////////

var students = ["jonathan", "jenny", "elliot"];

function logName(name) {
    console.log(name);
}

students.forEach(logName);

function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}

forEach(students, function(student) {
    console.log(student);
});

forEach(students, logName);

///////////////////////////////////////////////////////////

