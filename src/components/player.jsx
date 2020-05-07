import React from 'react'
import scissor from '../assets/scissors.png'
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'

const Player = (weapon) => {
  return (
    <div className="player">
    <img className="player-image"
    src={
      weapon === "rock" ? rock : weapon === "scissor" ? scissor : paper
    }
     alt="rock paper scissor"
    />
    </div>
  )
}
export default Player;