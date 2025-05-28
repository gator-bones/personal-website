import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/nav/nav';
import Home from './pages/home/home';
import About from './pages/about/about';
import Byf from './pages/about/byf_dni';
import Friend from './pages/about/friends/friends';
import Quote from './pages/about/quotes/quotes';
import Treasure from './pages/about/treasures/treasures';
import Project from './pages/projects/projects';

function App() {
  return (
    <Router>
      <div>
        <Nav/>

        {/* other routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path='/byf' element={<Byf />} />
          <Route path='/friends' element={<Friend />} />
          <Route path='/quotes' element={<Quote />} />
          <Route path='/treasures' element={<Treasure />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
