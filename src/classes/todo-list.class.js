import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        this.loadLocalStorage();
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.saveLocalStorage()
    }

    removeTodo(id) {   
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage()
    }

    toggleTodo(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completed = !todo.completed;
                break;
            }
        }
        this.saveLocalStorage()
    }

    removeCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveLocalStorage()
    }

    saveLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }

    loadLocalStorage() {
        this.todos = (localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];
        this.todos = this.todos.map(todo => Todo.fromJson(todo));
        console.log(this.todos);
    }

    
}