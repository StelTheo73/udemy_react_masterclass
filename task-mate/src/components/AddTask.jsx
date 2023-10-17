import "../static/css/AddTask.css";

export const AddTask = ({inputReference, tasklist, setTaskList, task, setTask}) => {
  function handleSubmit(event) {
    event.preventDefault();

    const taskName = inputReference.current.value.trim();
    if (taskName.length === 0) {
      return;
    }

    const date = new Date();
    const taskDate = `${date.toLocaleTimeString()} ${date.toLocaleDateString("en-GB")}`

    if (task.id) {
      const updatedTasks = tasklist.map((_task) => (
        task.id === _task.id ? {..._task, name: taskName, time: taskDate} : _task
      ));
      setTaskList(updatedTasks);
    }
    else {
      const newTask = {
        id: Date.now(),
        name: taskName,
        time: taskDate,
      }

      setTaskList([...tasklist, newTask]);
    }

    inputReference.current.focus();
    // clear form fields
    handleReset(event);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  }

  function handleReset(event) {
    event.preventDefault();
    setTask({});
  }

  return (
      <div className="addTask">
        <form onSubmit={(event) => handleSubmit(event)}
              onKeyDown={(event) => handleKeyDown(event)}
              action=""
              method="GET"
        >
          <input
            id="taskInput" type="text" name="task" maxLength="25" required
            ref={inputReference}
            autoComplete="off" placeholder="Add task here..."
            value={task.name || ""}
            onChange={(event) => setTask({...task, name: event.target.value})}
          ></input>
          <button>{task.id ? "Update" : "Add"}</button>
        </form>
      </div>
    )
}
