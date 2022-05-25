import React, { Component } from 'react';
import Header from './header';
import './page1.css';
import { getNewcar1, getNewcar2 , getNewcar3 } from './newcar1';
import UsedcarCard from './UsedcarCard';
import Cards2 from './cards2';
import Footer from './footer';

class NewCars extends Component {
    state = { 

        New1: getNewcar1(),
        New2: getNewcar2(),
        New3: getNewcar3(),

     } 
    render() { 
        return (
            <div>
                <Header/>
                <div className='row'>
                    <div className='col-md-12'>

                    <h1 id='pg1head2'>New Cars</h1>
                    <h1 id='pg1head3'>Cars with Creative Technology.</h1>

                    </div>



                </div>

        <div id='data'>
              
            
              { 
                  
              


              this.state.New2.map(content => <UsedcarCard image={content.image} title={content.title} text={content.text}
                price={content.price} Engine={content.Engine} Model={content.Model}
                  
                     />
                  )
                  

                 
                  
              }    
          </div>


          <div id='data'>
              
            
              { 
                  
              


              this.state.New3.map(content => <UsedcarCard image={content.image} title={content.title} text={content.text}
                price={content.price} Engine={content.Engine} Model={content.Model}
                  
                     />
                  )
                  

                 
                  
              }    
          </div>

          <div id='data'>
              
            
              { 
                  
              


              this.state.New1.map(content => <UsedcarCard image={content.image} title={content.title} text={content.text}
                price={content.price} Engine={content.Engine} Model={content.Model} 
                  
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
 
export default NewCars;