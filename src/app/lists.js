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
          onChange={(e) => {
            props.setStatus(e.target.value);
          }}
          value={props.status}
        >
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

const EditModal = (props) => {
  return (
    <div id="edit-task-pop-up" className="popup">
      <p>Edit task</p>
      <input
        type="text"
        placeholder="New task name..."
        id="editedInput"
        // defaultValue={props.title}
        value={props.title}
        onChange={(e) => {props.setTitle(e.target.value);
          console.log(e.target.value)
        }}
      />
      <label for="select">Choose your status :</label>
      <select
        name="status"
        id="editedSelect"
        value={props.status}
        onChange={(e) => props.setStatus(e.target.value)}
      >
        <option value="todo">To do</option>
        <option value="inProgress">In progress</option>
        <option value="done">Done</option>
        <option value="blocked">Blocked</option>
      </select>
      <button onClick={() => {props.handleEditSubmit(props.id)}}>Submit</button>
    </div>
  );
};

const Lists = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState(0);

  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const [counter, setCounter] = useState(0);

  const handleSubmit = () => {
    setTasks([...tasks, { id: id, title: title, status: status }]);
    setId(id + 1);
    setIsOpen(false);
  };

  function handleEditSubmit(id) {
    setTasks([...tasks.filter((task) => task.id !== id), {title: title, status: status}]);
    setIsOpenEditModal(false);
  }

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const openEditModal = () => {
    setIsOpenEditModal(!isOpenEditModal);
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
      <main className="lists-section">
        <div className="to-do" id="todo">
          <div className="lists-title">
            <span className="dot"></span>
            <p className="title">To do</p>
            <span className="counter" id="todoCounter">
            </span>
          </div>
          <div className="tasks" id="tasks-todo">
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <div className="task" key={task.id}>
                  <p className="task-name">{task.title}</p>
                  <img src="edit.png" onClick={openEditModal}></img>
                  {isOpenEditModal && (
                    <EditModal
                    id={task.id}
                    title={title}
                    status={status}
                      setTitle={setTitle}
                      setStatus={setStatus}
                      handleEditSubmit={handleEditSubmit}
                    />
                  )}
                  <img
                    src="delete.png"
                    className="delete-button"
                    onClick={() => {
                      setTasks(tasks.filter((taskk) => taskk.id !== task.id));
                    }}
                  ></img>
                </div>
              ))}
          </div>
        </div>
        <div className="inProgress" id="inProgress">
          <div className="lists-title">
            <span className="dot"></span>
            <p className="title">In progress</p>
            <span className="counter" id="inProgressCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-inProgress">
            {tasks
              .filter((task) => task.status === "inProgress")
              .map((task) => (
                <div className="task" key={task.id}>
                  <p className="task-name">{task.title}</p>
                  <img src="edit.png" onClick={openEditModal}></img>
                  {isOpenEditModal && <EditModal />}
                  <img
                    src="delete.png"
                    className="delete-button"
                    onClick={() => {
                      setTasks(tasks.filter((taskk) => taskk.id !== task.id));
                    }}
                  ></img>
                </div>
              ))}
          </div>
        </div>
        <div className="done" id="done">
          <div className="lists-title">
            <span className="dot"></span>
            <p className="title">Done</p>
            <span className="counter" id="doneCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-done">
            {tasks
              .filter((task) => task.status === "done")
              .map((task) => (
                <div className="task" key={task.id}>
                  <p className="task-name">{task.title}</p>
                  <img src="edit.png" onClick={openEditModal}></img>
                  {isOpenEditModal && <EditModal />}
                  <img
                    src="delete.png"
                    className="delete-button"
                    onClick={() => {
                      setTasks(tasks.filter((taskk) => taskk.id !== task.id));
                    }}
                  ></img>
                </div>
              ))}
          </div>
        </div>
        <div className="blocked" id="blocked">
          <div className="lists-title">
            <span className="dot"></span>
            <p className="title">Blocked</p>
            <span className="counter" id="blockedCounter">
              {}
            </span>
          </div>
          <div className="tasks" id="tasks-blocked">
            {tasks
              .filter((task) => task.status === "blocked")
              .map((task) => (
                <div className="task" key={task.id}>
                  <p className="task-name">{task.title}</p>
                  <img src="edit.png" onClick={openEditModal}></img>
                  {isOpenEditModal && <EditModal />}
                  <img
                    src="delete.png"
                    className="delete-button"
                    onClick={() => {
                      setTasks(tasks.filter((taskk) => taskk.id !== task.id));
                    }}
                  ></img>
                </div>
              ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export { Lists };
