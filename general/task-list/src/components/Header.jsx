import "./Header.css";

import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
        <img src={Logo} className="logo" alt=""></img>
        <a href="/">Home</a>
    </header>
  )
}
