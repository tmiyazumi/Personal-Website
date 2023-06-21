import React from 'react';
import './Home.css';
import myImage from '../Assets/taisepic.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <div className="image-container">
        <img src={myImage} alt="My Image" className="my-image" />
      </div>
      <div className="text-container">
        <h1>Welcome to Taise's Portfolio</h1>
        <p>I am a aspring 4th year CS major at University of Florida! I am currently interning at Capital One as a SWE intern in the Enterprise Data Science and Machine Learning Team.</p>
        <Link to="/about">
          <button>Go to About Page</button>
        </Link>
      </div>
    </div>

  );
}

export default Home;