import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderA from "./HeaderA";
import Footer from "./Footer";

export default function AllUser(){

    const [stat, setUser] = useState([]);

    useEffect(() =>{
        function getUser(){
            axios.get("http://localhost:8089/user/")
            .then((res) =>{

            //console.log(res.data);
            setUser(res.data);
               
           }).catch((err)=>{
               alert(err.message);
        }
    )}
       getUser();
    },[])

    return (
        <>    <br></br><br></br>   <br></br><br></br> <br></br><br></br>
            <HeaderA/>
            <br></br><br></br>   
              
                    <div className="card container" style={{background:" #ffffcc"}}>&nbsp;&nbsp;&nbsp;  
                        <center><h5 class="text-black">USER DETAILS</h5></center>&nbsp;&nbsp;&nbsp;  
                            <div className="card container d-flex justify-content-center" style={{background:"#fff"}}>
                                <table className="table table-sm ">
                                    <thead>
                                        <tr className="text-black">
                                            <th scope="col">Reg No</th>
                                            <th scope="col">Reg Date</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">phoneNo</th>
                                            <th scope="col">Area</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">NIC</th>
                                            <th scope="col">Shift</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stat.map((stat) => {
                                                return (
                                                    <tr >
                                                        <td class="text-center">{stat. regNo}</td>
                                                        <td class="text-center">{stat.regDate}</td>
                                                        <td class="text-center">{stat.name}</td>
                                                        <td class="text-center" >{stat.email}</td>
                                                        <td class="text-center">{stat.phoneNo}</td>
                                                        <td class="text-center">{stat.area}</td>
                                                        <td class="text-center">{stat.address}</td>
                                                        <td class="text-center">{stat.nic}</td>
                                                        <td class="text-center">{stat.shift}</td>
                                                    </tr>
                                                ); 
                                        })}
                                    </tbody>
                                </table>
                            </div>&nbsp;&nbsp;&nbsp;  
                    </div>
                    <div style={{marginLeft:"119px"}}>
  <Footer/>
  </div>
        </>
        
        
    );
}