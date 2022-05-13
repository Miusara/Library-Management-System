import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Transaction/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Books/Footer";

export default function AddTransaction() {
  const USERID = localStorage.getItem("UserID");

  const [Username, setUsername] = useState("");
  const [BookID, setBookID] = useState("");
  const [Borrowdate, setBorrowdate] = useState("");
  const [ReturnDate, setReturnDate] = useState("");

  function formSubmitHandler(e) {
    e.preventDefault();

    const newAssignment = {
      Username,
      BookID,
      Borrowdate,
      ReturnDate,
      USERID,
    };

    console.log("newAssignment", newAssignment);
    axios
      .post("http://localhost:8089/Transaction/add", newAssignment)
      .then(() => {
        alert("Transaction Added Succesfully !!");
        window.location = "/home";
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <>
      <Navbar />
      <br />
      <Link to="/TransactionHistory">
        <input
          type="submit"
          className="btn btn-success"
          value="Transaction History"
        />
      </Link>
      <div className="container-height">
        <div className="col-lg-8 col-md m-a">
          <div className="contain">
            <form
              className="form"
              style={{
                background: " #CCDEFF",
                right: "260px",
                width: "1000px",
              }}
              onSubmit={formSubmitHandler}
            >
              <div className="modal-body">
                <h1 className="text-center">Add Transaction</h1>
                <br />
                <div className="row g-4">
                  <label htmlFor="subject" className="col-sm-3 col-form-label">
                    User ID{" "}
                  </label>
                  <div className="col-sm-7">
                    <input
                      value={USERID}
                      type="text"
                      className="form-control"
                      id="CardName"
                      aria-describedby="emailHelp"
                      readOnly
                    />
                  </div>

                  <label htmlFor="copies" className="col-sm-3 col-form-label">
                    Username{" "}
                  </label>
                  <div className="col-sm-7">
                    <input
                      value={Username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="John M.D"
                      required="required"
                    />
                  </div>
                </div>
                <br />
                <div className="row g-3">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Book ID{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={BookID}
                      onChange={(e) => setBookID(e.target.value)}
                      type="text"
                      className="form-control"
                      id="BookID"
                      aria-describedby="emailHelp"
                      placeholder="Enter Book Ref Number"
                      required="required"
                    />
                  </div>
                </div>
                <br />
                <div className="row g-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-sm-3 col-form-label"
                  >
                    Borrow date{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={Borrowdate}
                      onChange={(e) => setBorrowdate(e.target.value)}
                      type="date"
                      className="form-control"
                      id="Borrowdate"
                      aria-describedby="emailHelp"
                      placeholder="YY/MM"
                      required="required"
                    />
                  </div>
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-sm-3 col-form-label"
                  >
                    Return date{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={ReturnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Rs 00.00"
                    />
                  </div>
                </div>
                <br />

                <br />

                <br />
                <input
                  type="submit"
                  className="btn btn-outline-success waves-effect waves-light float-right"
                  value=" ADD Transaction"
                />
              </div>
            </form>
          </div>
          &nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <div style={{ marginLeft: "119px" }}>
        <Footer />
      </div>
    </>
  );
}
