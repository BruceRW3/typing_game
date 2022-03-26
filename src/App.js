import React from 'react'
import useGame from './hooks/useGame'

function App() {
  const {
    timer, 
    timerStart, 
    startGame, 
    handleChange, 
    textRef, 
    wordCount, 
    text
  } = useGame()
  
  return (
    <div>
      <h1>Typing Game</h1>
      <textarea 
          placeholder="Hi, my name is (your name here). It is nice to meet you. I hope you have a great day!"
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
      <h1>Words Per Minute: {wordCount}</h1>
    </div>
  );
}

export default App;

