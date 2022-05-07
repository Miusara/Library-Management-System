const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
    },
    BookID: {
      type: String,
      required: true,
    },
    Borrowdate: {
      type: String,
      required: true,
    },
    ReturnDate: {
      type: String,
      required: true,
    },
    USERID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Transaction", TransactionSchema); //document name(table)

module.exports = Book;
