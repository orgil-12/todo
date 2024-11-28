"use client";

import { useState } from "react";
import { toggle } from "./index.js";
import { addTask } from "./index.js";
import { saveEdited } from "./index.js";
const Modal = () => {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")
  console.log(status);

  const handleSubmit = () =>{
    setTodoTasks.push({title : title})
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div id="popup" className="popup">
        <p>Enter task</p>
        <input
          type="text"
          placeholder="Task name..."
          id="myInput"
          onChange={e => setTitle(e.target.value)}
        />
        <label for="select">Choose your status :</label>
        <select name="status" id="select" onChange={e => setStatus(e.target.value)}>
          <option value="todo">To do</option>
          <option value="inProgress">In progress</option>
          <option value="done">Done</option>
          <option value="blocked">Blocked</option>
        </select>
        <a href="#">
          <button onSubmit={handleSubmit}>Submit</button>
        </a>
      </div>
    </div>
  );
};

const Lists = () => {
  const [todoTasks, setTodoTasks] = useState([
    { title: "Ayga ugaah" },
    { title: "Shal ugaah  " },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="todo-container">
      <a href="#">
        <button onClick={openModal} className="add-task" id="add-task">
          Add task
        </button>
      </a>
    {isOpen && <Modal />}
      {/* <div id="edit-task-pop-up" className="popup">
        <p>Edit task</p>
        <input type="text" placeholder="New task name..." id="editedInput" />
        <label for="select">Choose your status :</label>
        <select name="status" id="editedSelect">
          <option value="todo">To do</option>
          <option value="inProgress">In progress</option>
          <option value="done">Done</option>
          <option value="blocked">Blocked</option>
        </select>
        <button >Submit</button>
      </div> */}
      <main className="lists-section">
        <div className="to-do" id="todo">
          <div className="lists-title">
            <span className="dot"></span>
            <p>To do</p>
            <span className="counter" id="todoCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-todo">
            {todoTasks.map((task) => (
              <div>{task.title}</div>
            ))}
          </div>
        </div>
        <div className="inProgress" id="inProgress">
          <div className="lists-title">
            <span className="dot"></span>
            <p>In progress</p>
            <span className="counter" id="inProgressCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-inProgress"></div>
        </div>
        <div className="done" id="done">
          <div className="lists-title">
            <span className="dot"></span>
            <p>Done</p>
            <span className="counter" id="doneCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-done"></div>
        </div>
        <div className="blocked" id="blocked">
          <div className="lists-title">
            <span className="dot"></span>
            <p>Blocked</p>
            <span className="counter" id="blockedCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-blocked"></div>
        </div>
      </main>
    </section>
  );
};

export { Lists };
