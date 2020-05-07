import React, { Component } from 'react';
import Player from './components/player';
//import Game from './components/Game'


class App extends Component { 
  state= {
    PlayerOne: weapons[0],
    PlayerTwo: weapons[0],
    winner: "",
    paper: false,
    rock: false,
    scissors: false
    
  }
  render (){
    const {playerOne, playerTwo, winner} = this.state
  return (
    <>
    <h1>
        Rock Paper Scissors Game
      </h1>
    <div>
      <Player weapon={playerOne}/>
      <Player weapon={playerTwo}/>
      </div>

      <button>Start</button>
      <button onClick={()=>{this.setState({paper: true})}}>Paper</button>
      <button onClick={()=>{this.setState({rock: true})}}>Rock</button>
      <button onClick={()=>{this.setState({scissors: true})}}>Scissors</button>
      <div> 
      <div className="winner">winner</div> 
      <button type="button">Start</button>
      </>
      </div>
      
  );
}
}
export default App;