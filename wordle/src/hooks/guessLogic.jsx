import { useState } from 'react'

const guessLogic = (solution, level) => {
  let maxTurn, wordLength
  switch (level) {
    case 'normal':
      maxTurn = 6
      wordLength = 6
      break
    case 'hard':
      maxTurn = 5
      wordLength = 7
      break
  }
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(maxTurn)])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({})
  // letter used object, e.g. {"a":"yellow", "b":"grey", "c":"green"}

  // convertGuess is to convert a guess into an array of letter objects
  const convertGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: 'grey' } // default color is grey
    })

    // find right letter in the exact place
    formattedGuess.forEach((letterObject, index) => {
      if (solutionArray[index] === letterObject.key) {
        formattedGuess[index].color = 'green'
        solutionArray[index] = null
      }
    })

    formattedGuess.forEach((letterObject, index) => {
      if (
        solutionArray.includes(letterObject.key) &&
        letterObject.color !== 'green'
      ) {
        formattedGuess[index].color = 'yellow'
        solutionArray[solutionArray.indexOf(letterObject.key)] = null
      }
    })

    return formattedGuess
  }

  // addNewGuess is to add a new guess to the guesses state
  // update the sCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formatted) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formatted
      return newGuesses
    })
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess]
    })
    setTurn((prevTurn) => {
      return prevTurn + 1
    })

    setUsedKeys((prevUsedKeys) => {
      formatted.forEach((l) => {
        const currentColor = prevUsedKeys[l.key]

        if (l.color === 'green') {
          prevUsedKeys[l.key] = 'green'
          return
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          prevUsedKeys[l.key] = 'yellow'
          return
        }
        if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
          prevUsedKeys[l.key] = 'grey'
          return
        }
      })

      return prevUsedKeys
    })

    setCurrentGuess('')
  }

  // handleKey is to handle key event and track current guess
  const handleKey = ({ key }) => {
    // submit the guess
    if (key === 'Enter') {
      // only add guess if turn is less then allowed turn
      if (turn >= maxTurn) {
        return
      }
      // do not allow dup
      if (history.includes(currentGuess)) {
        return
      }
      // check word length
      if (currentGuess.length !== wordLength) {
        return
      }
      const formatted = convertGuess()
      addNewGuess(formatted)
    }
    // if hit 'Backspace', delete the last character in the guess
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
      return
    }
    // if user input valid letters, concatenate new letter with previous guess
    if (/^[a-zA-Z]$/.test(key)) {
      if (currentGuess.length < wordLength) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKey,
    maxTurn,
    wordLength,
  }
}

export default guessLogic
