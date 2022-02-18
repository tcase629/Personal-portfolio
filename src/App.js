import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import ContactForm from './components/contact/ContactForm';
import Navbar from './components/shared/Navbar';
import Nomatch from './components/shared/Nomatch';


const App = () => (
  <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/*" element={<Nomatch />} />
      </Routes>  
  </>
)

export default App;
