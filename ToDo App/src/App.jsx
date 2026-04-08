import Header from "./components/Header.jsx";
import "../styles/style.css";
import ControlsAndTasks from "./components/ControlsAndTasks.jsx";

function App() {
  // const { tasks, addTask } = useTask;

  return (
    <>
      <Header />
      <ControlsAndTasks />
      {/* <ControlsAndTasks tasks={tasks} addTask={addTask} /> */}
    </>
  );
}

export default App;
