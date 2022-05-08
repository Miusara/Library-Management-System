import React,{useState} from "react"
import axios from "axios";
import '../../Recommend.css';
import  Icon  from './Icon';
import  Header  from './Header';
import ViewRecommend  from './ViewRecommend';
import Footer from "./Footer";


export default function Recommend(){

    const [authorName,setAname] = useState("");
    const [bookName,setBname]=useState("");
    const [subject,setSubject] = useState("");
    const [publications,setPub] = useState("");
    const [pYear,setPyear] = useState(""); 
    const [edition,setEdition] = useState("");
    const [requestDate,setRequest] = useState("");

    function sendData(e) {
        e.preventDefault();
        alert("Insert");

        const newRecommend ={
        authorName,
        bookName,
        subject,  
        publications,   
        pYear, 
        edition,
        requestDate
        }
        
       
       axios.post("http://localhost:8089/recommend/add", newRecommend).then (()=>{
            alert("Successfully Added Recommend!!")
            setAname("");
            setBname("");
            setSubject("");
            setPub("");
            setPyear("");
            setEdition("");
            setRequest("");
            window.location.reload(true);
            

       }).catch((err)=>{
           alert(err)
       })
    }


    return(
        <div className ="container"> <br></br> <br></br>  <br></br> <br></br>  <br></br> 
        <Icon/>
<Header/>
          <br></br>
 

        <form onSubmit={sendData}>
         
        <div class ="setr" align="center">
        <font style={{color:"#070808"}}>
        <h2 align="center">Recommendation of Books</h2></font>
        <></>
        <br></br>
     
        <></>
        <br></br>

    
        <div class="row g-3">
            <label for="autherName" className="col-sm-2 col-form-label text-black">Author's Name</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="autherName" placeholder="Enter Author's Name" required 
            onChange={(e)=>{
                setAname(e.target.value);
            }}/>
        </div>

        <label for="bookName" className="col-sm-2 col-form-label text-black">Book Name</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="bookName" placeholder="Enter book name" required 
             onChange={(e)=>{
                setBname(e.target.value);
            }}/>
         </div></div>

          <></>
          <br></br>


           <div class="row g-3">  
            <label for="subject" className="col-sm-2 col-form-label text-black">  Subject</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="subject" placeholder="Enter subject" required 
             onChange={(e)=>{
                setSubject(e.target.value);
            }}/>
          </div>
   
 
            <label for="publications" className="col-sm-2 col-form-label text-black">Publications</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="publications" placeholder="Publications" required 
             onChange={(e)=>{
                setPub(e.target.value);
            }}/>
          </div></div>

          <></>
          <br></br>


        <div class="row g-3">
        <label for="pYear" className="col-sm-2 col-form-label text-black">Publication Year</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="pYear"  placeholder="Enter Publication Year" required 
             onChange={(e)=>{
                setPyear(e.target.value);
            }}/>
            </div> 
           
         <br></br>

          
           <label for="edition" className="col-sm-2 col-form-label text-black">Edition</label>
            <div className="col-sm-3">
            <input type="text" className="form-control" id="edition" placeholder="Enter Edition" required 
             onChange={(e)=>{
                setEdition(e.target.value);
            }}/>
           </div></div>

           <br></br>

           <div class="row g-3">
           <label for="requestDate" className="col-sm-2 col-form-label text-black">Request Date</label>
            <div className="col-sm-3">
            <input type="date" className="form-control" id="requestDate" placeholder="Enter Request Date" required 
             onChange={(e)=>{
                setRequest(e.target.value);
            }}/>
           </div></div>
           


       <div class ="addr">
      <button class=" btn btn-success btn-lg" type="addrecord"  height ="20px"width="10px">Submit</button>

        
        </div>
      </div>
        <br/>
      
        </form><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <ViewRecommend/>
      </div>
     
    )
}

