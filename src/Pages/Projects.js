import React from 'react';
// import Card from './Components/Card.js';
// import NewCard from './Components/Card2.js';
import './Projects.css';
import Bnicer from "../Assets/bnicer.png"
import allertillio from "../Assets/alertillio.jpg"
import speakr from "../Assets/speakr.jpeg"
import falldawei from "../Assets/falldawei.jpeg"

function Projects() {
  return (
    <div className="App">
      <div className="container" >
          <div class="card-deck">
            <div class="card">
            <img class="card-img-top" src={Bnicer} />
              <div class="card-body">
                <h5 class="card-title">Bnicer</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">2023 SASEHacks Grand Prize</small></p>
              </div>
             </div>
          </div>
          <div class="card-deck">
            <div class="card">
            <img class="card-img-top" src={speakr} />
              <div class="card-body">
                <h5 class="card-title">Speakr</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">2022 SwampHacks Best Use of Assembly AI</small></p>
              </div>
             </div>
          </div>
          <div class="card-deck">
            <div class="card">
            <img class="card-img-top" src={falldawei} />
              <div class="card-body">
                <h5 class="card-title">Fall-Da-Wei</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">2022 SASEHacks Grand Prize</small></p>
              </div>
             </div>
          </div>
          
      </div>
    </div>
  );
}

export default Projects;