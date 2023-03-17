import React from 'react'
import { Link } from 'react-router-dom'

function Game() {
  return (
    <div>
      <h1>Wordle</h1>
      <h4>GAME LEVEL</h4>
      <div>
        <div>
          <Link to="/game/normal">
            <button>NORMAL</button>
          </Link>
        </div>
        <br></br>
        <div>
          <Link to="/game/hard">
            <button>HARD</button>
          </Link>
        </div>
        <br></br>
        <div>
          <Link to="/">
            <button>BACK</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Game
