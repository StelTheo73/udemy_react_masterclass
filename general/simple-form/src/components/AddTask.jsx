import { useRef, useState } from "react";
import "./AddTask.css";

export const AddTask = (props) => {
  const [taskValue, setTaskValue] = useState("");
  const [taskState, setTaskState] = useState("false");

  // Use it as reference (object) to <input>
  const inputReference = useRef("");

  function handleChange(event) {
    setTaskValue(event.target.value);
  }

  function handleReset(event) {
    event.preventDefault();
    // event.target.parentNode.querySelector("#task").value = "";
    setTaskValue("");
    setTaskState("false");
  }

  function handleSubmit(event) {

    event.preventDefault();

    // Access to <input> object
    // inputReference.current.valueOf()

    if (taskValue.trim().length === 0) {
      return;
    }

    const task = {
      id: Date.now(),
      name: taskValue.trim(),
      completed: (taskState === "true")
    }

    props.setTasks([...props.tasks, task]);

    // clear form fields
    handleReset(event);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }

  return (
    <section className="add-task">
        <form action=""
              method="GET"
              onSubmit={(event) => handleSubmit(event)}
              onKeyDown={(event) => handleKeyDown(event)}>
            <input
                type="text"
                name="task"
                id="task"
                placeholder="Todo..."
                autoComplete="off"
                value={taskValue}
                onChange={(event) => handleChange(event)}
                ref={inputReference}
              >
              </input>
              <select onChange={(event) => setTaskState(event.target.value)}
                      value={taskState}>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
              </select>
            <button className="reset"
                    onClick={(event) => handleReset(event)}
            >Reset</button>
            <button type="submit">Add Task</button>
        </form>
        <p>{taskValue}</p>
    </section>
  )
}
