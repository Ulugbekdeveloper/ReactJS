import React from "react";



class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            light: true
        }
    }
    render(){
     return(
        <h1>
            Message: {this.props.newMsg >= 0 && this.props.newMsg}
        </h1>  
     )   
}
}


export default Test