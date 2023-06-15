import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Player from './components/PlayersPresentation';
import Detail from './components/Detail'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Player />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}
export default App;

