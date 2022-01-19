import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import { FaHandPeace, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import Button from './Button';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []); 

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#D1CCDC" }}>
        <div className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaHandPeace className="nav-icon" />
              TC
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/projects"
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                Projects
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/contact" className="btn-link">
                    <Button buttonStyle="btn-outline">CONTACT</Button>
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn-outline" buttonSize="btn-mobile">
                      CONTACT
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>  
    </>
  )
}

export default Navbar;