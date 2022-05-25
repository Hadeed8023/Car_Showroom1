import React, { Component } from 'react';
import './page1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Link } from "react-router-dom";

function Header() {
    return ( 
        <nav class="navbar navbar-dark fixed-top" style={{backgroundColor:"black"}} >
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><FontAwesomeIcon icon={faInfinity} className="infinity"></FontAwesomeIcon></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" style={{width:"25%"}} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header navbar-dark bg-dark">
              <h5 class="offcanvas-title " id="offcanvasNavbarLabel" style={{color:"white"}}><FontAwesomeIcon icon={faInfinity} className="infinity"></FontAwesomeIcon></h5>
              <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body navbar-dark bg-dark">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><Link to="/" className='link1'>Home</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#page1bg">Popular Cars</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/UsedCars" className='link1'>Used Cars</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/NewCars" className='link1'>New Cars</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#main2">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#footer">Contact Us</a>
                </li>
                <li class="nav-item">
                <a class="btn btn-outline-danger" data-bs-toggle="collapse" href="#collapseExample" style={{width:"50%",marginLeft:"28%"}} role="button" aria-expanded="false" aria-controls="collapseExample">
                Sign-In
                </a>
                <div class="collapse" id="collapseExample" style={{marginTop:"10px"}}>
                  <form>
                
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email Address'></input>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Password' style={{marginTop:"8px"}}></input>
                <button type="submit" class="btn btn-outline-danger" style={{marginTop:"10px",width:"40%",marginLeft:"8%",display:"inline-block"}}>Submit</button>
                
                <Link to="/SignIn" id='link1'>   <button type="submit" class="btn btn-outline-danger" style={{marginTop:"10px",width:"40%",marginLeft:"5%",display:"inline-block"}}>Sign-Up </button></Link> 
                
                </form>

                </div>
                </li>
                <hr style={{color:"white"}}></hr>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-danger" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      



     );
}

export default Header;