import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import "./App.css";

function App() {
  const username = "StelTheo73";


  return (
    <div className="App">
      <Header/>
      <h1 className="active">Hello {username}!</h1>
      <TaskList info="Test info"/>
      <Footer/>
    </div>
  );
}

export {App};
