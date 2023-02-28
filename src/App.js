import './App.css'
import Header from  "./components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from './components/Body';
import Contact from './components/Contact';
import Genre from './components/Genre';
import Recent from './components/Recent';
import Detail from './components/Detail';
import Watch from './components/Watch';
import Videos from './components/Videos';

function App() {
  return (
   <Router>
    {/* <Header  /> */}
    <Routes>
      <Route path='/' exact element={<Body/>} />
      <Route path='/contact' exact element={<Contact />} />
      <Route path='/genre' exact element={<Genre />} />
      <Route path={'/search'}  element={<Recent/>} />
      <Route path={'/card/:id' }exact element={<Detail/>} />
      <Route path={'/watch/:id' }exact element={<Watch/>} />
      <Route path={'/watch/:id/video/:ep' } element={<Videos/>} />
      <Route path={'search/card/:id' }exact element={<Detail/>} />
      <Route path={'genre/card/:id' }exact element={<Detail/>} />

    </Routes>
   </Router>
  );
}

export default App;
