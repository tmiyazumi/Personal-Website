import React from 'react';
import './Navbar.css';
// import the pngwing.com logo 
import linkedin from './linkedin.png';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
            <left>
                Taise Miyazumi's Portfolio
            </left>
                <li>
                <a href="/">home</a>
                </li>
                <li>
                <a href="/about">about</a>
                </li>
                <li>
                <a href="/experiences">experiences</a>
                </li>
                <li>
                <a href="/projects">projects</a>
                </li>
                <li>
                <a href="/contact">contact</a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/taisemiyazumi/">
                    <img src={linkedin} alt="linkedin" width="30" height="30" />
                </a>
                </li>
            </ul>
        </nav>
    );
  }


  export default Navbar;