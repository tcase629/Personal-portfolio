import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/shared/Navbar';
import Nomatch from './components/shared/Nomatch';


const App = () => (
  <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Nomatch />} />
      </Routes>  
  </>
)

export default App;
