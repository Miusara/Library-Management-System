import React from  "react";
import {Link} from 'react-router-dom';
import Logo from '../../Logo.png';
import '../../Home.css';
import '../../Navbar.css';


export default function Navbar() {
  return(
    <div class ="container">
          < div class="logoh">
          <img src={Logo}  alt="logo" width="200px"/>
          </div>
 



    <div class="button2"style={{width:"1000px"}}>
            <Link to={"/"}><button type='submit' style={{background:"#cc9900",color:"#ffff"}}className='btn'>LOG OUT</button></Link>
        </div>
<br></br><br></br> <br></br><br></br> <br></br><br></br>

<nav class="navbar navbar-expand-lg navbar-light bg-light"style={{right:"95px",width:"1500px"}}>
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">Home</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/PaymentHome">Payment Home</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/AddDelaycharges">Delay charges</a>
              
            </li>
            
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="Monthlyfee">Monthly charges</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="PaymentHistory">Payment History</a>
              
            </li>
           
           
            
      </ul>
    </div>
  </div>
</nav></div>
        
        
    )
    }