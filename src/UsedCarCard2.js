import React, { Component } from 'react';
import { BookNow1 } from './Service/api';
import './page1.css';
function UsedcarCard2(props) {
  const handleFun1 = () => {
    const object2 = {image: props.content1.image,title: props.content1.title,text: props.content1.text,Engine:props.content1.Engine,
    Model:props.content1.Model,Total:props.content1.Total,price:props.content1.price};
    console.log(object2)
    BookNow1(object2);
  
  }  
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
    <button className="btn btn-outline-danger" style={{width:"150px",marginLeft:"45px"}} onClick={() => handleFun1()}>Book Now</button>  
  </div>
</div>
        </div>

     );
}

export default UsedcarCard2;