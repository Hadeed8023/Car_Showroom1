import React, { Component } from 'react';
import Carasol from './carasol';
import './page1.css';

function Page2() {
    return ( 
        <div>
        <div className='row' style={{backgroundColor:"whitesmoke"}}>
            <div className='col-md-12'>
            <h2 id='page2bg'>Most Selling Car</h2>
            </div>
        </div>
        <div className='row' style={{backgroundColor:"whitesmoke"}}>
            <div className='col-md-7' style={{margin:"0"}}>
                <Carasol/>
            </div>
            <div className='col-md-5' id='text-data'>
                <h2 id='textdata1'>This Beauty Is A Real Beast</h2>
                <p id='textdata2'>Mach 1 performance is evident even before you get behind the wheel. Its streamlined design and exterior styling cues celebrate Mach 1 heritage dating back more than five decades. Sure, every Mustang looks good in the driveway, but the Mach 1 was made to shine on the track. The unique handling dynamics and an available Mach 1 Handling Package help you feel stuck to the road, around curves and when you’re hitting the straightaway at a 168 mph max speed. Better yet, it’s completely customizable in appearance, powertrain and performance, so you can put your spin on this icon.</p>

            </div>

        </div>
        </div>

     );
}

export default Page2;
