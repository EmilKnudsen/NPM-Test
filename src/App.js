import './App.css';
import PokemonCard from './components/PokemonCard';
import Navigator from './pages/Navigator';

function App() {
  return (
    <div className="App">
      <div className="nav">
      <Navigator/>
      </div>
      <div className="pokemon">
      <PokemonCard/>
      </div>
    </div>
  );
}

export default App;
