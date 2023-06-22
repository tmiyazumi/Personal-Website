import {React, Component} from 'react';
import "./Navbar.css";
// import the pngwing.com logo 
import linkedin from '../Assets/linkedin.png';
import gators from '../Assets/gators.png';
import {MenuData} from './MenuData';

function Navbar() {
    return (
        <nav className='NavbarItems'>
            <h1>
                React <i className='fab fa-react'></i>
            </h1>
            <ul>
                {MenuData.map((item, index) => {
                    return(
                        <li key={index}>
                            <a href = {item.url} className = {item.cName}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
  }


  export default Navbar;