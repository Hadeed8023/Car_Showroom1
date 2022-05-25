import React, { Component } from 'react';
import Header from './header';
import Huracan1 from './images/huracan.mp4'
import './page1.css';
import huracan1 from './images/hurancan.jfif';
import huracan2 from './images/huracanint1.jfif';
import huracan3 from './images/huracanint2.jfif';

import CarsPage from './CarsPage';

class Huracan extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <CarsPage 
                video1={Huracan1} 
                head1="Lamborghini Huracan"
                head2="Discover your Beast." 
                head3="POWER"
                head4="MAX. SPEED"
                head5="0-100 km/h"
                 head6="PRICE"
                head7="602 horsepower"
                head8="330km/h"
                head9="3.2s"
                 head10="$225,000"
                  urus={huracan1} urus1={huracan2} urus2={huracan3} text="The Lamborghini Huracán (Spanish for hurricane; uɾakan) is a sports car manufactured by Italian automotive manufacturer Lamborghini replacing the previous V10 offering, the Gallardo. The Huracán was revealed online in December 2013, then made its worldwide debut at the 2014 Geneva Auto Show, and was released in the market in the second quarter of 2014. The LP 610-4 designation comes from the car having a 610 metric horsepower and 4 wheel drive, while LP stands for Longitudinale Posteriore, which refers to the longitudinal mid-rear engine position." 
                  displacement="5.2-litre Naturally Aspirated V10"
                 consumption="12.5 litres/100km"
                 cylinder="10" 
                 model="2021 Lamborghini Huracan"
                 transmission="	Dual clutch gearbox LDF (Lamborghini doppia frizione) with 7 speeds"
                 drive="AWD"/>
                
             
            
            
            
            </div>

        );
    }
}
 
export default Huracan;