// Add Todo - Create a new todo item
// Display Todos - Show all todos in a list - completed
// Delete Todo - Remove individual todo
// Search Todos - Filter todos based on text search

let todos = [];

let displayTodos = (todos) => {
  let todoList = document.getElementById("todoList");
	todoList.innerHTML = ''

  todos.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;

    todoList.appendChild(li);
  });
};

let addTodo = () => {
  let value = document.getElementById("todoInput").value;
  todos.push(value);
	console.log(todos);
  displayTodos(todos);
};

displayTodos(todos);

document.getElementById("addTodo").addEventListener("click", addTodo);
