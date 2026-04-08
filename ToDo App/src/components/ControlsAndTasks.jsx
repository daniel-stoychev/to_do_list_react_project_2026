import styles from "./CtrlAndTasks.module.css";
import closeImg from "../assets/x.svg";
import useTask from "../hooks/useTask.js";
import Modal from "./AddTask.jsx";
import { useState } from "react";

export default function ControlsAndTasks() {
  const { tasks, addTask } = useTask();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.title}>
          <h1>Your Things</h1>
        </div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div className={styles.tasks} key={task.id}>
              <ul>
                <li>
                  <div className={styles.singleTask}>
                    <img src={closeImg} />
                    <p>{task.text}</p>
                  </div>
                  <button className={styles.deleteTask}>×</button>
                </li>
              </ul>
            </div>
          ))
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
            <button onClick={() => setIsOpen(true)}>Add</button>
            {isOpen && (
              <Modal
                tasks={tasks}
                addTask={addTask}
                onClose={() => setIsOpen(false)}
              ></Modal>
            )}
          </div>
          <div className={styles.deleteAllTasks}>
            <button>Delete All Tasks</button>
          </div>
        </div>
      </main>
    </>
  );
}
