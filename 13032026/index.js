let todoList = document.getElementById("todo-list");
let input = document.getElementById("todo-input");

// Load tasks when page opens
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTask(task));
};

function addTodo() {
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    createTask(task);
    saveTask(task);

    input.value = "";
}

// Create task element
function createTask(task) {
    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
        deleteTask(task);
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

// Save task to local storage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from local storage
function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}