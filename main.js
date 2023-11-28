const taskElm = document.getElementById("todolist");
const plusElm = document.getElementById("plus");

function handleTodolist() {
  if (taskElm.value === "") {
    alert("Ban chua nhap task!");
    return;
  }
  const user = {
    task: taskElm.value,
  }
  const usersLocal = localStorage.getItem("users");
  if (usersLocal === null) {
    const users = [user];
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    const users = JSON.parse(usersLocal);
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if (element.task === user.task) {
        alert("Bi trung task!");
        return;
      }
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
}
plusElm.addEventListener("click", handleTodolist);
