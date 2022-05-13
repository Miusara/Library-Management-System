import React, { Component } from "react";
import "./PaymentHistory.css";
import axios from "axios";
import Navbar from "../Payment/Navbar";
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
    console.log("onSearch");
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
        <br />
        <br />
        <label className="text-black">Search: </label>
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.searchname}
          name="searchname"
          placeholder="Type Payment Title..."
          style={{ marginLeft: "20px", marginRight: "5px" }}
        />
        <input type="submit" value="Submit" onClick={this.onSearch} />
        <br />
        <br />
        <br />
        <div className="container">
          <a href="/PaymentHome">
            <input
              // style={{ marginLeft: "0px", marginTop: "30px" }}
              class="btn btn-success"
              value="New Payment"
            />
    
          
          </a>

          <div className="row" style={{ marginTop: "20px" }}>
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
                          <input
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
                            value="Update"
                         />
                            
                         
                          <input
                            type="button"
                            className="w3-button w3-red"
                            style={{ marginLeft: "10px" }}
                            onClick={(e) => this.onDelete(e, item._id)}
                            value="Delete"
                          />
                            
                         
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
          <input
            type="button"
            className="w3-button w3-blue"
          
            value="Genarate Report"
          />
            
       
        </a>
        <br /> <br />
        <div style={{ marginLeft: "119px" }}>
          <Footer />
        </div>

      </>
    );
  }
}

export default PaymentHistory;
