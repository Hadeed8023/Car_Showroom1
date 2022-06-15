
import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { updateUser } from './Service/api';
import { useLocation } from 'react-router-dom';
import './user.css';
import Header from './header';
import Cards2 from './cards2';
import Footer from './footer';


export const Update = () => {
    const location=useLocation();
    const{id}=location.state;
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
     
      onSubmit={ values => {
        console.log(values);
        updateUser(id,values);
      }}
    >
   
      {formik => (
 
        <div id='main77'>
           
          <Header/>
          <div id='update'>
          <h1 className="my-4 font-weight-bold .display-4">Update User</h1>
          </div>
          <Form style={{height:"500px"}}>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-outline-danger" type="submit" id="btn8" style={{marginTop:"15px"}}>Update User</button>
           
          
          </Form>
        <Cards2/>
        <Footer/> 
        </div>
        
      )}
    </Formik>
  )
}