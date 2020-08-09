import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../Home/DaftarMovie';
import About from '../About/About';
import Login from '../Login/Login';



import Nav from './Nav';
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
      <>
        <ThemeProvider>    

             
          <Nav/>


           <div className="container">  

          <Switch>
          <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/login">
              <Login />
            </Route>



          
          </Switch>
          </div>  
        </ThemeProvider>
      </>
  );
}