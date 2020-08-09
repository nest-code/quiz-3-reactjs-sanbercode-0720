import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "./Nav.css"
import { ThemeContext } from "./ThemeContext";


const Nav = () =>{
  const [theme] = useContext(ThemeContext)

  return(
    <nav style={{background: theme === "dark" ? "navy" : ""}}>
         <div className="foto">
        </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/movie">Movie List Editor</Link>
        </li> 

        <li>
          <Link to="/login">Login</Link>
        </li>

      </ul>
    </nav>
  )
}

export default Nav