import React, { Component } from "react";
import "./TransactionHistory.css";
import axios from "axios";
import Navbar from "../Books/Navbar";
import Footer from "../Books/Footer";

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Transaction: [],
      searchname: "",
    };
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onEdit(e, id, Username, BookID, Borrowdate, ReturnDate) {
    window.localStorage.removeItem("Transactionid");
    localStorage.setItem("Transactionid", id);

    window.localStorage.removeItem("BookID");
    localStorage.setItem("BookID", BookID);

    window.localStorage.removeItem("Borrowdate");
    localStorage.setItem("Borrowdate", Borrowdate);

    window.localStorage.removeItem("ReturnDate");
    localStorage.setItem("ReturnDate", ReturnDate);

    window.localStorage.removeItem("Username");
    localStorage.setItem("Username", Username);

    window.location = "/UpdateTransaction";

    // window.location.reload();
  }

  onDelete(e, id) {
    axios
      .delete(`http://localhost:8089/Transaction/Transactiondelete/${id}`)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Transaction Deleted !");

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
      .get(
        `http://localhost:8089/Transaction/getallTransactionsbysearch/${name}`
      )

      .then((response) => {
        this.setState({ Transaction: response.data.data });
        console.log("Transaction search:  ", this.state.Transaction);
      });
  }

  componentDidMount() {
    const USERID = localStorage.getItem("UserID");
    console.log("USERID:  ", USERID);
    axios
      .get(`http://localhost:8089/Transaction/getallTransactions/${USERID}`)

      .then((response) => {
        this.setState({ Transaction: response.data.data });
        console.log("Transaction Did Mount:  ", this.state.Transaction);
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
            placeholder="Book Ref No.."
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
          <a href="/AddTransaction">
            <button
              style={{ marginLeft: "0px", marginTop: "30px" }}
              class="btn btn-success"
            >
              New Transaction
            </button>
          </a>

          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">BookID</th>
                    <th scope="col">Borrow Date</th>
                    <th scope="col">Return Date</th>

                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Transaction.length > 0 &&
                    this.state.Transaction.map((item, index) => (
                      <tr>
                        <th scope="row">{item.Username}</th>
                        <td>{item.BookID}</td>
                        <td>{item.Borrowdate}</td>
                        <td>{item.ReturnDate}</td>

                        <td>
                          <button
                            type="button"
                            className="w3-button w3-orange"
                            onClick={(e) =>
                              this.onEdit(
                                e,
                                item._id,
                                item.Username,
                                item.BookID,
                                item.Borrowdate,
                                item.ReturnDate
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
        <a href="/TransactionReport">
          <button
            type="button"
            className="w3-button w3-blue"
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

export default TransactionHistory;
