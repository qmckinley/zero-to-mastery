var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed Todos
        // for (var i = 0; i < totalTodos; i++) {
        //     if (this.todos[i].completed === true) {
        //         completedTodos++;
        //     }
        // }

        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        // Case 1: If everthing's true, make everything false.
        // if (completedTodos === totalTodos) {
        // for (var i = 0; i < totalTodos; i++) {
        //     this.todos[i].completed = false;
        // Case 2: Otherwise, make everything true.
        // } else {
        //     for (var i = 0; i < totalTodos; i++) {
        //         this.todos[i].completed = true;
        //     });
        // }

        // Case 1: If everthing's true, make everything false.
        // if (completedTodos === totalTodos) {
        //     this.todos.forEach(function(todo) {
        //         todo.completed = false;
        //     });
        // // Case 2: Otherwise, make everything true.
        // } else {
        //     this.todos.forEach(function(todo) {
        //         todo.completed = true;
        //     });
        // };

        this.todos.forEach(function(todo) {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        });
    }
};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        // for (var i = 0; i < todoList.todos.length; i++) {
        //     var todoLi = document.createElement("li");
        //     var todo = todoList.todos[i];
        //     var todoTextWithCompletion = "";

        //     if (todo.completed === true) {
        //         todoTextWithCompletion = "(x) " + todo.todoText;
        //     } else {
        //         todoTextWithCompletion = "( ) " + todo.todoText;
        //     }

        //     todoLi.id = i;
        //     todoLi.textContent = todoTextWithCompletion;
        //     todoLi.appendChild(this.createDeleteButton());
        //     todosUl.appendChild(todoLi);
        // }

        // this // refers to the view object
        // forEach(callback, this) // thisArg to have this as a callback inside a callback

        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement("li");
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setUpEventListeners: function() {
        var todosUl = document.querySelector("ul");
        todosUl.addEventListener("click", function(event) {
            // console.log(event.target.parentNode.id);
            // Get the element that was clicked on.
            var elementClicked = event.target;
            // Check if elementClicked is a delete button.
            if (elementClicked.className === "deleteButton") {
                // Run handlers.deleteTodo(position).
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
                // parseInt does its best to turn a string into a number.
            };
    })
    }
};

view.setUpEventListeners();

function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}