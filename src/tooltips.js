import React, { Component } from 'react';

function Tooltips(props) {
    return ( 

        <div>

<img src={props.img} id='easypaisa' data-bs-toggle="tooltip" data-bs-placement="bottom" 
title={props.title}></img>

  </div>



     );
}

export default Tooltips;