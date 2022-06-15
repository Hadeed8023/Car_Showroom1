import axios from "axios";

const url="http://localhost:5000";

export const addApplicant = async (values) =>{
   return await axios.post(`${url}/SignIn`,values);
}


export const getApplicants = async (values) =>{
   return await axios.get(`${url}/ShowUser`);
}

export const getCarsDetails = async () =>{
   return await axios.get(`${url}/`);
}

export const login = async (object) =>{
   return await axios.post(`${url}/`,object);
}

export const getUsedCar1 = async () =>{
   return await axios.get(`${url}/UsedCars`);
}

export const getNewCar1 = async () =>{
   return await axios.get(`${url}/NewCars`);
}

export const getBookedCar1 = async () =>{
   return await axios.get(`${url}/Booking`);
}

export const deleteUser = async (id) =>{

   return await axios.delete(`${url}/ShowUser/${id}`);
}

export const deleteBooking = async (id) =>{

   return await axios.delete(`${url}/Booking/${id}`);
}

export const updateUser = async (id,object) =>{

return await axios.put(`${url}/update/${id}`,object);

}

export const BookNow = async (values) =>{

   return await axios.post(`${url}/NewCars`,values);
   
   }
   
   export const BookNow1 = async (values) =>{

      return await axios.post(`${url}/UsedCars`,values);
      
      }
      
 
      



