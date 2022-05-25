import React, { Component } from 'react';
import bg from './images/bg1.mp4';
import Header from './header';
import './page1.css';
function Bgvideo () {
    return (
        <div>
            <div className='row'>
                <div className='col-md-12' id='bg2'>
                    <Header/>

                </div>

            </div>
        <div className='row'>
            <div className='row-md-12'>
                
            <video autoPlay loop muted id='bg1'>
                <source src={bg} type='video/mp4'></source>
            </video>
           
            </div>
          
              

        </div>
        <div id='overlay'>
            <h1>Find Luxury Cars</h1>
            <h2>for afordable price</h2>
            <button type="button" className="btn btn-outline-danger" id='btn1'>Discover Now</button>
           
        </div>
        </div>
     );
}

export default Bgvideo ;