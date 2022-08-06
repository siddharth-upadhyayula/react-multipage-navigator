import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <>
      <Router>
      <div style = {{width: 150 + "vw", height:100, backgroundColor:"lightblue"}}>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/about"> About </Link>
      </div>
      
      <Routes>
        <Route path="/:name" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;