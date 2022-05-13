import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Payment/Navbar";
import Footer from "../Books/Footer";

export default function AddDelaycharges() {
  const USERID = localStorage.getItem("UserID");

  const [CardName, setCardName] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [EXPDate, setEXPDate] = useState("");
  const [CVV, setCVV] = useState("");
  const [Username, setUsername] = useState("");
  const [CardType, setCardType] = useState("");
  const [Amount, setAmount] = useState("");
  const [paymentTitle, setpaymentTitle] = useState("");

  function formSubmitHandler(e) {
    e.preventDefault();

    const newAssignment = {
      CardName,
      CardNumber,
      EXPDate,
      CVV,
      Username,
      CardType,
      Amount,
      USERID,
      Type: "Delay",
      paymentTitle,
    };

    console.log("newAssignment", newAssignment);
    axios
      .post("http://localhost:8089/payments/add", newAssignment)
      .then(() => {
        alert("Payment Added Succesfully !!");
        window.location = "/PaymentHome";
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <>
      <Navbar />
      <br />
      <div className="container-height">
        <div className="col-lg-8 col-md m-auto">
          <div className="container">
            <form
              className="form-control"
              style={{ background: " #CCDEFF",right:"260px",width:"1000px" }}
              onSubmit={formSubmitHandler}
            >
              <div className="modal-body">
                <h1 className="text-center">Add Delay Charges</h1>
                <br />
                <div className="row g-4">
                  <label htmlFor="subject" className="col-sm-3 col-form-label">
                    Name on Card{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={CardName}
                      onChange={(e) => setCardName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="CardName"
                      aria-describedby="emailHelp"
                      placeholder="John M. Doe"
                      required="required"
                    />
                  </div>

                  <label htmlFor="copies" className="col-sm-3 col-form-label">
                    Username{" "}
                  </label>
                  <div className="col-sm-3">
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
                    Credit card number{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={CardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      type="text"
                      className="form-control"
                      id="CardNumber"
                      aria-describedby="emailHelp"
                      placeholder="1111-2222-3333-4444"
                      required="required"
                    />
                  </div>

                  <label htmlFor="category" className="col-sm-3 col-form-label">
                    Card Type
                  </label>
                  <div className="col-sm-3">
                    <select
                      value={CardType}
                      required="required"
                      onChange={(e) => setCardType(e.target.value)}
                      className="form-select form-control"
                      id="CardType"
                    >
                      <option selected>Choose...</option>
                      <option value="Visa">Visa</option>
                      <option value="Master">Master</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row g-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-sm-3 col-form-label"
                  >
                    Exp Year/Month{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={EXPDate}
                      onChange={(e) => setEXPDate(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="YY/MM"
                      required="required"
                    />
                  </div>
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-sm-3 col-form-label"
                  >
                    Amount{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={Amount}
                      onChange={(e) => setAmount(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Rs 00.00"
                    />
                  </div>
                </div>
                <br />
                <div className="row g-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-sm-3 col-form-label"
                  >
                    CVV{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={CVV}
                      onChange={(e) => setCVV(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="344"
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
                    Payment Titile{" "}
                  </label>
                  <div className="col-sm-3">
                    <input
                      value={paymentTitle}
                      onChange={(e) => setpaymentTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Book Name"
                      required="required"
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-outline-success waves-effect waves-light float-right"
                  style={{width:"200px" , top:"450px", right:"350px",background:"#cc9900",color:"#ffff"}}
                >
                  ADD Payment
                </button>
              </div>
            </form>
          </div>
          &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* <div className="footer2">
        <footer>
          <div className="p" style={{ marginTop: "50px" }}>
            <b>Copyright 2022 @ LMS. All Rights Reserved.. </b>
          </div>
          <div className="sbuttons" style={{ marginTop: "50px" }}>
            <div align="right" className="socialbtns">
              <a href="#" className="fa fa-lg fa-facebook"></a>
              <a href="#" className="fa fa-lg fa-twitter"></a>
              <a href="#" className="fa fa-lg fa-instagram"></a>
              <a
                href="https://www.youtube.com/"
                className="fa fa-lg fa-youtube"
              ></a>
            </div>
          </div>
        </footer>
      </div> */}
      <div style={{ marginLeft: "119px" }}>
        <Footer />
      </div>
    </>
  );
}
