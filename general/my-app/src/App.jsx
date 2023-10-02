import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";



function App() {
  const username = "StelTheo73";
  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter(counter + 1);
  }

  function handleAddThree() {
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
  }

  function handleSub() {
    setCounter(counter-1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <>
      <Header/>
        <div className="App">
          <h1 className="active">Hello {username}!</h1>

          <div className="box">
            <p>{counter}</p>
            <button className="add" onClick={handleAdd}>ADD</button>
            <button className="sub" onClick={handleSub}>SUB</button>
            <button className="add" onClick={handleAddThree}>ADD 3</button>
            <button className="reset" onClick={handleReset}>RESET</button>
          </div>


        </div>
      <Footer/>
    </>
  );
}

export {App};
