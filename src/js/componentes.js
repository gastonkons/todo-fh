import { Todo } from "../classes";
import { todoList } from "../index"

// References HTML
const divTodoList = document.querySelector('.todo-list');
const inputTodo = document.querySelector('.new-todo');
const clearCompletedBtn = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilter = document.querySelectorAll('.filtro');


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
        createTodoHtml(newTodo);
        inputTodo.value = '';
    }
});


divTodoList.addEventListener('click', (event) => {
    const itemType = event.target.localName;
    const itemTodoHtml = event.target.parentElement.parentElement;
    const idTodo = itemTodoHtml.getAttribute('data-id');

    if (itemType === 'input') {
        todoList.toggleTodo(idTodo);
        itemTodoHtml.classList.toggle('completed');
    }
    if (itemType === 'button') {
        todoList.removeTodo(idTodo);
        itemTodoHtml.remove();
        console.log(todoList);
    }
});

clearCompletedBtn.addEventListener('click', () => {
    todoList.removeCompletedTodos();
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const element = divTodoList.children[i];
        if (element.classList.contains("completed")) {
            element.remove();
        }
    }
})


ulFilters.addEventListener('click', (event) => {
    const filter = event.target.text;
    if (!filter) { return; };

    anchorFilter.forEach(el => el.classList.remove('selected'));
    event.target.classList.add('selected')

    for (const element of divTodoList.children) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');
        switch (filter) {
            case 'Pendientes':
                if (completed) {
                    element.classList.add('hidden')
                }
                break;
            case 'Completados':
                if (!completed) {
                    element.classList.add('hidden')
                }
                break;
        }

    }


})