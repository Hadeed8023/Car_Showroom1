import React, { Component } from 'react';
import { getDetails } from './carsdetails';
import Cards from './cards';
import './page1.css';

class Pagehead extends Component {
    state = {  
        CarDetails: getDetails(),
        
    } 

    render() { 
        return (
          
            <div id='data'>
              
            
                { 
                    
                


                this.state.CarDetails.map(content => <Cards image={content.image} title={content.title} text={content.text}
                    link1={content.link1}
                       />
                    )
                    

                   
                    
                }    
            </div>
           


      
        );
    }
}
 
export default Pagehead;
