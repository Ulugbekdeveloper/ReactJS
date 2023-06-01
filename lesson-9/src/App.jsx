import React from "react";
import "./App.css";
import MovieList from "./moveList"
import Navbar from "./Navbar";
import Add from "./Add"

const App = () =>{
  return(
     <div>
       <Navbar/>
       <Add/>
      <MovieList/>
     </div>
  )
}

export default App
