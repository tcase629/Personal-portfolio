import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/shared/Navbar';
import About from './components/about/About';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';



const App = () => (
  <div className="app">
    <Navbar />
      <div className="section">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>  
      </div>
  </div>
)

export default App;
