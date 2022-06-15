import React, { Component } from 'react';
import { deleteBooking } from './Service/api';
import './page1.css';
function BookingCard(props) {
  const handledelete = async (id) => {
    const object = {id: id};
    console.log(object)
    await deleteBooking(id);
    
 
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
    <button className="btn btn-outline-danger" style={{width:"150px",marginLeft:"45px"}} onClick={() => handledelete(props.cont._id)}>Delete</button>  
  </div>
</div>
        </div>

     );
}

export default BookingCard;