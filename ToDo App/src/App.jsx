import Header from "./components/Header.jsx";
import "../styles/style.css";
import ControlsAndTasks from "./components/ControlsAndTasks.jsx";
import useTask from "./hooks/useTask.js";

function App() {
  const { tasks, addTask } = useTask;

  return (
    <>
      <Header />
      <ControlsAndTasks />
    </>
  );
}

export default App;
