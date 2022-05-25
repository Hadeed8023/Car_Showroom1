import React, { Component } from 'react';
import Header from './header';
import './page1.css';
import { getUsedcar1, getUsedcar2 , getUsedcar3 } from './usedcar1';
import UsedcarCard from './UsedcarCard';
import Cards2 from './cards2';
import Footer from './footer';

class UsedCars extends Component {
    state = { 

        Used1: getUsedcar1(),
        Used2: getUsedcar2(),
        Used3: getUsedcar3(),

     } 
    render() { 
        return (
            <div>
                <Header/>
                <div className='row'>
                    <div className='col-md-12'>

                    <h1 id='pg1head2'>Used Cars</h1>
                    <h1 id='pg1head3'>Come See What We Have To Offer</h1>

                    </div>



                </div>

        <div id='data'>
              
            
              { 
                  
              


              this.state.Used1.map(content => <UsedcarCard image={content.image} title={content.title} text={content.text}
                price={content.price} Engine={content.Engine} Model={content.Model} Total={content.Total}
                  
                     />
                  )
                  

                 
                  
              }    
          </div>


          <div id='data'>
              
            
              { 
                  
              


              this.state.Used2.map(content => <UsedcarCard image={content.image} title={content.title} text={content.text}
                price={content.price} Engine={content.Engine} Model={content.Model} Total={content.Total}
                  
                     />
                  )
                  

                 
                  
              }    
          </div>

          <div id='data'>
              
            
              { 
                  
              


              this.state.Used3.map(content => <UsedcarCard image={content.image} title={content.title} text={content.text}
                price={content.price} Engine={content.Engine} Model={content.Model} Total={content.Total}
                  
                     />
                  )
                  

                 
                  
              }    
          </div>

        <Cards2/>
        <Footer/> 



            </div>
        );
    }
}
 
export default UsedCars;