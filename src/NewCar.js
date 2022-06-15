import React, { Component } from 'react';
import Header from './header';
import './page1.css';
import UsedcarCard from './UsedcarCard';
import Cards2 from './cards2';
import Footer from './footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { getNewCar1 } from './Service/api';


const NewCars = () => {

    const [NewcarData1, setNewCarData]= useState([]);

useEffect(()=>{
    getNewCarData();

},[]);

const getNewCarData= async()=>{
    const result= await getNewCar1();
    setNewCarData(result.data);
   
}
    return ( 
        <div className='row'>
            <div className='col-md-12'>
            <Header/>
            <div className='row'>
                    <div className='col-md-12'>

                     <h1 id='pg1head2'>New Cars</h1>
                     <h1 id='pg1head3'>Cars with Creative Technology.</h1>

                     </div>


                 </div>

                 <div className='row'>
                    <div className='col-12' id='data'>

                          
                             { 
                                
                            NewcarData1.slice(0,4).map(content => <UsedcarCard content={content} image={content.image} title={content.title} text={content.text}
                              price={content.price} Engine={content.Engine} Model={content.Model}
                                
                                   />
                                )
                                
              
                               
                                
                            } 
                            </div>
                        </div> 

                <div className='row'>
                    <div className='col-12' id='data'>

                          
                             { 
                                
                            NewcarData1.slice(4,8).map(content => <UsedcarCard content={content} image={content.image} title={content.title} text={content.text}
                              price={content.price} Engine={content.Engine} Model={content.Model} 
                                
                                   />
                                )
                                
              
                               
                                
                            } 
                            </div>
                        </div> 


                    <div className='row'>
                    <div className='col-12' id='data'>

                          
                             { 
                                
                            NewcarData1.slice(8,13).map(content => <UsedcarCard content={content} image={content.image} title={content.title} text={content.text}
                              price={content.price} Engine={content.Engine} Model={content.Model} 
                                
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
 
export default NewCars;






