import React, { Component } from 'react';
import { useState,useEffect } from 'react';
import { getApplicants } from './Service/api';
import { deleteUser } from './Service/api';
import {useNavigate} from 'react-router-dom';
import './user.css';
import Header from './header';
import Cards2 from './cards2';
import Footer from './footer';


const ShowUsers = () => {

    const [userData,setuserData]=useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        getAppplicantsdata()
    },[])

    const getAppplicantsdata= async()=>{
        const details=await getApplicants();
        setuserData(details.data);
    }

    const updateDetail=(id)=>{
        navigate("/update",{state: {id:id}});
    }

    const deletedata= async(id)=>{
        await deleteUser(id);
        getAppplicantsdata();
    }

    return ( 
        <div>
        <Header/> 
        <div className='container' style={{height:"450px"}}>
            <h1 id='register'>Registered Users</h1>
        <table class="table table-hover table-info table-danger">
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                    {userData.map((content) => {
                        return(
                            <tr>
                                <th scope='row'>{content._id}</th>
                                <th scope="row">{content.firstName}</th>
                                <td>{content.email}</td>
                                <td className='w-25'>
                                    <button className='btn btn-danger w-50' onClick={()=>{deletedata(content._id)}}>Delete</button>
                                    <button className='btn btn-warning w-50' onClick={()=>{updateDetail(content._id)}}>Update</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
        </table>
      
  </div>
    <Cards2/>
    <Footer/> 
    </div>

    );
}
 
export default ShowUsers;