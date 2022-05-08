import React from "react";
import '../../Header.css';
import Logo from '../../Logo.png';

function HeaderA(){

    return(
<div class ="container">
      < div class="logoh">
      <img src={Logo}  alt="logo" width="200px"/>
      </div>
      
      <div class ="ul1"style={{height:"60px"}}>
        
      <li><a class="active" href="/member">Home</a></li>
      <li><a href="/alluser" >All Users</a></li>
      <li><a href="/Borrowed">Report</a></li>
    </div>
    </div>
    
)
}

export default HeaderA;