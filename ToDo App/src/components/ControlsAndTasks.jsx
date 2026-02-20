export default function ControlsAndTasks() {
  return (
    <>
      <main>
        <div className="title">
          <h1>Your Things</h1>
        </div>
        <div className="tasks">
          <ul>
            <li>
              <p>Test 1</p>
              <button className="deleteTask">X</button>
            </li>
            <li>
              <p>Test 1</p>
              <button className="deleteTask">X</button>
            </li>
            <li>
              <p>Test 1</p>
              <button className="deleteTask">X</button>
            </li>
          </ul>
        </div>
        <div className="controls">
          <div className="addTask">
            <button>Add Task</button>
          </div>
          <div className="deleteAllTasks">Delete All Tasks</div>
        </div>
      </main>
    </>
  );
}
