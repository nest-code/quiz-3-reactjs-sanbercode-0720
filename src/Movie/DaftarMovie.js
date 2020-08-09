import React, { useContext } from "react"
import {DaftarMovieProvider} from "./DaftarMovieContext"
import DaftarMovieList from "./DaftarMovieList"
import DaftarMovieForm from "./DaftarMovieForm"
import "./Movie.css"
import { ThemeContext } from "./ThemeContext"

const Movie = () =>{

  const [theme, setTheme] = useContext(ThemeContext)

  const changeTheme = ()=>{
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return(
    <>
      <button onClick={changeTheme}> Change Navbar to {theme === "dark" ? "Light Theme" : "Dark Theme"}</button>
      <DaftarMovieProvider>
        <DaftarMovieList/>
        <DaftarMovieForm/>
      </DaftarMovieProvider>
    </>
  )
}

export default Movie