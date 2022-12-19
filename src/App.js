import './styles/App.css';
import Header from './components/Header'
import Body from './components/Body'
import { useState } from 'react';

function App() {
  let bestScoreLC = +localStorage.getItem('bestScore') || 0;
  const [level, setLevel] = useState(3)
  const [bestScore, setBestScore] = useState(bestScoreLC)

  const restartGame = () => {
    setLevel(3)
  }

  const continueNextLevel = () => {
    if(level - 2 > bestScore){
      saveBestScore(level - 2)
    }
    setLevel(prevState=>prevState + 1)
  }

  const saveBestScore = (score) => {
    localStorage.setItem('bestScore', score.toString())
    setBestScore(score)
  }

  return (
    <div className="App">
      <Header crrScore={level - 3} bestScore={bestScore}/>
      <Body continueNextLevel={continueNextLevel} restartGame={restartGame} level={level} />
    </div>
  )
}

export default App;
