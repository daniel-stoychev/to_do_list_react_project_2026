import styles from "./Header.module.css";

const date = new Date().toDateString();

export default function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <section className={styles.title}>
          <h1>Task Manager</h1>
          <p>{date}</p>
        </section>
        <section className={styles.date}>
          <span>
            all:<span>test</span>
          </span>
        </section>
      </div>
    </>
  );
}
