export class Todo {
    
    static fromJson({ task, id, completed, created }) {
        const tempTodo = new Todo(task);
        tempTodo.completed = completed;
        tempTodo.created = created;
        tempTodo.id = id;

        return tempTodo;
    }

    constructor(task) {
        this.task       = task;
        this.id         = new Date().getTime();
        this.completed  = false;
        this.created    = new Date();
    }

    toString() {
    }
}