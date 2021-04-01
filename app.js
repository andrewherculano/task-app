const formAddTask = document.querySelector("#form-add-task");
const tasksContainer = document.querySelector(".taks-container");
const searchTasks = document.querySelector(".search-tasks-container input");

formAddTask.addEventListener("submit", (event) => {
  event.preventDefault();
  const valueAddTask = event.target.addtask.value.trim();

  if (valueAddTask.length) {
    tasksContainer.innerHTML += `
  <li>
    <h3>${valueAddTask}</h3>
    <img class="delete" src="./assets/delete.svg" alt="">
  </li>`;

    event.target.reset();
  }
});

tasksContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (Array.from(clickedElement.classList).includes("delete")) {
    clickedElement.parentElement.remove();
  }
});

searchTasks.addEventListener("input", (event) => {
  const valueSearchTask = event.target.value.trim().toLowerCase();

  Array.from(tasksContainer.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(valueSearchTask))
    .forEach((todo) => {
      todo.classList.add("invisible");
    });
  Array.from(tasksContainer.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(valueSearchTask))
    .forEach((todo) => {
      todo.classList.remove("invisible");
    });
});
