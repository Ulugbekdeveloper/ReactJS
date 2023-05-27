import React from "react";
import ClassComponent from "./StudentClass";

import FunctionComponent from "./StudentFunc";
import "./App.css"

var students = [
  {id:1, name:"Ulug'bek", status:"Frontend"},
  {id:2, name:"Temurbek", status:"Backend"},
  {id:3, name:"Abdushukur", status:"IOS"},
  {id:4, name:"Alisher", status:"Flutter"},
  {id:5, name:"Bexruz", status:"Data"},
  {id:6, name:"Tolib", status:"Analitic"},
  {id:7, name:"Salima", status:"Engineer"},
  {id:8, name:"Shaxnoza", status:"Software"},
]

class App extends React.Component{
  render(){
    return(
      <div>
       {/* {
        students.map((value ,index)=> {
          return (
            <ClassComponent 
            id={value.id} 
            name={value.name} 
            status={value.status}/>
           
          ) 
        })
       } */}
         <ClassComponent data={students}/>
        <FunctionComponent />
      </div>
    )
  }
}

export default App;
