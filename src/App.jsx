import React, { Component } from 'react';
import Player from './components/player';



class App extends Component { 
  state= {
    PlayerOne: weapons[0],
    PlayerTwo: weapons[0],
    winner: "",
    paper: false,
    rock: false,
    scissor: false  
  };

  startGame = () => {
    let count = 0;
    let gameInterval = setInterval(() => {
      count ++;
      this.setState ({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)]
        ,winner: ""
      })
      if(count > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner ()
        });
      }
    }, 100)
  }
  selectWinner = () => {
    const {playerOne, playerTwo} = this.state;
    if (playerONe === playerTwo) {
      return "Oops its a tie"
    } else if ((playerOne === "rock" && playerTwo === "scissor") || 
    (playerOne === "scissor" && playerTwo === "paper") || (playerOne === "paper" && playerTwo ==="rock"))
    {
      return "Player One Wins"
    } else {
      return "Player Two Wins"
    }
  }
  }
  render () 
    const {playerOne, playerTwo, winner} = this.state;
  return ( {
    <>
    <h1>
        Rock Paper Scissors Game
      </h1>
    <div>
      <Player weapon={playerOne} />
      <Player weapon={playerTwo} />
      </div>
      <div>
      <button>Start</button>
      <button onClick={()=>{this.setState({paper: true})}}>Paper</button>
      <button onClick={()=>{this.setState({rock: true})}}>Rock</button>
      <button onClick={()=>{this.setState({scissors: true})}}>Scissors</button>
      </div>
      <div className="winner">{winner ? this.selectWinner() : null}</div> 
      <button type="button"onClick={this.startGame}>Start</button>
    </>    
  );
}   
}

export default App;