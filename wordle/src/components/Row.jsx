import React from 'react'

export default function Row({ guess, currentGuess, wordLength }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let lettters = currentGuess.split('')
    return (
      <div className="row current">
        {lettters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(wordLength - lettters.length)].map((_, i) => (
          <div></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      {[...Array(wordLength)].map((_, i) => (
        <div></div>
      ))}
    </div>
  )
}
