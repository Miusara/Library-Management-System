import React, { Component } from "react";
import "./TransactionHistory.css";
import axios from "axios";
import Navbar from "../Transaction/Navbar";
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
          <a href="/AddTransaction">
            <input
              style={{ marginLeft: "0px", marginTop: "30px" }}
              class="btn btn-success"
              value=" New Transaction"
            />
             

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
                          <input
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
        <a href="/TransactionReport">
          <input type="button" className="w3-button w3-blue" value= "Genarate Report"/>


        </a>
        <br /> <br />
    
        <div style={{ marginLeft: "119px" }}>
          <Footer />
        </div>
      </>
    );
  }
}

export default TransactionHistory;
