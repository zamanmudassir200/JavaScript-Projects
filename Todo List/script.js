const addBtn = document.querySelector(".add-btn");
const inputField = document.querySelector(".input");
const todoListContainer = document.querySelector(".todo-lists");
const ulTodo = document.querySelector(".ul-todo");
const todos = [];
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputField.value.trim() !== "") {
    // const newTodos = { inputField: inputField.value };
    let task = { inputfield: inputField.value };
    todos.unshift(task);
    console.log(todos);
    ulTodo.innerHTML = "";
    todos.map((todo) => {
      let li = document.createElement("li");
      let todoDiv = document.createElement("div");
      let btnDiv = document.createElement("div");
      let todoSpan = document.createElement("span");
      let checkBoxInput = document.createElement("input");
      let deleteBtn = document.createElement("button");
      let editBtn = document.createElement("button");

      li.classList.add("li-todo");
      todoDiv.classList.add("todo-div");
      btnDiv.classList.add("btn-div");

      checkBoxInput.type = "checkbox";
      li.prepend(checkBoxInput);
      todoSpan.innerText = todo.inputfield;
      todoDiv.append(todoSpan);
      todoDiv.prepend(checkBoxInput);
      btnDiv.append(editBtn, deleteBtn);

      deleteBtn.innerText = "Delete";
      editBtn.innerText = "Edit";
      li.append(todoDiv, btnDiv);
      ulTodo.append(li);
    });

    inputField.value = "";
  } else {
    alert("Please add task here....");
  }
});

// const addBtn = document.querySelector(".add-btn");
// const inputField = document.querySelector(".input");
// const ulTodo = document.querySelector(".ul-todo");
// const todos = [];

// addBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (inputField.value.trim() !== "") {
//     let task = { inputfield: inputField.value };
//     todos.unshift(task);

//     // Clear the ul before adding all todos again
//     ulTodo.innerHTML = "";

//     todos.map((todo) => {
//       let li = document.createElement("li");
//       li.classList.add("li-todo");
//       li.textContent = todo.inputfield;
//       ulTodo.append(li);
//     });

//     inputField.value = "";
//   } else {
//     alert("Please add a task here...");
//   }
// });
