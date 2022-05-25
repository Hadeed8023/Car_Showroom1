import React, { Component } from 'react';
import './user.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import Tooltips from './tooltips';
 function Footer() {
     return ( 
        <div id='footer'>
            <div className='row'>
                <div className='col-md-4'>

                    <h4 className='payment'>Payment</h4>



                </div>

                <div className='col-md-4'>

                <h4 className='payment'>Subscribe</h4>



                </div>

                <div className='col-md-4'>

                  

                    <h4 className='payment1'>Keep in touch</h4>
                    

                </div>



            </div>

            <div className='row'>
                <div className='col-md-4' id='main'>
                    

                    <Tooltips img="https://th.bing.com/th/id/OIP.St0ph2luc0w4zKIe_eK4UgHaFp?pid=ImgDet&w=1075&h=819&rs=1" title="Easypaisa"/>

                    <Tooltips img="https://netmag.pk/wp-content/uploads/2018/09/JazzCash-logo.jpg" title="Jazzcash"/>

                    <Tooltips img="https://th.bing.com/th/id/R.95d007ebf3231f38229f71f5aecdbea1?rik=Ss3sJwr3qzqTpw&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f07%2fvisa_logo_7.jpg&ehk=CSuo2ZGEs8pAFhtEZdhZrrFqBe9HeoSS2tUHFpLI1Mg%3d&risl=&pid=ImgRaw&r=0" title="Visa"/>

                    <Tooltips img="https://th.bing.com/th/id/OIP.auIe5X0EeNlYcD1F-l_wdAHaJU?pid=ImgDet&rs=1" title="Bookaru"/>

                    <Tooltips img="https://th.bing.com/th/id/OIP.Qz52Bq7JU3GKGyd5S5-fzwHaFj?pid=ImgDet&rs=1" title="Cash"/>
                    
                   
                    
                    </div>

                <div className='col-md-4'>
                <div className="input-group mb-3" style={{marginTop:"20px",marginLeft:"10px"}}>
                 <input type="email" className="form-control" placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{backgroundColor:"#546d89",color:"white"}}>Subscribe
                        </button>
                        </div>



                </div>

                <div className='col-md-4' id='icons'>
                    <FontAwesomeIcon icon={faPhone} className="iconsshade"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faEnvelope} className="iconsshade" style={{left:"1070px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faBook} className="iconsshade" style={{left:"1110px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faAt} className="iconsshade" style={{left:"1140px"}}></FontAwesomeIcon>
                      



                </div>

               


                </div>

                <div className='container'>
                   <hr id='border'></hr>

                </div>

                <div className='container'>
                <ul id='list'>
                <li className='listname'>About Us</li>
                <li className='listname'>Terms & Conditions Of Use</li>
                <li className='listname'>FAQs</li>
                <li className='listname'>Support</li>
                </ul>


                </div>

                <div className='end'>

                   <p id="ptag">Copyright © 2020 <span style={{color:"#0865af"}}>INFINITY.</span>All Rights Reserved.</p>
                   
                    

                </div>


            </div>




      




      );
 }
 
 export default Footer;