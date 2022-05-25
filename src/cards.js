import React, { Component } from 'react';
import './page1.css';
import { Link } from "react-router-dom";
function Cards(props) {
    return (
        <div>

<div className="card" id='card1' style={{width: "280px",marginLeft:"22px",marginTop:"10px"}}>
  <img src={props.image} class="card-img-top" alt="..." id='img'></img>
  <div className="card-body">
    <h5 className="card-title" id='title'>{props.title}</h5>
    <p className="card-text" id='text'>{props.text}</p>
    <Link to={props.link1} id="kk"> <button className='btn btn-outline-danger' id='btn'>Details</button></Link>
  </div>
</div>
        </div>

     );
}

export default Cards;