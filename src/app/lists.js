import { toggle } from "./index.js";
import { addTask } from "./index.js";
import { saveEdited } from "./index.js";
const Lists = () => {
  return (
    <section className="todo-container">
      <a href="#" onClick={toggle()}>
        <button className="add-task" id="add-task">
          Add task
        </button>
      </a>
      <div id="popup" className="popup">
        <p>Enter task</p>
        <input
          type="text"
          placeholder="Task name..."
          id="myInput"
          onchange="render()"
        />
        <label for="select">Choose your status :</label>
        <select name="status" id="select">
          <option value="todo">To do</option>
          <option value="inProgress">In progress</option>
          <option value="done">Done</option>
          <option value="blocked">Blocked</option>
        </select>
        <a href="#" onClick={toggle()}>
          <button onClick={addTask()}>Submit</button>
        </a>
      </div>
      <div id="edit-task-pop-up" className="popup">
        <p>Edit task</p>
        <input type="text" placeholder="New task name..." id="editedInput" />
        <label for="select">Choose your status :</label>
        <select name="status" id="editedSelect">
          <option value="todo">To do</option>
          <option value="inProgress">In progress</option>
          <option value="done">Done</option>
          <option value="blocked">Blocked</option>
        </select>
        <button onClick={saveEdited()}>Submit</button>
      </div>
      <main className="lists-section">
        <div className="to-do" id="todo">
          <div className="lists-title">
            <span className="dot"></span>
            <p>To do</p>
            <span className="counter" id="todoCounter">
              0
            </span>
          </div>
          <div className="tasks" id="tasks-todo"></div>
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
