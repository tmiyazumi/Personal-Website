import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return ( 
    <div className="dark-overlay">
      <div className="bg"></div>
      <div class="carousel-caption">
        <h1 classname = "intro-text">
            Hello! こんにちは！ I'm Taise Miyazumi
        </h1>
        <div classname="textLoop">
          <h2>I'm a{' '}
          <TypeAnimation className="textLoop"
            repeat = {Infinity}
            wrapper = "span"
            sequence = {[
              'Student 👨🏻‍🎓', 1000,
              'Software Engineer 👨🏻‍💻', 1000,
              'Developer 🪲', 1000,
              'Athlete (for fun) ⚾️', 1000,
            ]}
          />
          </h2>
        </div>
        <a class="btn btn-secondary" href="/about" role="button">Learn More About Me!</a>
      </div>
    </div>
    

  );
}

export default Home;