import { Todo } from "../classes";
import { todoList } from "../index"

// References HTML
const divTodoList = document.querySelector('.todo-list');
const inputTodo = document.querySelector('.new-todo');


export const createTodoHtml = (todo) => {
    const templateTodo = `
    <li class="${ (todo.completed ? 'completed' : '')}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completed ? 'complete' : ''}>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = templateTodo;
    divTodoList.append(div.firstElementChild);

    return div;

}

// Events

inputTodo.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && inputTodo.value !== '') {
        const newTodo = new Todo(inputTodo.value);
        todoList.addTodo(newTodo);
        createTodoHtml(newTodo)
        inputTodo.value = '';
    }
})
