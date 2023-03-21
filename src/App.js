import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Coin from './components/Coin';
import CoinDetails from "./components/CoinDetails";
import Exchange from "./components/Exchange";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/coins' element={<Coin/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
        <Route path='exchange' element={<Exchange/>}/>


      </Routes>
    </Router>
  );
}

export default App;
