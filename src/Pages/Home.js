import React from 'react';
import './Home.css';
import Typical from 'react-typical';

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
          <Typical className="textLoop"
            loop = {Infinity}
            wrapper = "b"
            steps = {[
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