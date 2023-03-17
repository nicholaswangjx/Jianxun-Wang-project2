import React from 'react'
import { Link } from 'react-router-dom'

function Rules() {
  return (
    <div>
      <h1>Wordle</h1>
      <h4>RULES</h4>
      <div className="rules-container">
        <div className="rules-left"></div>
        <div className="rules-wrapper">
          <p>
            1. Normal level: 6 chances to guess the 6-letter word. Hard level: 5
            chances to guess the 7-letter word.
          </p>
          <p>
            2. Enter the lettes from keyboard and press enter to submit your
            guess.
          </p>
          <p>
            3. Letters that are in the answer and in the right place turn green.
          </p>
          <p>
            4. Letters that are in the answer but in the wrong place turn
            yellow.
          </p>
          <p>5. Letters that are not in the answer turn gray.</p>
        </div>
        <div className="rules-right"></div>
      </div>
      <div>
        <div>
          <Link to="/">
            <button>BACK</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Rules
