import { useState, useRef, useEffect } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import "./static/css/App.css";

function App() {
  const [taskList, setTaskList] = useState(
    localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : []
  );
  const [task, setTask] = useState({});
  const inputReference = useRef("");

  // Update local storage when taskList changes
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  });

  return (
    <div className="App">
      <Header/>
      <AddTask
        inputReference={inputReference}
        tasklist={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        inputReference={inputReference}
        tasklist={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <Footer/>
    </div>
  );
}

export {App};
