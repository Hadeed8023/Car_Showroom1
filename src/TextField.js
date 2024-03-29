import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label style={{marginRight:"20px",marginLeft:"450px",color:"white",marginTop:"12px"}} htmlFor={field.name}>{label}</label>
      <input style={{width:"30%",marginLeft:"450px",backgroundColor:"whitesmoke"}}
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
     
    </div>
  )
}