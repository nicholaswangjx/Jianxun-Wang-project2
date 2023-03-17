import React from 'react'
import Row from './Row'

export default function Grid({ currentGuess, guesses, turn, wordLength }) {
  return (
    <div>
      {guesses.map((g, index) => {
        if (turn === index) {
          return (
            <Row
              key={index}
              currentGuess={currentGuess}
              wordLength={wordLength}
            />
          )
        }
        return <Row key={index} guess={g} wordLength={wordLength} />
      })}
    </div>
  )
}
