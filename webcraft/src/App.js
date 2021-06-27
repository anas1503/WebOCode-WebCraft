import './App.css';
import GameCards from './components/gamecards/GameCards';
import Footer from './components/footer/Footer'
import Landing from './components/header/Landing';
import Improve from './components/improve/Improve';
import Highlights from './components/highlights/Highlights';

function App() {
  return (
    <div className="App">
      <Landing />
      {/* <GameCards /> */}
      <Improve />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
