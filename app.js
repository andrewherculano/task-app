const formAddTask = document.querySelector("#form-add-task");
const tasksContainer = document.querySelector(".taks-container");
const searchTasks = document.querySelector(".search-tasks-container input");

//*** Adicionar Tarefas ***
const addTask = (valueAddTask) => {
  if (valueAddTask.length) {
    tasksContainer.innerHTML += `
  <li data-todo="${valueAddTask}">
    <h3>${valueAddTask}</h3>
    <img class="delete" src="./assets/delete.svg" alt="Deletar tarefa" data-trash="${valueAddTask}">
  </li>`;

    event.target.reset();
  }
};

formAddTask.addEventListener("submit", (event) => {
  event.preventDefault();
  const valueAddTask = event.target.addtask.value.trim();

  addTask(valueAddTask);
});

//*** Remover Tarefas ***
const removeTask = (clickedElement) => {
  const trashDataValue = clickedElement.dataset.trash;
  const dataTask = document.querySelector(`[data-todo="${trashDataValue}"]`);

  if (trashDataValue) {
    dataTask.remove();
  }
};

tasksContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  removeTask(clickedElement);
});

//*** Buscar Tarefas ***
searchTasks.addEventListener("input", (event) => {
  const valueSearchTask = event.target.value.trim().toLowerCase();
  const arrayTasks = Array.from(tasksContainer.children);

  arrayTasks
    .filter((todo) => !todo.textContent.toLowerCase().includes(valueSearchTask))
    .forEach((todo) => {
      todo.classList.add("invisible");
    });
  arrayTasks
    .filter((todo) => todo.textContent.toLowerCase().includes(valueSearchTask))
    .forEach((todo) => {
      todo.classList.remove("invisible");
    });
});
