import React from 'react';
import Login from './Login';
import Register from "./Register"
import { Container } from './styled';

function App() {
  return (
    <div className="App">
      <Container>
      <Register/>
      <Login/>
      </Container>
      
    </div>
  );
}

export default App;
