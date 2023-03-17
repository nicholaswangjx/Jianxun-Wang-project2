import { Link } from 'react-router-dom'
import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h4>Congratulations!</h4>
          <div>Would you like to try again?</div>
          <br></br>
          <div>
            <button onClick={() => window.location.reload()}>RETRY</button>
          </div>
          <br></br>
          <div>
            <Link to="/game">
              <button>CHANGE GAME LEVEL</button>
            </Link>
          </div>
          <p>You found the solution in {turn} guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h4>You loss</h4>
          <div>Would you like to try again?</div>
          <br></br>
          <div>
            <button onClick={() => window.location.reload()}>RETRY</button>
          </div>
          <br></br>
          <div>
            <Link to="/game">
              <button>CHANGE GAME LEVEL</button>
            </Link>
          </div>
          <p className="solution">solution is: {solution}</p>
        </div>
      )}
    </div>
  )
}
