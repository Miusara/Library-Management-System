import React from  "react";
import '../../AdminHome.css';

import admin from '../../admin.png';
import user from '../../user.png';
import Logo from '../../Logo.png';
import home from '../../home.png';

function AdminHome() {
    return(

<div class ="container"> 

    <div class = "home">
    <img src={home}  alt="home" height ="750px" width="1550px"/>
    </div>


    < div class="logo">
    <img src={Logo}  alt="logo" width="150px"/>
    </div>

    <div class = "boxah">

    <div class = "user"> <a href="/User">
    <img src={user}  alt="user" width="80px" height="80px" left="15px"/>
   </a> </div>

    <div class ="uf">
    <h4 class=" text-black"><b>Sign in as User</b></h4> 
    </div>


    <div class = "admin"> <a href="/LoginScreen">
    <img src={admin}  alt="admin" width="80px" height="80px" left="15px"/>
    </a> </div>

    <div class ="af">
    <h4 class ="text-black"><b>Sign in as Admin</b></h4>
    </div>



     </div>
    </div>
 

   
  
        


    )}

export default AdminHome;