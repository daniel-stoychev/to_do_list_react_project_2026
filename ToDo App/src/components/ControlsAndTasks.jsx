import styles from "./CtrlAndTasks.module.css";
import closeImg from "../assets/x.svg";

export default function ControlsAndTasks(tasks, addTask) {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.title}>
          <h1>Your Things</h1>
        </div>
        {tasks.lenght > 0 ? (
          <div className={styles.tasks}>
            <ul>
              <li>
                <div className={styles.singleTask}>
                  <img src={closeImg} />
                  <p>Test 1</p>
                </div>
                <button className={styles.deleteTask}>×</button>
              </li>
            </ul>
          </div>
        ) : (
          <p className={styles.noTasks}>There are no tasks!</p>
        )}

        <div className={styles.completed}>
          <span>
            completed tasks: <span>test</span>
          </span>
        </div>
        <div className={styles.controls}>
          <div className={styles.addTask}>
            <button>Add</button>
          </div>
          <div className={styles.deleteAllTasks}>
            <button>Delete All Tasks</button>
          </div>
        </div>
      </main>
    </>
  );
}
