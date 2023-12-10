const todoList = [
  {
    title: workElm.value,
    completed: false,
  },
  {
    title: "todo name",
    completed: true,
  },
];

const todolistForm = document.getElementById("todolistform");
const inputElm = document.getElementById("todolist");
const submitBtn = document.getElementById('work');
const workElm = document.getElementById('specific');

function handleTodolist(e) {
  e.preventDefault();

  const task = {
    task: inputElm.value,
  };

  const usersLocal = localStorage.getItem("users");
  if (usersLocal === null) {
    const users = [task];
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    const users = JSON.parse(usersLocal);
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if (element.task === task.task) {
        alert("Bi trung task!");
        return;
      }
    }
    users.push(task);
    localStorage.setItem("users", JSON.stringify(users));
  }
}

for (let index = 0; index < submitBtn.length; index++) {
    const product = todoList[index];
    const h5Elm = document.createElement("h5");
    h5Elm.textContent = product.title;
    h5Elm.classList.add("card-title");
    console.log(h5Elm);

function handleList() {
    workElm.value
}




todolistForm.addEventListener("submit", handleTodolist);
submitBtn.addEventListener("click", handleList);
