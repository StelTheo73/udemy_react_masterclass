import "../static/css/ShowTask.css";

export const ShowTask = ({inputReference, tasklist, setTaskList, task, setTask}) => {
  const handleEdit = (id) => () => {
    inputReference.current.focus();
    const taskToEdit = tasklist.find((task) => task.id === id);
    setTask(taskToEdit);
  }

  const handleDelete = (id) => {
    setTaskList(tasklist.filter((task) => task.id !== id));
    setTask({});
    inputReference.current.focus();
  }

  return (
      <div className="showTask">
        <div className="head">
          <div>
            <span className="title">Todo</span>
            <span className="count">{tasklist.length}</span>
          </div>
          <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
          {
            tasklist.map((task) => (
              <li key={task.id}>
                  <p>
                    <span className="name">{task.name}</span>
                    <span className="time">{task.time}</span>
                  </p>
                  <i className="bi bi-pencil-square" onClick={handleEdit(task.id)}></i>
                  <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
              </li>
            ))
          }
        </ul>
      </div>
    )
}
