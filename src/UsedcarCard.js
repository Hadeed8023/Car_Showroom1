import React, { Component } from 'react';
import './page1.css';
import { Link } from "react-router-dom";
function UsedcarCard(props) {
    return (
        <div>

<div className="card" id='card1' style={{width: "280px",marginLeft:"28px",marginTop:"20px",marginBottom:"20px"}}>
  <img src={props.image} class="card-img-top" alt="..." id='img'></img>
  <div className="card-body">
    <h5 className="card-title" id='title'>{props.title}</h5>
    <p className="card-text" id='text'>{props.text}</p>
    <p className="card-text" id='text'>Engine:{props.Engine}</p>
    <p className="card-text" id='text'>Model:{props.Model}</p>
    <p className="card-text" id='text'>Total Driven:{props.Total}</p>
    <p className="card-text" id='text' style={{fontWeight:"800",fontSize:"19px"}}>Price:{props.price}</p>
    
  </div>
</div>
        </div>

     );
}

export default UsedcarCard;