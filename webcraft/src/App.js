import './App.css';
import GameCards from './components/gamecards/GameCards';
import Footer from './components/footer/Footer'
import Landing from './components/header/Landing';

function App() {
  return (
    <div className="App">
    <GameCards />
      <Footer />
    <Landing/>
    </div>
  );
}

export default App;
