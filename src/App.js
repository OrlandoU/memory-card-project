import './styles/App.css';
import randomizer from './helpers/randomizer';
import queryId from './helpers/queryId';

function App() {

  const query = async () => {
    let randomCharIdArr = [...randomizer(5)]
    console.log(randomCharIdArr)
    for(const id of randomCharIdArr){
      let data = await queryId(id)
      console.log(data)
    }
  }

  return (
    <div className="App">
      <div>Click to fetch random Character</div>
      <button onClick={query}>Query</button>
    </div>
  )
}

export default App;
