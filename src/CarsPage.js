import React, { Component } from 'react';
import Header from './header';
import './page1.css';
import Cards from './cards';
import Cards2 from './cards2';
import Footer from './footer';

function CarsPage(props) {
    return ( 
        <div>

            <div className='row'>
                    <div className='col-md-12'>

                    <Header/>

                    </div>


                </div>

            <div className='row'>
            <div className='col-md-12'>
                
            <video autoPlay loop muted id='bg11'>
                <source src={props.video1} type='video/mp4'></source>
            </video>
           
            </div>
            
            </div>

            <div id='overlay1'>
            <h1>{props.head1}</h1>
            <h2>{props.head2}</h2>
            <h4 id='h41'>{props.head3}</h4>
            <h4 id='h42'>{props.head4}</h4>
            <h4 id='h43'>{props.head5}</h4>
            <h4 id='h48'>{props.head6}</h4>

            <h4 id='h44'>{props.head7}</h4>
            <h4 id='h45'>{props.head8}</h4>
            <h4 id='h46'>{props.head9}</h4>
            <h4 id='h47'>{props.head10}</h4>
           
            
             </div>

     <div className='row' style={{backroundColor:"whitesmoke"}}>
                 <div className='col-md-8'>
               
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000" id='carasol'>
      <img src={props.urus} className="d-block w-100" alt="..." style={{height:"500px"}}></img>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={props.urus1} className="d-block w-100" alt="..." style={{height:"500px",marginBottom:"50px"}}></img>
    </div>
    <div className="carousel-item">
      <img src={props.urus2} className="d-block w-100" alt="..." style={{height:"500px",marginBottom:"50px"}}></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


                 </div>

                 <div className='col-md-4'>
                     <h1 id='over'>OVERVIEW</h1>
                     <p id='over1'>{props.text}</p>

                 </div>


             </div>
           
             <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <h1 id='tech'>TECHNICAL SPECIFICATIONS</h1>


                        </div>



                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                        <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>CAR MODEL</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.model}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>

                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>DISPLACEMENT</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.displacement}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>

                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>MAX. POWER</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.head7}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>

                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>TRANSMISSION</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.transmission}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>

                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>DRIVE</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.drive}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>

                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>TOP SPEED</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.head8}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>

                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>ACCELERATION 0-100 KM/H (MPH 0-62)</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.head9}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>


                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>COMBINED CONSUMPTION *</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.consumption}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>

                            
                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>NUMBER OF CYLINDERS</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.cylinder}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>


                            <div className='row'>
                                <div className='col-md-6'>
                                <p className='p11'>Price</p>

                                </div>
                                <div className='col-md-6'>
                                <p className='p12'>{props.head10}</p>

                                </div>

                            </div>
                            <hr className='hr1'></hr>

                            
                            

                            


                        </div>


                    </div>



                </div>




             </div> 

              <Cards2/>
             <Footer/> 





        </div>
     );
}

export default CarsPage;