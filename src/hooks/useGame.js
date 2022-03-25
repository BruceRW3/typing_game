import {useState, useEffect, useRef, useCallback} from 'react'

function useGame(startingTime = 10) {
        const [text, setText] = useState('')
        const [timer, setTimer] = useState(startingTime)
        const [timerStart, setTimerStart] = useState(false)
        const [wordCount, setWordCount] = useState(0)
        const textRef = useRef(null)
        
        function handleChange(e) {
          const {value} = e.target
          setText(value)
        }
      
        function calculateWordCount(text) {
          const wordsArr = text.trim().split(' ')
          return wordsArr.filter(word => word !== '').length * 6
        }
      
        function startGame() {
          setTimerStart(true)
          setTimer(startingTime)
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

        return {timer, timerStart, startGame, handleChange, textRef, wordCount, text}
}

export default useGame