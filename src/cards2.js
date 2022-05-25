import React, { Component } from 'react';
import './user.css';
import Cardboot1 from './cards22';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faBullhorn} from '@fortawesome/free-solid-svg-icons';
import {faLifeRing} from '@fortawesome/free-solid-svg-icons';

function Cards2() {
    return ( 

        <div id='cardarea'>
            <div className='row'>
                <div className='col-md-3'>
                <Cardboot1 name="100% Secure Payments " type="Moving your card details to a much more secure place." img={faLock}/>
                


                </div>
            <div className='col-md-3'>
            <Cardboot1 name="Trust Pay" type="100% Payment Protection" img={faThumbsUp}/>
            </div>
            <div className='col-md-3'>
            <Cardboot1 name="Deals & Offers" type="Best Deals & Offers For You." img={faBullhorn}/>
            </div>
            <div className='col-md-3'>
            <Cardboot1 name="24X7 Support" type="We are here to help.Have a querry and need help ? Click here" img={faLifeRing}/>
            </div>



            </div>



        </div>




     );
}

export default Cards2;