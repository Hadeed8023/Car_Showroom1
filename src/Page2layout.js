import React, { Component } from 'react';
import {SignUpPage} from './SignUpPage';
import Header from './header';
import {ferari} from './images/ferari2.jfif'
import Footer from './footer';
import Cards2 from './cards2';
import './user.css'
function Page2Layout() {
    return ( 
        <div>
         <div className='row'>
                <div className='col-md-12' id='bg2'>
                    <Header/>

                </div>

            </div>
        <div id='main4' className='row'>
            <div id='main5' className='col-md-12'>

                   <SignUpPage/>

            </div>


        </div>
        <div>

        <Cards2/>
        <Footer/> 
        

        </div>
      
            
          


        </div>
     );
}

export default Page2Layout;
