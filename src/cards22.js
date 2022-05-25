import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';

import './user.css';


function CardBoot(props) {
        return (
            <div>
            <div className="card" style={{width: "270px",marginTop:"20px",backgroundColor:"#444545",marginLeft:"10px",height:"200px",border:"0px"}}>
            <FontAwesomeIcon icon={props.img} className="card-img-top" id='fapic' style={{backgroundColor:"#444545",height:"48px",color:"#546d89",marginTop:"20px"}}></FontAwesomeIcon>
            <div className="card-body">
              <h5 className="card-title" id='cardtitle'>{props.name}</h5>
              <p className="card-text" id='cardtext'>{props.type}</p>
            </div>
          </div>
          </div>
        );
    }

 
export default CardBoot;