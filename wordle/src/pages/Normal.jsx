import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Wordle from '../components/Wordle'
import React from 'react'

function Normal() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch(
      'https://jianxun-wang-project2-backend.onrender.com/api/normal-solutions'
    )
      .then((res) => res.json())
      .then((words) => {
        // randomly select a word from words
        const randomWord = words[Math.floor(Math.random() * words.length)]
        setSolution(randomWord.word)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} level="normal" />}
      <div>
        <Link to="/game">
          <button>BACK</button>
        </Link>
      </div>
    </div>
  )
}

export default Normal
