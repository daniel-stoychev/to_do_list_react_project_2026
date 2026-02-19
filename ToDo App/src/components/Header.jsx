import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <section className="title">
          <h1>Task Manager</h1>
        </section>
        <section className="date">
          <p>{Date()}</p>
        </section>
      </div>
    </>
  );
}
