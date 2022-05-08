import 'dotenv/config';
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import { connect } from "./utils/DB.Connection";

import morgan from "morgan";
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || "8089";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//User Management
const userRouter = require ("../src/api/routes/memberRoutes/user");
app.use ("/user",userRouter);

const recommendRouter = require ("../src/api/routes/memberRoutes/recommend");
app.use ("/recommend",recommendRouter);

const borrowedRouter = require ("../src/api/routes/memberRoutes/borrowed");
app.use ("/borrowed",borrowedRouter);






//Book Managements
//variable declaration and import model file
const bookRouter = require("./api/routes/bookRoutes/bookRoutes.js");
app.use("/books", bookRouter);

//Author Managements
//variable declaration and import model file
const authorRouter = require("./api/routes/bookRoutes/authorRoutes.js");
app.use("/authors", authorRouter);


//Recomended Ebook Managements
//variable declaration and import model file
const EbookRouter = require("./api/routes/bookRoutes/ebookRoutes.js");
app.use("/ebooks", EbookRouter);

//Recomended Ebook Managements
//variable declaration and import model file
const TransactionRouter = require("./api/routes/Transaction/TransactionRoutes");
app.use("/Transaction", TransactionRouter);

//Recomended Ebook Managements
//variable declaration and import model file
const paymentsRouter = require("./api/routes/payments/paymentsRoutes");
app.use("/payments", paymentsRouter);


app.listen(PORT, () => {
    logger.info(`Server is up and running on PORT ${PORT}`);
    connect();
});

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
