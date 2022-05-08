import React,{useState, useEffect} from "react";
import axios from "axios";
import '../../SearchBook.css';
import  Header  from './Header';
import  Icon  from './Icon';


export default function SearchBook() {


    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);


  //search book data from the database
  
  useEffect(() => {
    function getborrowed (){ 
         axios.get(`http://localhost:8089/Borrowed/`)
         .then((res) => {
           
            //console.log(response.data)
            setAllData(res.data);
            setFilteredData(res.data);
            

        }).catch((err) => {
            alert(err.message);
        })

    }
    getborrowed();
}, [])

    const handleSearch = (event) =>{

        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
            return data.bookName.search(value) != -1;
        });
            setFilteredData(result);
    }



 return (
    <div className ="container" >
      
      <br></br> <br></br>  <br></br> <br></br>  <br></br> 
      <Icon/><Header/>


<div class="boxs">      
<h3><b>Member Borrowed Books</b></h3>
<br></br>

<div class ="sbar">
<div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search Book Name.." aria-label="Search" aria-describedby="search-addon" onChange={(event) =>handleSearch(event)} />
  <span class="input-group-text border-2" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>  </div>                             
 

    <br></br> <br></br>


    <div className="stable">
    <table className="table table-hover">
    <thead >
      <tr>
       <th scope="col">Reg No</th>
       <th scope="col">Book Name</th>
       <th scope="col">Issue Date</th>
       <th scope="col">Return Date</th>
       
      </tr>
      </thead>
      <tbody>

      {filteredData.map((value)=>{
           return(
         <tr>
                                  

            
              <td >{value.regNo}</td>
              <td >{value.bookName}</td>
              <td >{value.issueDate} </td>
              <td > {value.returnDate}</td>
              </tr>
               )
            })
            }
         </tbody>
         </table>
         </div>
         </div>
         <br></br>   <br></br>   <br></br>
         <footer>

<div class ="p">
<b>Copyright 2022 @ LMS. All Rights Reserved.. </b></div>
<div class="sbuttons">

<div align="right" class="socialbtns">
<a href="#" class="fa fa-lg fa-facebook"></a>
<a href="#" class="fa fa-lg fa-twitter"></a>
<a href="#" class="fa fa-lg fa-instagram"></a>
<a href="#" class="fa fa-lg fa-youtube"></a>
</div>

</div>

</footer>
         </div>
 )
}