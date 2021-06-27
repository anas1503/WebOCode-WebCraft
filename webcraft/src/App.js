import './App.css';
import GameCards from './components/gamecards/GameCards';
import Footer from './components/footer/Footer'
import Landing from './components/header/Landing';
import Highlights from './components/highlights/Highlights';

function App() {
  return (
    <div className="App">
    <GameCards />
      <Footer />
    <Landing/>
    <Improve/>
    <Highlights/>
    </div>
  );
}

export default App;
