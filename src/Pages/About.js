import React from 'react';
import "./About.css";
import myImage from '../Assets/taisepic.jpg';

function About() {
  return (
    <div className="title">
      Let me introduce Taise!
      <div className="photo">
        <img src={myImage} alt="My Image" className="my-image" />
     </div>
      <div className="text">
      I am a third year Computer Science major enrolled in the Bachelors of Science Degree program at University of Florida! I am looking for opportunities to grow as an individual and learn skills that are necessary to become a software engineer. Few interests I have include working with backend software and APIs. 
      </div>
    </div>


  );
}

export default About;