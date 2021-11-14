import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
 return (
   <div className="navbar">
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
   </div>
 )
}

export default Navbar;