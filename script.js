/* 1. Select a list of all the todo elements and assign it to a variable called todos */

const todos = document.querySelectorAll(".todo");
const todoList = document.querySelector(".todos");
// console.log(todos);

/* 2. Select the first button and assign it to a variable called newTodoButton */
const newTodoButton = document.querySelector(".button_action_new-todo");
console.log(newTodoButton);

/* 3. Select the second button and assign it to a variable called clearTodosButton */

const clearTodosButton = document.querySelector(".button_action_clear-todos");
console.log(clearTodosButton);

newTodoButton.classList.add("btn_toggle");

newTodoButton.addEventListener("click", addTodo);

clearTodosButton.addEventListener("click", clearTodos);

function handler() {
  console.log("You clicked!!");
}

for (let i = 0; i < todos.length; i++) {
  const todo = todos[i];
  let counter = 0;
  // todo.addEventListener("click", function () {
  //   counter += 1;
  //   const textElement = todo.querySelector(".text-span");
  //   console.log(textElement.innerText);
  //   let newTodo = prompt(`Change to do?`);
  //   textElement.textContent = newTodo;
  //   // console.log(`You clicked on ${todo.innerText} ~ Clicks ${counter}`);
  // });
  const textElement = todo.querySelector(".text-span");
  console.log(textElement);
  textElement.addEventListener("click", function () {
    let newTodo = prompt(`Change to do?`);
    textElement.textContent = newTodo;
  });
}

function addTodo() {
  console.log("inside!");
  todoList.innerHTML += ` 
        <li class="todo">
            <input class="todo__checkbox" type="checkbox" />
            <span class="text-span">Walk dog</span>
        </li>
      `;
}

function clearTodos() {
  todoList.innerHTML = "hiii";
}
