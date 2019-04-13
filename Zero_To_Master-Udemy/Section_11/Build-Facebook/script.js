var database = [
    {
        username: "mckinley",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "12345"
    },
    {
        username: "ingrid",
        password: "007"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning..."
    },
    {
        username: "Sally",
        timeline: "Javascript is soooo coooool!!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preetttyyy coooool!!"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username 
            && database[i].password === password) {
                return true;
            }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// function declaration /////////////////////////////////////////////
// function newFunction() {

// }

// function expression //////////////////////////////////////////////
// var newFunction = function() {

// };

// expression ///////////////////////////////////////////////////////
// 1+3;
// var a = 2;
// return true;

// calling or invoking a function ////////////////////////////////////
// alert()
// newFunction(param1, param2);

// assign a variable /////////////////////////////////////////////////
// var a = true;

// function vs method
// function thisIsAFunction() {

// }

// var obj = {
//     thisIsAMethod: function() {

//     }
//  }

//  thisIsAFunction()
//  obj.thisIsAMethod()