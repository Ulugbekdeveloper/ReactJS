import React, {Component} from "react"
import ReactHooks from "./ReactHooks"


class ReactOld extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            status: "Student"
        }
    }
    render(){
        return(
            <div>
                <ReactHooks item={this.state.counter} status={this.state.status}/>
               <hr /> 
                <div>React Old version</div> 
                <input
                 placeholder="Student" 
                 value={this.state.status}
                 onChange={(e)=> this.setState({status: e.target.value})}/>
                 <h1>React Old State:{this.state.counter}</h1>
                 <button onClick={()=>this.setState({counter: this.state.counter +1})}>+</button>
                 <button onClick={()=>this.setState({counter: this.state.counter -1})}>-</button>
            </div>
        )
    }

}

export default ReactOld