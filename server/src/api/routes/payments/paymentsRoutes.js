//call create method
const router = require("express").Router();
let Payment = require("../../model/Payments/paymentsModel");

router.route("/add").post((req, res) => {
  //request(front end data) values get backend

  const {
    CardName,
    CardNumber,
    EXPDate,
    CVV,
    Username,
    CardType,
    Amount,
    USERID,
    Type,
    paymentTitle,
  } = req.body;

  const newPayment = new Payment({
    //initialize the properties
    CardName,
    CardNumber,
    EXPDate,
    CVV,
    Username,
    CardType,
    Amount,
    USERID,
    Type,
    paymentTitle,
  });

  //exception handling
  newPayment
    .save()
    .then(() => {
      res.json("New Payment Added success...");
    })
    .catch((err) => {
      console.log(err);
    });
}),
  router.route("/getallpayments/:id").get(async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("ID is ", req.params.id);

        const Payments = await Payment.find({ USERID: req.params.id });

        return res.status(200).json({
          code: 200,
          success: "Success",
          status: "OK",
          data: Payments,
          message: "Payments detail recieved",
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

router.route("/getallpaymentsbysearch/:name").get(async (req, res) => {
  try {
    if (req.params && req.params.name) {
      console.log("name is ", req.params.name);

      const Payments = await Payment.find({ paymentTitle: req.params.name });

      return res.status(200).json({
        code: 200,
        success: "Success",
        status: "OK",
        data: Payments,
        message: "Payments detail recieved",
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

router.route("/paymentdelete/:id").delete(async (req, res) => {
  try {
    console.log("Delete! ", req.params.id);
    if (req.params && req.params.id) {
      const Payments = await Payment.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        code: 200,
        success: "Success",
        status: "OK",
        data: Payments,
        message: "Payment is deleted!",
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

router.route("/getonepaymentsforupdate/:id").get(async (req, res) => {
  try {
    if (req.params && req.params.id) {
      console.log("name is ", req.params.id);

      const Payments = await Payment.findById({ _id: req.params.id });

      return res.status(200).json({
        code: 200,
        success: "Success",
        status: "OK",
        data: Payments,
        message: "Payments detail recieved",
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

router.route("/updatepayment/:id").put(async (req, res) => {
  try {
    if (req.params && req.params.id) {
      console.log("Stage 01");
      const {
        CardName,
        CardNumber,
        EXPDate,
        CVV,
        Username,
        CardType,
        Amount,
        USERID,
        Type,
        paymentTitle,
      } = req.body;

      await Payment.findByIdAndUpdate(req.params.id, {
        CardName,
        CardNumber,
        EXPDate,
        CVV,
        Username,
        CardType,
        Amount,
        USERID,
        Type,
        paymentTitle,
      });

      const Payments = await Payment.findById(req.params.id);

      return res.status(200).json({
        code: 200,
        success: "Success",
        status: "OK",
        data: Payments,
        message: "Payment Details is Updated.",
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
