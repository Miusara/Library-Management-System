import React, { Component } from "react";
import "./PaymentHistory.css";
import axios from "axios";
import Navbar from "../Books/Navbar";
import Footer from "../Books/Footer";

class PaymentHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Payment: [],
      searchname: "",
    };
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onEdit(
    e,
    id,
    Type,
    CardName,
    CardNumber,
    EXPDate,
    CVV,
    Username,
    CardType,
    Amount,
    paymentTitle
  ) {
    window.localStorage.removeItem("paymentid");
    localStorage.setItem("paymentid", id);

    window.localStorage.removeItem("Type");
    localStorage.setItem("Type", Type);

    window.localStorage.removeItem("CardName");
    localStorage.setItem("CardName", CardName);

    window.localStorage.removeItem("CardNumber");
    localStorage.setItem("CardNumber", CardNumber);

    window.localStorage.removeItem("EXPDate");
    localStorage.setItem("EXPDate", EXPDate);

    window.localStorage.removeItem("CVV");
    localStorage.setItem("CVV", CVV);

    window.localStorage.removeItem("Username");
    localStorage.setItem("Username", Username);

    window.localStorage.removeItem("CardType");
    localStorage.setItem("CardType", CardType);

    window.localStorage.removeItem("Amount");
    localStorage.setItem("Amount", Amount);

    window.localStorage.removeItem("paymentTitle");
    localStorage.setItem("paymentTitle", paymentTitle);

    window.location = "/Updatefee";

    // window.location.reload();
  }

  onDelete(e, id) {
    axios
      .delete(`http://localhost:8089/payments/paymentdelete/${id}`)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Payment Deleted !");

          window.location.reload();
        } else {
          alert(res.data.message);
          window.location.reload();
        }
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log("search", this.state.searchname);
  }

  onSearch(event) {
    event.preventDefault();
    const name = this.state.searchname;
    console.log(name);

    axios
      .get(`http://localhost:8089/payments/getallpaymentsbysearch/${name}`)

      .then((response) => {
        this.setState({ Payment: response.data.data });
        console.log("Payment search:  ", this.state.Payment);
      });
  }

  componentDidMount() {
    const USERID = localStorage.getItem("UserID");
    console.log("USERID:  ", USERID);
    axios
      .get(`http://localhost:8089/payments/getallpayments/${USERID}`)

      .then((response) => {
        this.setState({ Payment: response.data.data });
        console.log("Payment Did Mount:  ", this.state.Payment);
      });
  }
  render() {
    return (
      <>
        <Navbar />
        <form
          className="example"
          onSubmit={this.onSearch}
          style={{ marginTop: "90px", marginLeft: "90px", marginRight: "80px" }}
        >
          <input
            type="text"
            placeholder="Type Payment Title..."
            name="searchname"
            value={this.state.searchname}
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        {/* <label className="text-black">Search:</label>
        <input type="text" /> */}
        <br />
        <br />
        <div className="container">
          <a href="/PaymentHome">
            <button
              style={{ marginLeft: "0px", marginTop: "30px" }}
              class="btn btn-success"
            >
              New Payment
            </button>
          </a>

          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Titile</th>
                    <th scope="col">Payment Type</th>
                    <th scope="col">Card Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Payment.length > 0 &&
                    this.state.Payment.map((item, index) => (
                      <tr>
                        <th scope="row">{item.Username}</th>
                        <td>{item.paymentTitle}</td>
                        <td>{item.Type}</td>
                        <td>{item.CardType}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.Amount}</td>

                        <td>
                          <button
                            type="button"
                            className="w3-button w3-orange"
                            onClick={(e) =>
                              this.onEdit(
                                e,
                                item._id,
                                item.Type,
                                item.CardName,
                                item.CardNumber,
                                item.EXPDate,
                                item.CVV,
                                item.Username,
                                item.CardType,
                                item.Amount,
                                item.paymentTitle
                              )
                            }
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="w3-button w3-red"
                            style={{ marginLeft: "10px" }}
                            onClick={(e) => this.onDelete(e, item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <a href="/PaymentReport">
          <button
            type="button"
            className="w3-button w3-blue"
            // style={{ marginLeft: "1200px", marginTop: "-120px" }}
          >
            Genarate Report
          </button>
        </a>
        <br /> <br />
        <div className="footer2">
          <footer>
            <div className="p" style={{ marginTop: "0px" }}>
              <b>Copyright 2022 @ LMS. All Rights Reserved.. </b>
            </div>
            <div className="sbuttons" style={{ marginTop: "0px" }}>
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
}

export default PaymentHistory;
