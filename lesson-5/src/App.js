import React from "react";
import {data } from "./Server"
import "./App.css"
import User from "./User";

class App extends React.Component{
  render(){
    return(
      <div>
      {
        data.map((value , index) => {
          return(
           <User key={value.id} data={value}/>
          )
        })
      }
      </div>
    )
  }
}

export default App