const todoForm = document.getElementById("todo-form");
const todoFormInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let todoArray = [];
const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos != null) {
    const parsedArray = JSON.parse(savedTodos);
    parsedArray.forEach(putInList);
    todoArray = parsedArray;
}



function onSubmit(event) {
    event.preventDefault();
    const id = Date.now()
    const todoListElementObj = {
        id : id,
        task : todoFormInput.value
    }
    todoFormInput.value = "";
    todoArray.push(todoListElementObj)
    putInList(todoListElementObj);
    saveTodo();
    
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray))
}

function deleteTodo(event) {
    deletedList = event.target.parentElement
    todoList.removeChild(deletedList)
    todoArray = todoArray.filter((todo) => todo.id !== parseInt(deletedList.id));
    saveTodo()
}


function putInList(todoListElementObj) {
    const list = document.createElement("li")
    list.id = todoListElementObj.id
    const span = document.createElement("span")
    span.innerText = todoListElementObj.task
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    list.appendChild(span)
    list.appendChild(button)
    todoList.appendChild(list)
}

todoForm.addEventListener("submit", onSubmit)