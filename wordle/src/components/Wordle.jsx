import React, { useEffect, useState } from 'react'
import guessLogic from '../hooks/guessLogic'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution, level }) {
  const {
    currentGuess,
    handleKey,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    maxTurn,
    wordLength,
  } = guessLogic(solution, level)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKey)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 1300)
      window.removeEventListener('keyup', handleKey)
    }

    if (turn >= maxTurn) {
      setTimeout(() => setShowModal(true), 1500)
      window.removeEventListener('keyup', handleKey)
    }

    return () => window.removeEventListener('keyup', handleKey)
  }, [handleKey, isCorrect, turn])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        wordLength={wordLength}
      />
      <Keypad usedKeys={usedKeys} />
    </div>
  )
}
