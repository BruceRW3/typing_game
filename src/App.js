import React, {useState, useEffect} from 'react'

function App() {
  const [text, setText] = useState('')
  const [timer, setTimer] = useState(5)
  const [startGame, setStartGame] = useState(false)

  useEffect(() => {
    if(startGame && timer > 0) {
      setTimeout(() => {
        setTimer(time => time - 1)
      }, 1000)
    } else if(setTimer === 0) {
      startGame(false)
    }
  }, [timer, startGame])

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function wordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }
  
  return (
    <div>
      <h1>Typing Game</h1>
      <textarea 
          onChange={handleChange}
          value={text}
      />
      <h4>Time Remaining: {timer}</h4>
      <button onClick={() => setStartGame(true)}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
