import React from "react";
import '../../Header.css';
import Logo from '../../Logo.png';

function Header(){

    return(
<div class ="container">
      < div class="logoh">
      <img src={Logo}  alt="logo" width="200px"/>
      </div>
      
      <div class ="ul1"style={{height:"60px"}}>
        
      <li><a class="active" href="/member">Home</a></li>
      <li><a href="/recommend" >Recommendation Books</a></li>
      <li><a href="#Available Bookst">Available Books</a></li>
      <li><a href="/AllAuthors">Authors</a></li>
      <li><a href="/Borrowed">Report</a></li>
    </div>
    </div>
    
)
}

export default Header;