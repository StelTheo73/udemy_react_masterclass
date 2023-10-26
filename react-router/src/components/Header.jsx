import { Link, NavLink } from "react-router-dom";

import "../static/css/Header.css";
import Logo from "../assets/logo.png";;

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Route-mate logo"></img>
        <span>Route-mate</span>
      </Link>
      <nav className="navigation">
        {/* NavLink is used to add the active class to the link */}
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/products">Products</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
