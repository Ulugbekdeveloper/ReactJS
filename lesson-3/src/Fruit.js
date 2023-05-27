import React from "react"
import "./fruit.css"


class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name: "",
            surname: "",
            age: "",
            count : -10
        }
    this.userData = this.userData.bind(this)
    }
     userData(event){
        this.setState({
         [event.target.name] : event.target.value
      })
      }
    render(){
        const minus = ()=>{
            if(this.state.count > 0){
                this.setState({count: this.state.count - 1})
            }
           
        }
        const plus = ()=>{
            this.setState({count: this.state.count + 1})
        }
      
        return(
            <div>
            <div className="main">
               <h1 onClick={minus}>-</h1>    
               <h1>{this.state.count}</h1>
               <h1 onClick={plus}>+</h1>
           </div>
           <h1>Name: {this.state.name} </h1>
           <input name="name" onChange={this.userData} type="text" placeholder="name" value={this.state.name}/>
           <h1>Surame: {this.state.surname} </h1>
           <input name="surname"  onChange={this.userData} type="text" placeholder="surname" value={this.state.surname}/>
           <h1>Age: {this.state.age} </h1>
           <input name="age"  onChange={this.userData} type="number" placeholder="age" value={this.state.age}/>
           </div>   
        )
    }   
}

export default Hello