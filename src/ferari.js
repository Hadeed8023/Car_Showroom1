import React, { Component } from 'react';
import Header from './header';
import Laferari from './images/Laferari.mp4'
import './page1.css';
import ferari1 from './images/ferariout.jfif';
import ferari2 from './images/ferariback.jfif';
import ferari3 from './images/ferariint2.jfif';

import CarsPage from './CarsPage';

class Ferari extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <CarsPage 
                video1={Laferari} 
                head1="Laferrari"
                head2="FERRARI'S MOST AMBITIOUS PROJECT" 
                head3="POWER"
                head4="MAX. SPEED"
                head5="0-100 km/h"
                 head6="PRICE"
                head7="950 bhp (708 kilowatts)"
                head8="352 km/h"
                head9="2.6s"
                 head10="$1.4 million"
                  urus={ferari1} urus1={ferari2} urus2={ferari3} text="LaFerrari is based on findings from testing of the FXX development prototype and on research being conducted by the Millechili Project at the University of Modena. Association with the Millechili Project led to speculation during development that the car would weigh under 1,000 kg, but a dry weight of around 1,255 kg was claimed. Only 499 units were produced, and each cost more than 1 million Euros.The car was unveiled at the 2013 Geneva Auto Show,followed by Auto Shanghai 2013,2013 Tour Auto Optic 2000, 2013 Supercar Chronicle, Italian Chamber of Commerce in Japan." 
                  displacement="6,262 cc (6.3 L)"
                 consumption="14.1 lt/100km"
                 cylinder="12"
                 model="2013 LaFerrari" 
                 transmission="7-speed F1 dual-clutch Automatic"
                 drive="RWD"/>
                
             
            
            
            
            </div>

        );
    }
}
 
export default Ferari;