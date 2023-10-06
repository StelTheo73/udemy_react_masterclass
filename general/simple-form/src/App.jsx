import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
import "./App.css";

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

function App() {
  const username = "StelTheo73";
  const [tasks, setTasks]  = useState(fetchTasks());

  return (
    <div className="App">
      <Header/>
      <h1 className="active">Hello {username}!</h1>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} info="Test info" />
      <Footer/>
    </div>
  );
}

export {App};
