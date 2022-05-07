import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../Books/Navbar";

const UserID = localStorage.getItem("LocalUserID");

export default class paymentReport extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], Payment: [], applicantName: "" };
  }

  printDocument() {
    const input = document.getElementById("viewtable");
    html2canvas(input).then((canvas) => {
      var imgWidth = 200;
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var position = 0;
      var heightLeft = imgHeight;
      pdf.addImage(imgData, "JPEG", 4, position, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  }

  componentDidMount() {
    const USERID = localStorage.getItem("UserID");
    axios
      .get(`http://localhost:8089/Transaction/getallTransactions/${USERID}`)

      .then((response) => {
        this.setState({ Payment: response.data.data });
        console.log("Payments:  ", this.state.Payment);
      });
  }

  render() {
    return (
      <div>
        <Navbar />

        <button
          onClick={this.printDocument}
          style={{
            marginTop: "100px",
            borderRadius: "5px",
            height: "1cm",
            marginLeft: "20px",
          }}
          className="btn btn-success btn-sm"
        >
          Generate PDF
        </button>
        <br />
        <br />
        <br />
        <div
          id="viewtable"
          style={{ marginLeft: "200px", marginRight: "200px" }}
        >
          <h3 style={{ textAlign: "center" }}>All Transactions</h3>

          <br></br>
          <table
            className="table table-striped"
            id="addSupplier-viewtable"
            style={{
              fontSize: "14px",
              padding: "8px",
              border: "0.5px solid black",
            }}
          >
            <thead>
              <tr>
                <th scope="col">User Name</th>
                <th scope="col">BookID</th>
                <th scope="col">Borrow Date</th>
                <th scope="col">Return Date</th>
              </tr>
              {this.state.Payment.length > 0 &&
                this.state.Payment.map((item, index) => (
                  <tr>
                    <th>{item.Username}</th>
                    <td>{item.BookID}</td>
                    <td>{item.Borrowdate}</td>
                    <td>{item.ReturnDate}</td>
                  </tr>
                ))}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  }
}
