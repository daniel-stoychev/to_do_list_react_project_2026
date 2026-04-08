import styles from "./AddTask.module.css";

export default function Modal({ tasks, addtask, onClose }) {
  // console.log("AddTask");

  return (
    <>
      <div className={styles.modal}>
        <form action="">
          <label htmlFor="task">Add your task:</label>
          <input type="text" name="task" />
          <input type="submit" value="Add Task!" />
        </form>
      </div>
    </>
  );
}
