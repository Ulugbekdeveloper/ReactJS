import React from "react"
import { Container, Title, Wrapper ,Contain ,Button } from "./style"
import "./app.css"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: true
    }
  }
  render(){
    const onTrue = ()=>{
      this.setState({
        display: true
      })
    }
    const onFalse = ()=>{
      this.setState({
        display: false
      })
    }
    return(
        <Wrapper>
         <Title color={"error"} size={"desktop"}>Webbrain Academy</Title>
         <Title color={"warning"} size={"tablet"}>Webbrain Academy</Title>
         <Title color={"success"} size={"mobile"}>Webbrain Academy</Title>
         <Contain>
         <Container display={true}/>
         <Container display={this.state.display}/>
         <Button onClick={onTrue}>True</Button>
         <Button onClick={onFalse}>False</Button>
         </Contain>
        </Wrapper>
      
    ) 
  }
}

export default App