import "./TaskCard.css";

export const TaskCard = (props) => {
    const task = props.task;

    return (
        <li className={`task-card ${task.completed ? "completed" : "incomplete"}`}>
            <span>{task.name}</span>
            <button className="delete" onClick={() => props.handleDelete(task.id)}>Delete</button>
        </li>
    )
}
