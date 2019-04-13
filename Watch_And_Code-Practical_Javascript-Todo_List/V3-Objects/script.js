var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function() {
        console.log("My Todos: ", this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

// todoList.displayTodos()
// My Todos: ["item 1", "item 2", "item 3"]

// todoList.addTodo("Sooo Cool!")
// My Todos: ["item 1", "item 2", "item 3", "Sooo Cool!"]

// todoList.changeTodo(0, "first");
// My Todos: ["first", "item 2", "item 3"]

// todoList.deleteTodo(1);
// My Todos: ["item 1", "item 3"]

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// var myComputer = {
//     operatingSystem: "Mac",
//     screenSize: "15.4 inches",
//     modelYear: 2015
// };

// myComputer
// Object {operatingSystem: "Mac", screenSize: "15.4 inches", modelYear: 2015}

// myComputer.operatingSystem
// "Mac"

// var quinton = {
//     name: "Quinton",
//     sayName: function() {
//         console.log(this.name);
//     }
// }

// quinton.sayName()
// "Quinton"

