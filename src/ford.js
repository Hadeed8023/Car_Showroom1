import React, { Component } from 'react';
import Header from './header';
import Ford from './images/Ford.mp4'
import './page1.css';
import ford1 from './images/car7.jfif';
import ford2 from './images/fordint2.jpg';
import ford3 from './images/fordint1.webp';

import CarsPage from './CarsPage';

class Ford2 extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <CarsPage 
                video1={Ford} 
                head1="Ford Mustang"
                head2="This Beauty Is A Real Beast" 
                head3="POWER"
                head4="MAX. SPEED"
                head5="0-100 km/h"
                 head6="PRICE"
                head7="470 horsepower"
                head8="250km/h"
                head9="4.6s"
                 head10="$42,295"
                  urus={ford1} urus1={ford2} urus2={ford3} text="The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate. The namesake of the pony car automobile segment, the Mustang was developed as a highly styled line of sporty coupes and convertibles derived from existing model lines, initially distinguished by long hood, short deck proportions." 
                  displacement="5.0L Ti-VCT V8"
                 consumption="16.4"
                 cylinder="8" 
                 model="2022 Mustang GT Fastback"
                 transmission="	6-speed manual transmission"
                 drive="RWD"/>
                
             
            
            
            
            </div>

        );
    }
}
 
export default Ford2;