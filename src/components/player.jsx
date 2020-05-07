import React from 'react'
import scissors from '../assets/scissors.png'
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'

const Player = (props) => {
  return (
    <div className="player">
    <img className="player-image"
    src={rock} alt="rock"
    />
    </div>
  )
}
export default Player;