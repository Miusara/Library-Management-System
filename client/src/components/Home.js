import React from  "react";

import {Link } from "react-router-dom";
import '../Home.css';
import Logo from '../Logo.png';

console.log(Logo);

import '../Home.css';


function Home() {
    return(
    <>

     <div className = "pg">
   <div className="image1">
     <img src={Logo} alt="Logo" width="250px" />
   </div>
        <div className="box2">
            <div className="button"><Link to="/AddBooks"><span>Books Management</span></Link></div>
            <div className="button"><span>Transaction Management</span></div>
            <div className="button"><span>Membership Management</span></div>
            <div className="button"><span>Payment Management</span></div>

     <div class = "pg">
        <div class="box1"></div>
        <div class="box2">
            <a href="/add" class="button"><span>Books Management</span></a>
            <a href="#" class="button"><span>Transaction Management</span></a>
            <a href="#" class="button"><span>Membership Management</span></a>
            <a href="#" class="button"><span>Payment Management</span></a>

        </div>
     </div>
    </>
  )
}

export default Home;