
import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { addApplicant } from './Service/api';
import { Link } from 'react-router-dom';


export const SignUpPage = () => {
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
        addApplicant(values);
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign-Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
        
               <div id="radio" className="col" style={{color:"whitesmoke",marginLeft:"450px"}}>
              <input type="radio" id="Male" name="Gender" value="Male" defaultChecked></input>
              <label style={{margin:"30px"}} for="Male">Male</label>
              <input type="radio" id="Female" name="Gender" value="Female"></input>
              <label style={{margin:"30px"}} for="Female">Female</label>
              <input type="radio" id="Other" name="Gender" value="Other"></input>
              <label style={{margin:"30px"}} for="Other">Other</label>
            
            </div>
           <button className="btn btn-outline-danger" type="submit" id="btn8" style={{marginBottom:"15px"}}>Register</button>
           
          
          </Form>
        </div>
      )}
    </Formik>
  )
}