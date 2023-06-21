import React, {useState, useRef} from 'react';
import "./Card2.css"
import Bnicer from "../../Assets/bnicer.png"
import "bootstrap/dist/css/bootstrap.min.css"

function Card2() {

  return (
 
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
  );
}

export default Card2;
