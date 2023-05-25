

import About from './components/About';
import GameDetails from './components/GameDetails';
import Main from './components/Main';

import { Routes ,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import './styles/mobile.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route  path="/about" element={<About/>}/>
       
        <Route  path="/terms-and-conditions" element={<>
        <Navbar/>
        <Terms/>
        <Footer/>
        </>}/>
        <Route  path="/privacy" element={<>
        <Navbar/>
        <Privacy/>
        <Footer/>
        </>}/>
        <Route path="/work" element={<>
        <Navbar/>
        <Projects/>
        <Footer/>
        </>}/>
        <Route  path="/game-details/:id" element={<GameDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
