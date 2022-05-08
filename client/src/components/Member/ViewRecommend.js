import React,{useState, useEffect} from "react";
import axios from "axios";
import '../../ViewRecommend.css';
import Footer from "./Footer";


export default function ViewRecommend() {

    const [recommend, setRecommend] = useState([]);
     
    useEffect(() => {

     //fetching data from the database
     function getData(){
        axios.get("http://localhost:8089/Recommend").then((res) => {
         setRecommend(res.data);
            
        }).catch((e) => {
         alert(e.message);
        })

    }   getData();
   }, [])

  

   const setData = (recommend) => {
      let{authorName,bookName,subject,publications,pYear,edition,requestDate} = recommend;
      localStorage.setItem('Aname',authorName);
      localStorage.setItem('Bname',bookName);
      localStorage.setItem('Subject',subject);
      localStorage.setItem('Pub',publications);
      localStorage.setItem('Pyear',pYear);
      localStorage.setItem('Edition',edition);
      localStorage.setItem('Request',requestDate);

    }


    
     //delete data from the database
     const deleteRecommend=(bookName) =>{
        axios.delete(`http://localhost:8089/Recommend/delete/${bookName}`)
        .then(()=>{
          alert("Deleted Successfully!");
        window.location.reload(false);
        }).catch((e) => {
         alert(e.message);
      })
   }


    return (


   <div class="container">
<div class="deleter">
                    <table className="table table-hover text-black">
                  <thead>
                  <tr>
                     <th scope="col">Author's Name</th>
                     <th scope="col">Book Name</th>
                     <th scope="col">Subject</th>
                     <th scope="col">Publications</th>
                     <th scope="col">Publication Year</th>
                     <th scope="col">Edition</th>
                     <th scope="col">Request Date</th>
                     <th scope="col">Delete</th>
    
               
                  </tr>
                  </thead>
                  <tbody>
                     {
                        recommend.map(function (recommend) {
                        return ( <tr>

                           <td >{recommend.authorName}</td>
                           <td >{recommend.bookName} </td>
                           <td >{recommend.subject} </td>
                           <td >{recommend.publications} </td>
                           <td >{recommend.pYear} </td>
                           <td >{recommend.edition} </td>
                           <td >{recommend.requestDate} </td>
                           <td>< a href ="/delete" button className="btn"style={{background:"#cc0000",color:"#ffff"}} onClick={() =>  deleteRecommend(recommend.bookName)}><b>DELETE</b></a>
                                        </td>
               
                        </tr>
                        );

                        })
                        }
                     </tbody>
                     </table> </div>

          <Footer/>          
          
       </div>

)

}