//import and assign
const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    USERID: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    CardName: {
      type: String,
      required: true,
    },
    CardNumber: {
      type: String,
      required: true,
    },
    EXPDate: {
      type: String,
      required: true,
    },

    CVV: {
      type: String,
      required: true,
    },

    Username: {
      type: String,
      required: true,
    },
    CardType: {
      type: String,
      required: true,
    },
    Amount: {
      type: String,
      required: true,
    },
    paymentTitle:{
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// autoIncrement.initialize(mongoose.connection);
// PaymentSchema.plugin(autoIncrement.plugin, 'payment');

const Book = mongoose.model("Payments", PaymentSchema); //document name(table)

module.exports = Book;
