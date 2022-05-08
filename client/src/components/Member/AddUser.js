import React,{useState} from "react"
import axios from "axios";
import '../../AddUser.css';

import add from '../../add.jpg';


export default function AddUser(){

    
    const [regNo,setRegno] = useState("");
    const [regDate,setRegdate]=useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNo,setPhone] = useState("");
    const [area,setArea]=useState("");
    const [address,setAddress] = useState("");
    const [nic,setNIC] = useState("");
    const [shift,setShift] = useState("");
 

    function sendData(e) {
        e.preventDefault();
        alert("Insert");

        const newUser ={
        regNo,
        regDate,
        name,  
        email,   
        phoneNo, 
        area,
        address,
        nic,
        shift
        }
        
       
       axios.post("http://localhost:8089/user/add", newUser).then (()=>{
            alert("User Added Successfully!!")
            setRegno("");
            setRegdate("");
            setName("");
            setEmail("");
            setPhone("");
            setArea("");
            setAddress("");
            setNIC("");
            setShift("");
            window.location="/member";
            

       }).catch((err)=>{
           alert(err)
       })
    }

    return(
        <div className ="container">

< div class="add">
    <img src={add}  alt="add"  height ="675px"width="1600px"/>
    </div>
<br></br>
 

  
        <form onSubmit={sendData}>
         
        <div class ="set">
        <font>
        <h2 align="center"className="text-black h2"><b>User Registration</b></h2></font>
        <></>
        <br></br>
     
        <></>
        <br></br>

    
        <div class="row g-3">
            <label for="regNo" className="col-sm-2 col-form-label text-black" >Reg No</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="regNo" placeholder="Enter Registration No" required 
            onChange={(e)=>{
                setRegno(e.target.value);
            }}/>
        </div>


    
            <label for="regdate" className="col-sm-2 col-form-label text-black">Registration Date</label>
            <div className="col-sm-3">
            <input type="date" className="form-control" id="regdate" placeholder="DD/MM/MMMM" required 
             onChange={(e)=>{
                setRegdate(e.target.value);
            }}/>
         </div></div>

          <></>
          <br></br>


           <div class="row g-3">  
            <label for="name" className="col-sm-2 col-form-label text-black">    Name</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="name" placeholder="Enter your Name" required 
             onChange={(e)=>{
                setName(e.target.value);
            }}/>
          </div>
   
 
            <label for="email" className="col-sm-2 col-form-label text-black">Email</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter Email" required 
             onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
          </div></div>

          <></>
          <br></br>


        <div class="row g-3">
        <label for="phoneNo" className="col-sm-2 col-form-label text-black">Phone Number</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="phoneNo" maxLength={10}  placeholder="Enter Phone no" required 
             onChange={(e)=>{
                setPhone(e.target.value);
            }}/>
            </div>


           
           
            <lable className="col-sm-2 col-form-label text-black"  >Area of Interest  </lable>
            <div class="col-sm-3">
            <select class="form-select form-control" id ="autosizingselect" aria-label="Default select example"  onChange={(e)=>{
                    setArea(e.target.value);
                }} >
            <option selected>Choose...</option>
            <option value="Action and Adventure">Action and Adventure</option>
            <option value="Classics">Classics</option>
            <option value="Detective and Mystery">Detective and Mystery</option>
            <option value="Historical Fiction">Historical Fiction</option>
	        <option value="Horror">Horror</option>
	        <option value="Fantacy">Fantacy</option>
            </select>

            </div></div>
<br></br>

           <div class="row g-3">
           <label for="address" className="col-sm-2 col-form-label text-black">Address</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="address" placeholder="Enter Address" required 
             onChange={(e)=>{
                setAddress(e.target.value);
            }}/>
           </div>



            <label for="nic" className="col-sm-2 col-form-label text-black">NIC</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="nic" minLength={10} maxLength={11}  placeholder="Enter NIC" required 
             onChange={(e)=>{
                setNIC(e.target.value);
            }}/>
           </div></div>
<br></br>
           <div class="row g-3">
          
            <lable className="col-sm-2 col-form-label text-black" >Shift</lable> 
            <div class="col-sm-3" >
            <select class="form-select form-control" id ="autosizingselect" aria-label="Default select example"  onChange={(e)=>{
                    setShift(e.target.value)
                }}>
            <option selected>Choose...</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            </select>
            </div> </div>

        <br></br> 


        
       <div class ="addu">
      <button class=" btn btn-success btn-lg" type="addrecord"  height ="20px"width="10px">Submit</button>
     </div>
        <></>
        <br></br>
        
        </div><br/><br/>
      
        <br/>
        
        </form>
      </div>
     
     
    )
}

