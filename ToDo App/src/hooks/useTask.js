import { useState } from "react";

export default function useTask() {

    const { tasks, setTasks } = useState([]);

    const addTask = (text) => {

        if (!text.trim()) {
            return;
        }

        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }

        setTasks((prev) => [...prev, newTask]);
    }


    return { tasks, addTask };
}