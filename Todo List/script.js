const addBtn = document.querySelector(".add-btn");
const inputField = document.querySelector(".input");
const todoListContainer = document.querySelector(".todo-lists");

const ulTodo = document.querySelector(".ul-todo");
const todos = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputField.value.trim() !== "") {
    let task = { id: Date.now(), inputfield: inputField.value };
    todos.unshift(task);
    console.log(todos);
    displayTodos();
    inputField.value = "";
  } else {
    alert("Please add task here....");
  }
});

const displayTodos = () => {
  ulTodo.innerHTML = "";
  if (todos.length > 0) {
    todos.forEach((todo) => {
      let li = document.createElement("li");
      let todoDiv = document.createElement("div");
      let btnDiv = document.createElement("div");
      let todoSpan = document.createElement("span");
      let checkBoxInput = document.createElement("input");
      let deleteBtn = document.createElement("button");
      let editBtn = document.createElement("button");
      deleteBtn.setAttribute("id", "dlt-btn-" + todo.id);
      deleteBtn.setAttribute("class", `${todo.id}`);
      editBtn.classList.add("edit-btn");

      li.classList.add("li-todo");
      li.setAttribute("id", `${todo.id}`);
      todoDiv.classList.add("todo-div");
      btnDiv.classList.add("btn-div");
      checkBoxInput.type = "checkbox";
      checkBoxInput.setAttribute("id", "checkBox-", todo.id);
      li.prepend(checkBoxInput);
      todoSpan.innerText = todo.inputfield;
      todoDiv.append(todoSpan);
      todoDiv.prepend(checkBoxInput);
      btnDiv.append(editBtn, deleteBtn);

      deleteBtn.innerText = "Delete";
      editBtn.innerText = "Edit";
      li.append(todoDiv, btnDiv);
      ulTodo.append(li);

      deleteBtn.addEventListener("click", (e) => {
        let deleteBtnClass = parseInt(e.target.classList.value);
        const updateTodo = todos.findIndex(
          (todoItem) => todoItem.id === deleteBtnClass
        );
        todos.splice(updateTodo, 1);
        displayTodos();
      });

      checkBoxInput.addEventListener("change", (e) => {
        if (e.target.checked === true) {
          editBtn.setAttribute("disabled", "true");
          editBtn.style.cursor = "not-allowed";
          todoSpan.style.textDecoration = "line-through";
        } else {
          editBtn.setAttribute("disabled", "false");
          editBtn.style.cursor = "pointer";
          todoSpan.style.textDecoration = "";
        }
      });
    });
  }
  {
    (() => {
      if (todos.length === 0) {
        let h3 = document.createElement("h3");
        h3.innerText = "No list available";
        h3.style.color = "#850000";
        ulTodo.append(h3);
      }
    })();
  }
};
