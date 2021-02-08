// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import './styles.css';
import { Todo, TodoList } from './classes'
import { createTodoHtml } from './js/componentes';

export const todoList = new TodoList();
const task = new Todo("Nueva tarea");
todoList.addTodo(task)
console.log(todoList);

createTodoHtml(task);