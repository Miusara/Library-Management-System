import React,{useState, useEffect} from "react";
import axios from "axios";
import '../../ViewUser.css';
import  Header  from './Header';
import  Icon  from './Icon';
import Footer from "./Footer";


export default function ViewUser() {

    const [user, setuser] = useState([]);

      
    useEffect(() => {

     //fetching employee data from the database
     function getData(){
        axios.get("http://localhost:8089/User").then((res) => {
                setuser(res.data);
        }).catch((e) => {
            alert(e.message);
        })

    }getData();

    },[])



    const setData = (user) => {
        let{regNo,regDate,name, email, phoneNo, area, address,nic,shift} = user;
        localStorage.setItem('RegNo',regNo);
        localStorage.setItem('RegDate',regDate);
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Phone',phoneNo);
        localStorage.setItem('Area',area);
        localStorage.setItem('Address',address);
        localStorage.setItem('NIC',nic);
        localStorage.setItem('Shift',shift);
   
  
      }

    return (


   <div class="container">
       <br></br> <br></br>  <br></br> <br></br>  <br></br> <Icon/><Header/>
  <div class ="vu">
   <h2>Profile</h2>
   
                    <table className="table table-hover">
                  <thead>
                  <tr>
                     <th scope="col">Reg No</th>
                     <th scope="col">Reg Date</th>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Phone No</th>
                     <th scope="col">Area of Interest</th>
                     <th scope="col">Address</th>
                     <th scope="col">NIC</th>
                     <th scope="col">Shift</th>
                     <th scope="col">Edit</th>
                    
                     
                  </tr>
                  </thead>
                  <tbody>
                     {
                        user.map(function (user) {
                        return <tr>
                                                

                           <td >{user.regNo}</td>
                           <td >{user.regDate} </td>
                           <td >{user.name} </td>
                           <td >{user.email} </td>
                           <td >{user.phoneNo} </td>
                           <td >{user.area} </td>
                           <td >{user.address}</td>
                           <td >{user.nic} </td>
                           <td >{user.shift} </td>
                           <td>
                             
                            < a href="/update" button className="btn btn-warning" onClick={() =>setData(user)} ><b>EDIT</b></a>
                        
                            </td>
                         
               
                        </tr>

                        })
                        }
                     </tbody>
                     </table>      
          </div>
        <br></br>      <br></br>   
     
        <br></br>     
     
        <br></br>      <br></br>   
        <br></br>      <br></br>   
     <Footer/>
  


 
 </div>


)

}
