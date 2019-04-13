var todoList = {
    todos: [],
    displayTodos: function() {
        console.log("My Todos: ", this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        }),
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

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

