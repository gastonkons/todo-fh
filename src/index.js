// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import './styles.css';
import {  TodoList } from './classes'
import { createTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => createTodoHtml(todo));