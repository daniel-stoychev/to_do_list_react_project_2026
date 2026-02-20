import Header from "./components/Header.jsx";
import "../styles/style.css";
import { useState } from "react";
import ControlsAndTasks from "./components/ControlsAndTasks.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Header />
      <ControlsAndTasks />
    </>
  );
}

export default App;
