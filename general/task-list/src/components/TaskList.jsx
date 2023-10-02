import { useState } from "react";

import "./TaskList.css";

import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

function fetchTasks() {
    const tasks = [
      {id: 324, name: "Record React Lectures", completed: true},
      {id: 678, name: "Edit React Lectures", completed: false},
      {id: 5067, name: "Post Lectures", completed: false},
      {id: 123, name: "Wash the dishes", completed: false},
      {id: 2908, name: "Watch Lectures", completed: false},
    ]

    return tasks.sort((a, b) => a.id - b.id);
}

export const TaskList = (props) => {
    const [task, setTasks]  = useState(fetchTasks());
    const [show, setShow] = useState(true);

    function handleDelete(taskId) {
      setTasks(task.filter((task) => task.id !== taskId));
    }

    return (
        <div className="task-list">
            <h1>Task List</h1>
            <ul>
                <button className="trigger" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
                { show && task.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                ))}
            </ul>
            <BoxCard result="success">
                <p>{props.info}</p>
            </BoxCard>
        </div>
    )
}
