import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Row,Col} from "reactstrap";
import '../../UpdateUser.css';
import  Header  from './Header';
import  Icon  from './Icon';
import Footer  from './Footer';

export default function UpdateUser() {
    const [regNo,setregNo] = useState('');
    const [regDate,setregDate]=useState('');
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [phoneNo,setphoneNo] = useState('');
    const [area,setarea]=useState('');
    const [address,setaddress] = useState('');
    const [nic,setnic] = useState('');
    const [shift,setshift] = useState('');
   
 

    useEffect(() =>{

        setregNo(localStorage.getItem('RegNo'))
        setregDate(localStorage.getItem('RegDate'));
        setname(localStorage.getItem('Name'))
        setemail(localStorage.getItem('Email'))
        setphoneNo(localStorage.getItem('Phone'));
        setarea(localStorage.getItem('Area'));
        setaddress(localStorage.getItem('Address'))
        setnic(localStorage.getItem('NIC'));
        setshift(localStorage.getItem('Shift'))

    }, [] );



 

  
    const updateAPIData = () => {
          axios.put(`http://localhost:8089/user/update/${regNo}`,{
              regNo,
              regDate,
              name,
              email,
              phoneNo,
              area,
              address,
              nic,
              shift,
        
            
        }) .then(()=>{
            alert("User Updated Successfully!!");
        window.location="/user1";
        })
    }

        
        return (
            <div class="container">   <br></br> <br></br>  <br></br> <br></br>  <br></br> 
            <Icon/><Header/>
            <Row>
            <Col md={1}></Col>
            <Col md={10}>
             
                <div class ="box">
            <table class="table table-hover">
                <h2>Update Member Details</h2>
            <tbody>
                <tr>
                <td>Reg No   :</td>
                <td>
                <input type="text" className="form-control" id="RegNo"
                value={regNo}  readonly onChange={(e) => {
                    setregNo(e.target.value);
                 }}
                />
                </td>
                </tr>

                <tr>
                <td>Reg Date  :</td>
                <td>
                <input type="text" className="form-control" id="RegDate" 
                 value={regDate} readonly onChange={(e) => {
                setregDate(e.target.value);
                    }}
                />
                </td>
                </tr>

                <tr>
                <td>Name: </td>
                <td>
                <input type="text" className="form-control" id="name" 
                 value={name} readonly onChange={(e) => {
                setname(e.target.value);
                }}
                />
                </td>
                </tr>

            
                <tr>
                <td>Email   :</td>
                <td>
                <input type="text" className="form-control" id="email"
                 value={email} readonly onChange={(e) => {
                setemail(e.target.value);
                }}
                />
                </td>
                </tr>

                <tr>
                <td>Phone    :</td>
                <td>
                <input type="text" className="form-control" id="phoneNo"
                 value={phoneNo} readonly onChange={(e) => {
                setphoneNo(e.target.value);
                }}
                />
                </td>
                </tr>

                <tr>
                <td>Area of Interest  :</td>
                <td>
                <input type="text" className="form-control" id="area"
                 value={area} readonly onChange={(e) => {
                setarea(e.target.value);
                }}
                />
                </td>
                </tr>
                   
                <tr>
                <td>Address      :</td>
                <td>
                         
                <input type="text" className="form-control" id="address"
                value={address} readonly onChange={(e) => {
                setaddress(e.target.value);
                }}
                />
                </td></tr>

                <tr>
                <td>NIC :</td>
                <td>
                <input type="text" className="form-control" id="NIC"
                value={nic} readonly onChange={(e) => {
                setnic(e.target.value);
                }}
                />
                </td>
                 </tr>
                   
                <tr>
                <td>Shift    :</td>
                <td>
                         
                <input type="text" className="form-control" id="shift"
                 value={shift} readonly onChange={(e) => {
                 setshift(e.target.value);
                }}
                />
                </td>
                </tr>
                     
        </tbody>
      
        </table>
</div>
    </Col>
    
    <div class ="btnu">
    < button type="submit"className="btn btn-success" onClick={()=>{updateAPIData();}}><b>Update</b></button>
    </div> 
    
    <br></br>
    <br/></Row>   <Footer/> 
    </div>

    );
}

