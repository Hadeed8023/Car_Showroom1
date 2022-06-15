import React, { Component } from 'react';
import Header from './header';
import Cards2 from './cards2';
import Footer from './footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBookedCar1 } from './Service/api';
import BookingCard from './BookingCard';

const Booking = () => {
    const [BookedcarData1, setBookedCarData]= useState([]);

useEffect(()=>{
    getBookedCarData();

},[]);

const getBookedCarData= async()=>{
    const result= await getBookedCar1();
    setBookedCarData(result.data);
   
}
    return ( 
        <div>
            <div className='row'>
                <div className='col-md-12'>
                <Header/>
                </div>
            </div>
            <div className='row'>
            <div className='col-md-12'>

                <h1 id='pg1head2'>Booked Cars</h1>
                <h1 id='pg1head3'>Thank You For Booking!</h1>

            </div>


            </div>
         
            <div className='row'>
                    <div className='col-12' id='data'>

                          
                             { 
                                
                            BookedcarData1.slice(0,4).map(cont => <BookingCard cont={cont} image={cont.image} title={cont.title} text={cont.text}
                              price={cont.price} Engine={cont.Engine} Model={cont.Model} Total={cont.Total} 
                                
                                   />
                                )
                                
              
                               
                                
                            } 
                            </div>
                        </div> 

                        <Cards2/>
                        <Footer/> 




        </div>
     );
}
 
export default Booking;