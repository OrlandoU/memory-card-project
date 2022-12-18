import './styles/App.css';
import Header from './components/Header'
import Body from './components/Body'
import { useState } from 'react';

function App() {
  const [level, setLevel] = useState(3)

  const restartGame = () => {

  }

  const continueNextLevel = () => {

  }

  return (
    <div className="App">
      <Header />
      <Body level={level} />
    </div>
  )
}

export default App;
