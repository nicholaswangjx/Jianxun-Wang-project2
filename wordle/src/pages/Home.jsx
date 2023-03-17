import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Wordle</h1>
      <div>
        <Link to="/game">
          <button>GAME</button>
        </Link>
      </div>
      <br></br>
      <div>
        <Link to="/rules">
          <button>RULES</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
