import React from 'react';
import './App.css';
// import lightOn from "./asset/off.jpg"
// import lightOff from "./asset/on.jpg"

class App extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     light: true
  //   } 
  // }
 

  render(){
  // const Lighting = () =>{
  //   this.setState({
  //     light: !this.state.light
  //   })
  // }
    return(
      <div>
        {/* {
          this.state.light ?
          <img src={lightOff} alt='off' width="250px" height="300px"/>
          : <img src={lightOn} alt='on'  width="250px" height="300px"/>
           <img src={this.state.light ? lightOff : lightOn}
            alt='off' width="250px" height="300px"/>

        }
       <button onClick={Lighting}>Switch</button> */}
      </div>
    )
  }
}

export default App;
