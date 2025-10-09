// Add Todo - Create a new todo item
// Display Todos - Show all todos in a list - completed
// Delete Todo - Remove individual todo
// Search Todos - Filter todos based on text search

let todos = JSON.parse(localStorage.getItem('todos')) || [];

let displayTodos = (array) => {
  let todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  array.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${item["name"]} - ${item["completed"] ? "completed" : "not completed"}
      <button onclick="deleteTodo(${item["id"]})">Delete</button>
    `;
    todoList.appendChild(li);
  });
};

let addTodo = () => {
  let value = document.getElementById("todoInput").value;

  const todo = {
    id: Date.now(),
    name: value,
    completed: false,
  };

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos))
  displayTodos(todos);
};

function deleteTodo(id) {
  todos = todos.filter((item) => {
    return item["id"] !== id;
  });

  localStorage.setItem('todos', JSON.stringify(todos))
  displayTodos(todos);
}

function searchTodos() {
  let searchText = document.getElementById("searchInput").value;

  let filteredTodos = todos.filter((item) => item.name.includes(searchText));

  displayTodos(filteredTodos);
}

displayTodos(todos);

document.getElementById("addTodo").addEventListener("click", addTodo);
document.getElementById("searchTodo").addEventListener("click", searchTodos);
