import React, { Component } from 'react';
import car1 from './images/car5.jfif';
import car2 from './images/car7.jfif';
import car3 from './images/car6.jfif';


function Carasol() {
    return ( 
        
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" >
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={car3} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={car2} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={car1} className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     );
}

export default Carasol;