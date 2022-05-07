import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Books/Navbar";
import Footer from "../Books/Footer";

function PaymentHome() {
  return (
    <>
      <Navbar />

      <div className="pg1">
        <Link to="/PaymentHistory">
        <button
          type="submit"
          className="btn btn-success"
          style={{marginLeft:"1300px"}}
        >
         Payment History
        </button>
        </Link>
        <div className="box2">
          <div className="button" style={{ marginTop: "250px" }}>
            <Link to="/AddDelaycharges">
              <span>Delay charges</span>
            </Link>
          </div>
          <div className="button">
            <Link to="/Monthlyfee">
              <span>Monthly fee</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer2">
        <footer>
          <div className="p" style={{ marginTop: "300px" }}>
            <b>Copyright 2022 @ LMS. All Rights Reserved.. </b>
          </div>
          <div className="sbuttons" style={{ marginTop: "280px" }}>
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
      </div>
    </>
  );
}

export default PaymentHome;
