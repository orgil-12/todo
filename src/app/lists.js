"use client";

import { useState } from "react";
import "./index.css";
const Modal = (props) => {
  return (
    <div>
      <div id="popup" className="popup">
        <p>Enter task</p>
        <input
          value={props.title}
          type="text"
          placeholder="Task name..."
          id="myInput"
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <label for="select">Choose your status :</label>
        <select
          name="status"
          id="select"
          onChange={(e) => {props.setStatus(e.target.value);}} value={props.status}>
          <option>Select your status</option>
          <option value={"todo"}>To do</option>
          <option value={"inProgress"}>In progress</option>
          <option value={"done"}>Done</option>
          <option value={"blocked"}>Blocked</option>
        </select>
        <a href="#">
          <button onClick={props.handleSubmit}>Submit</button>
        </a>
      </div>
    </div>
  );
};

const Lists = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const [tasks, setTodoTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(tasks);
  const handleSubmit = () => {
    setTodoTasks([...tasks, { title: title, status: status }]);
    setIsOpen(false);
  };
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
      {isOpen && (
        <Modal
          title={title}
          setTitle={setTitle}
          status={status}
          setStatus={setStatus}
          handleSubmit={handleSubmit}
        />
      )}
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
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <div className="task">
                  <p>{task.title}</p>
                  <img src="edit.png"></img>
                  <img src="delete.png" className="delete-button"></img>
                </div>
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
          <div className="tasks" id="tasks-inProgress">
            {tasks.filter((task) => task.status === "inProgress").map((task) => (
                <div className="task">
                  <p>{task.title}</p>
                  <img src="edit.png"></img>
                  <img src="delete.png" className="delete-button"></img>
                </div>
              ))}
          </div>
        </div>
        <div className="done" id="done">
          <div className="lists-title">
            <span className="dot"></span>
            <p>Done</p>
            <span className="counter" id="doneCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-done">
            {tasks.filter((task) => task.status === "done").map((task) => (
                <div className="task">
                  <p>{task.title}</p>
                  <img src="edit.png"></img>
                  <img src="delete.png" className="delete-button"></img>
                </div>
              ))}
          </div>
        </div>
        <div className="blocked" id="blocked">
          <div className="lists-title">
            <span className="dot"></span>
            <p>Blocked</p>
            <span className="counter" id="blockedCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-blocked">
            {tasks.filter((task) => task.status === "blocked").map((task) => (
                <div className="task">
                  <p>{task.title}</p>
                  <img src="edit.png"></img>
                  <img src="delete.png" className="delete-button"></img>
                </div>
              ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export { Lists };
