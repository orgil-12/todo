let todo = [];

let editIdx = 0;

function render() {
  console.log(todo);
  document.getElementById("tasks-todo").innerHTML = "";
  document.getElementById("tasks-inProgress").innerHTML = "";
  document.getElementById("tasks-done").innerHTML = "";
  document.getElementById("tasks-blocked").innerHTML = "";

  let todoCounter = 0;
  let inProgressCounter = 0;
  let doneCounter = 0;
  let blockedCounter = 0;

  console.log({ todo });
  for (let i = 0; i < todo.length; i++) {
    const containerName = todo[i].status;
    const todoList = document.getElementById(containerName);
    const taskList = todoList.querySelector(".tasks");
    const item = todo[i];

    if (containerName === "todo") {
      todoCounter++;
    } else if (containerName === "inProgress") {
      inProgressCounter++;
    } else if (containerName === "done") {
      doneCounter++;
    } else if (containerName === "blocked") {
      blockedCounter++;
    }

    const element = document.createElement("div");
    element.classList.add("task");

    const taskName = document.createElement("p");
    taskName.innerText = item.name;

    //Create edit button
    const editButton = document.createElement("a");
    const editImage = document.createElement("img");

    editImage.src = "edit.png";
    editButton.onclick = function () {
      editTaskToggle();
      document.getElementById("editedInput").value = todo[i].name;
      document.getElementById("editedSelect").value = todo[i].status;
      editIdx = i;
    };

    //Create delete button
    const deleteButton = document.createElement("a");
    const deleteImage = document.createElement("img");
    deleteImage.classList.add("deleteButton");
    deleteImage.src = "delete.png";
    deleteButton.onclick = function () {
      deleteOne(i);
    };

    editButton.appendChild(editImage);
    deleteButton.appendChild(deleteImage);
    element.appendChild(taskName);
    element.appendChild(editButton);
    element.appendChild(deleteButton);
    taskList.appendChild(element);
  }
  document.getElementById("todoCounter").innerHTML =
    '<span class="counter">' + todoCounter + "</span>";
  document.getElementById("inProgressCounter").innerHTML =
    '<span class="counter">' + inProgressCounter + "</span>";
  document.getElementById("doneCounter").innerHTML =
    '<span class="counter">' + doneCounter + "</span>";
  document.getElementById("blockedCounter").innerHTML =
    '<span class="counter">' + blockedCounter + "</span>";
}

function addTask() {
  const name = document.getElementById("myInput").value;
  const myInput = document.getElementById("myInput");
  const status = document.getElementById("select").value;
  const mySelect = document.getElementById("select");
  myInput.value = "";

  todo.push({
    name: name,
    status: status,
  });
  render();
  mySelect.value = "todo";
}

function toggle() {
  let popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

function editTaskToggle() {
  let editPopup = document.getElementById("edit-task-pop-up");
  editPopup.classList.toggle("active");
}

function deleteOne(index) {
  let tempArray = [];
  for (let i = 0; i < todo.length; i++) {
    if (index !== i) {
      tempArray.push(todo[i]);
    }
  }
  todo = tempArray;
  render();
}

function saveEdited() {
  editTaskToggle();
  const editedName = document.getElementById("editedInput").value;
  const editedStatus = document.getElementById("editedSelect").value;
  todo[editIdx].name = editedName;
  todo[editIdx].status = editedStatus;
  render();
}
