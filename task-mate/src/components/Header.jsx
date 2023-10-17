import { useState, useEffect } from "react";

import "../static/css/Header.css";

import Logo from "../assets/logo.png";;

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");


  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.classList.remove("light", "medium", "dark", "gOne", "gTwo", "gThree");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
        <div className="logo">
          <img src={Logo} alt="Task-mate logo"></img>
          <span>Task-mate</span>
        </div>
        <div className="themeSelector">
          <span onClick={(event) => {setTheme(event.target.classList[0])}} className={theme === "light" ? "light activeTheme" : "light"}></span>
          <span onClick={(event) => {setTheme(event.target.classList[0])}} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
          <span onClick={(event) => {setTheme(event.target.classList[0])}} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
          <span onClick={(event) => {setTheme(event.target.classList[0])}} className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
          <span onClick={(event) => {setTheme(event.target.classList[0])}} className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
          <span onClick={(event) => {setTheme(event.target.classList[0])}} className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
        </div>
    </header>
  )
}
