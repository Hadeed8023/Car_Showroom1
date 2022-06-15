import React, { Component } from 'react';
import Header from './header';
import './page1.css';
import UsedcarCard2 from './UsedCarCard2';
import Cards2 from './cards2';
import Footer from './footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsedCar1 } from './Service/api';


const UsedCars = () => {

    const [UsedcarData1, setUsedCarData]= useState([]);

useEffect(()=>{
    getUsedCarData();
},[]);

const getUsedCarData= async()=>{
    const result= await getUsedCar1();
    setUsedCarData(result.data);
   
}



    return ( 
      
        <div className='row'>
            <div className='col-md-12'>
            <Header/>
                 <div className='row'>
                     <div className='col-md-12'>

                    <h1 id='pg1head2'>Used Cars</h1>
                    <h1 id='pg1head3'>Come See What We Have To Offer</h1>

                    </div>



                 </div>

                 <div className='row'>
                    <div className='col-12' id='data'>

                          
                             { 
                                
                            UsedcarData1.slice(0,4).map(content1 => <UsedcarCard2 content1={content1} image={content1.image} title={content1.title} text={content1.text}
                              price={content1.price} Engine={content1.Engine} Model={content1.Model} Total={content1.Total}
                                
                                   />
                                )
                                
              
                               
                                
                            } 
                            </div>
                        </div> 

                <div className='row'>
                    <div className='col-12' id='data'>

                          
                             { 
                                
                            UsedcarData1.slice(4,8).map(content1 => <UsedcarCard2 content1={content1} image={content1.image} title={content1.title} text={content1.text}
                              price={content1.price} Engine={content1.Engine} Model={content1.Model} Total={content1.Total}
                                
                                   />
                                )
                                
              
                               
                                
                            } 
                            </div>
                        </div> 


                    <div className='row'>
                    <div className='col-12' id='data'>

                          
                             { 
                                
                            UsedcarData1.slice(9,13).map(content1 => <UsedcarCard2 content1={content1} image={content1.image} title={content1.title} text={content1.text}
                              price={content1.price} Engine={content1.Engine} Model={content1.Model} Total={content1.Total}
                                
                                   />
                                )
                                
              
                               
                                
                            } 
                            </div>
                        </div> 

                        <Cards2/>
                        <Footer/> 

                        </div> 
                        </div> 
                        
             
     );
}
 
export default UsedCars;

