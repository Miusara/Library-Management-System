//call create method
const router = require("express").Router();
let Transaction = require("../../model/Transaction/TransactionModel");

router.route("/add").post((req, res) => {
  //request(front end data) values get backend

  const {
    Username,
    BookID,
    Borrowdate,
    ReturnDate,
    USERID,
  } = req.body;

  const newTransaction = new Transaction({
    Username,
    BookID,
    Borrowdate,
    ReturnDate,
    USERID,
  });

  //exception handling
  newTransaction
    .save()
    .then(() => {
      res.json("New Transaction Added success...");
    })
    .catch((err) => {
      console.log(err);
    });
}),
  router.route("/getallTransactions/:id").get(async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("ID is ", req.params.id);

        const Transactions = await Transaction.find({ USERID: req.params.id });

        return res.status(200).json({
          code: 200,
          success: "Success",
          status: "OK",
          data: Transactions,
          message: "Transactions detail recieved",
        });
      }
    } catch (err) {
      return res.status(500).json({
        code: 500,
        success: "False",
        status: "Internal Server Error",
        message: err.message,
      });
    }
  });

router.route("/getallTransactionsbysearch/:name").get(async (req, res) => {
  try {
    if (req.params && req.params.name) {
      console.log("name is ", req.params.name);

      const Transactions = await Transaction.find({ BookID: req.params.name });

      return res.status(200).json({
        code: 200,
        success: "Success",
        status: "OK",
        data: Transactions,
        message: "Transactions detail recieved",
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      success: "False",
      status: "Internal Server Error",
      message: err.message,
    });
  }
});

router.route("/Transactiondelete/:id").delete(async (req, res) => {
  try {
    console.log("Delete! ", req.params.id);
    if (req.params && req.params.id) {
      const Transactions = await Transaction.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        code: 200,
        success: "Success",
        status: "OK",
        data: Transactions,
        message: "Transaction is deleted!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      success: "False",
      status: "Internal Server Error",
      message: err.message,
    });
  }
});

router.route("/getoneTransactionsforupdate/:id").get(async (req, res) => {
  try {
    if (req.params && req.params.id) {
      console.log("name is ", req.params.id);

      const Transactions = await Transaction.findById({ _id: req.params.id });

      return res.status(200).json({
        code: 200,
        success: "Success",
        status: "OK",
        data: Transactions,
        message: "Transactions detail recieved",
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      success: "False",
      status: "Internal Server Error",
      message: err.message,
    });
  }
});

router.route("/updateTransaction/:id").put(async (req, res) => {
  try {
    if (req.params && req.params.id) {
      console.log("Stage 01");
      const {
        Username,
        BookID,
        Borrowdate,
        ReturnDate,
        USERID,
      } = req.body;

      await Transaction.findByIdAndUpdate(req.params.id, {
        Username,
        BookID,
        Borrowdate,
        ReturnDate,
        USERID,
      });

      const Transactions = await Transaction.findById(req.params.id);

      return res.status(200).json({
        code: 200,
        success: "Success",
        status: "OK",
        data: Transactions,
        message: "Transaction Details is Updated.",
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      success: "False",
      status: "Internal Server Error",
      message: err.message,
    });
  }
});

module.exports = router;
