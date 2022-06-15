import React, { Component } from 'react';
import Cards from './cards';
import './page1.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCarsDetails } from './Service/api';



const Pagehead = () => {

const [carData1, setCarData]= useState([]);

useEffect(()=>{
    getCarData();

},[]);

const getCarData= async()=>{
    const result= await getCarsDetails();
    setCarData(result.data);
   
}
    return ( 
        <div id='data'>
            
             {
                    carData1.map(content => <Cards image={content.image} title={content.title} text={content.text}
                                             link1={content.link1}
                                               />)

            }
                 

        </div>


     );
}
 
export default Pagehead;


