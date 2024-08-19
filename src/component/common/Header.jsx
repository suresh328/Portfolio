import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import "./common.css"


function Header() {
  const [mobileview, setMobileview] = useState(false);

  const [color, setColor] = useState(false);
  const changecolor = () => {
    if(window.scrollY >= 100){
      setColor(true)
    }else {
      setColor(false)
    }
  };
  window.addEventListener("scroll" , changecolor)
  return (
    <nav className={color ? "header header-bg":"header"}>
      <div className="logo">
        <Link>Live</Link>
      </div>
      <ul
        className={mobileview ? "nav-menu active" : "nav-menu"} onClick={() => setMobileview(false)}>
        <li>
          <Link to="/" className="list">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="list">
            About
          </Link>
        </li>
        <li>
          <Link to="/Service" className="list">
            Service
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="list">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/project" className="list">
            Projects
          </Link>
        </li>
      </ul>
      <button className="humbuger" onClick={() => setMobileview(!mobileview)}>
       {mobileview ?<FaTimes size={20} style={{color :'#fff', background : "none"}}/> :
        
        <FaBars size={20} style={{color :'#fff', background : "none"}}/>} 
      </button>
    </nav>
  );
}

export default Header;
