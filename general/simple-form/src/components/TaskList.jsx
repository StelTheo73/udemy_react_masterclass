import { useState } from "react";

import "./TaskList.css";

import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = (props) => {
    const tasks = props.tasks;
    const setTasks = props.setTasks;
    const [show, setShow] = useState(true);

    function handleDelete(taskId) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }

    return (
        <section className="task-list">
            <ul>
                <div className="header">
                    <h1>Task List</h1>
                    <button className="trigger" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Tasks</button>
                </div>
                { show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                ))}
            </ul>
            <BoxCard result="success">
                <p>{props.info}</p>
            </BoxCard>
        </section>
    )
}
