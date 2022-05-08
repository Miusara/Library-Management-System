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
              <a className="nav-link dropdown-toggle" href="/AddBooks" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Manage Books</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/AddBooks">Add new books</a></li>
                <li><a className="dropdown-item" href="/UpdateBooks">Update book details</a></li>
                <li><a className="dropdown-item" href="/RecomendedBooks">Recommended book</a></li>
                <li><a className="dropdown-item" href="/SearchBooks">Search book Details</a></li>
                <li><a className="dropdown-item" href="/AllBooks">All books</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="/AddAuthors" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manage Authors
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/AddAuthors">Add authors</a></li>
                <li><a className="dropdown-item" href="/AllAuthors">All author details</a></li>
                <li><a className="dropdown-item" href="/SearchAuthors">Search author details</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AddEBooks">E-Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="/BookReport" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Reports
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/BookReport">Book Report</a></li>
                <li><a className="dropdown-item" href="/AuthorReport">Authors Report</a></li>
              </ul>
            </li>
      </ul>
    </div>
  </div>
</nav></div>
        
        
    )
    }