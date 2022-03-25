import React, {useState, useEffect, useRef} from 'react'

function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState('')
  const [timer, setTimer] = useState(STARTING_TIME)
  const [timerStart, setTimerStart] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textRef = useRef(null)
  
 function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter(word => word !== '').length
  }

  function startGame() {
    setTimerStart(true)
    setTimer(STARTING_TIME)
    setText('')
    textRef.current.disabled = false
    textRef.current.focus()
  }

  function endGame() {
    setTimerStart(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if(timerStart && timer > 0) {
      setTimeout(() => {
        setTimer(time => time - 1)
      }, 1000)
    } else if(timer === 0) {
      endGame()
    }
  }, [timer, timerStart])
  
  return (
    <div>
      <h1>Typing Game</h1>
      <textarea 
          ref={textRef}
          onChange={handleChange}
          value={text}
          disabled={!timerStart}
      />
      <h4>Time Remaining: {timer}</h4>
      <button 
          disabled={timerStart} 
          onClick={startGame}
      >
          Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;

