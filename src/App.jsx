import React, { Component } from 'react';
//import Game from './components/Game'


class App extends Component { 
  state= {
    paper: false
    rock: false
    scissors: false
    
  }
  render (){
  return (
    <div>
      <button>Start</button>
      <button onClick={()=>{this.setState({paper: true})}}>Paper</button>
      <button onClick={()=>{this.setState({rock: true})}}>Paper</button>
      <button onClick={()=>{this.setState({scissors: true})}}>Paper</button>
      <h1>
        Rock Paper Scissors Game
      </h1>
      </div>
  );
}
}
export default App;