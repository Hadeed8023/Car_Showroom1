import logo from './logo.svg';
import './App.css';
import Page1layout from './Page1layout';
import Page2Layout from './Page2layout';
import Urus from './Page3Urus';
import Ferari from './ferari';
import Ford2 from './ford';
import Huracan from './huracan';
import { Routes, Route } from "react-router-dom";
import UsedCars from './UsedCar';
import NewCars from './NewCar';
import ShowUsers from './user';
import { Update } from './update';
import Booking from './Booking';


function App() {
  return (
   <div>


 <Routes>

 <Route path="/" element={<Page1layout/>} />

 <Route path="/Urus" element={<Urus/>} />

 <Route path="/Ferrari" element={<Ferari/>} />

 <Route path="/Ford" element={<Ford2/>} />

 <Route path="/Huracan" element={<Huracan/>} />

 <Route path="/SignIn" element={<Page2Layout/>} />

 <Route path="/UsedCars" element={<UsedCars/>} />

 <Route path="/NewCars" element={<NewCars/>} />

 <Route path="/ShowUser" element={<ShowUsers/>} />

 <Route path="/Update" element={<Update/>} />

 <Route path="/Booking" element={<Booking/>} />
  
 


  </Routes>
    
    

   </div>
  );
}

export default App;
