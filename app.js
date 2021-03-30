const formAddTask = document.querySelector("#form-add-task");
const taskContainer = document.querySelector("#taks-container");

formAddTask.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputAddTask = event.target.addtask.value.trim();

  if (inputAddTask.length && inputAddTask.length < 65) {
    taskContainer.innerHTML += `<li>
    <h3>${inputAddTask}</h3>
    <img src="./assets/delete.svg" alt="">
    </li>`;

    event.target.reset()
  } else {
      alert('O campo deve conter de 1 a 60 caracteres')
  }

  
});

