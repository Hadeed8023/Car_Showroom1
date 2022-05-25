import React, { Component } from 'react';
import Header from './header';
import lamboUrus from './images/lamboUrus.mp4'
import './page1.css';
import urus from './images/urusfront1.jpg';
import urus1 from './images/urusint.jpg';
import urus2 from './images/urusint2.jpg';

import CarsPage from './CarsPage';

class Urus extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <CarsPage 
                video1={lamboUrus} 
                head1="URUS"
                head2="UNLOCK ANY ROAD" 
                head3="POWER"
                head4="MAX. SPEED"
                head5="0-100 km/h"
                 head6="PRICE"
                head7="650 CV / 478 kW"
                head8="305 km/h"
                head9="3.6s"
                 head10="$218,009"
                  urus={urus} urus1={urus1} urus2={urus2} text="The soul of a super sports car and the functionality of an SUV: Lamborghini Urus is the first Super Sport Utility Vehicle in the world. With extreme proportions, breathtaking design, extraordinary driving dynamics and heart-pounding performance, Urus represents freedom in its quintessential state. You can experience any road, from track to the sand, ice, gravel or rocks, thus unlocking any road. You can explore any new terrain, thus expressing yourself." displacement="3,996 cm³ (243.85 cu in)"
                 consumption="12,7 l/100km (WLTP)"
                 cylinder="8"
                 model="2021 Lamborghini Urus"
                 transmission="The eight-speed automatic transmission"
                 drive="AWD" />
                
             
            
            
            
            </div>

        );
    }
}
 
export default Urus;