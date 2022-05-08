import React,{useState, useEffect} from "react";
import axios from "axios";
import '../../BookReport.css';
import jspdf from 'jspdf'
import "jspdf-autotable"
import  Header  from './Header';
import  Icon  from './Icon';


export default function BookReport() {
    const [borrowed, setborrowed] = useState([]);

    useEffect(() => {
        //fetching book data from the database
        axios.get("http://localhost:8089/Borrowed").then((res) => {
            if (res.data.length > 0) {
                setborrowed(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })

    }, [])


     //generate pdf

   const generatePDF = tickets => {

    const doc = new jspdf();
    const tableColumn = ["Reg No", "Book Name", "Issue Date", "Return Date"];
    const tableRows = [];

    tickets.map(ticket => {
        const ticketData = [
            ticket.regNo,
            ticket.bookName,
            ticket.issueDate,
            ticket.returnDate   
        ];
        tableRows.push(ticketData);
    })
    doc.text("Books I Borrowed", 14, 15).setFontSize(12);
    // right down width height
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 10, }, startY: 35 });
    doc.save(`Books_I_Borrowed_.pdf`);
  };

  return (

<div class ="container">
    <br></br> <br></br>  <br></br> <br></br>  <br></br> 
    <Icon/>
    <Header/>
    <div className="rtable">
    <div class ="fontr">
    <h4 class="text-black"><b>Books I Borrowed</b></h4></div>  
    <div class="tabler">

    <table className="table table-hover text-black">
       <thead>
       

<tr>
 <th scope="col">Reg No</th>
 <th scope="col">Book Name</th>
 <th scope="col">Issue Date</th>
 <th scope="col">Return Date</th>
 
</tr>
</thead>
   <tbody>
     {
        borrowed.map(function (f) {
        return <tr>
           <td >{f.regNo} </td>
           <td >{f.bookName} </td>
           <td >{f.issueDate} </td>
           <td >{f.returnDate} </td>
           <div class ="printbt">
           <td><button type="button" class="btn btn-info" onClick={() => generatePDF(borrowed)} >PRINT BOOK LIST</button>
           </td></div>

           </tr>

         })
       }
  </tbody>
</table></div></div>

<br></br><br></br><br></br>
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