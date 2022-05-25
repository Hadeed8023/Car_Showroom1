import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';

import './user.css';


function CardBoot(props) {
        return (
            <div>
            <div className="card" style={{width: "290px",marginTop:"10px",backgroundColor:"#0c2f55"}}>
            <FontAwesomeIcon icon={props.img} className="card-img-top" id='fapic' style={{backgroundColor:"#0c2f55",height:"35px",color:"#546d89",marginTop:"20px"}}></FontAwesomeIcon>
            <div className="card-body">
              <h5 className="card-title" id='cardtitle'>{props.name}</h5>
              <p className="card-text" id='cardtext'>{props.type}</p>
            </div>
          </div>
          </div>
        );
    }

 
export default CardBoot;