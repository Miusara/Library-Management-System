import 'dotenv/config';
import express from "express";
import cors from "cors";
import passport from "passport";
import session  from "express-session";
import logger from "./utils/logger";
import config from "./configs";
import MongoStore from "connect-mongo";
import { connect } from "./utils/DB.Connection";
import { googleAuth } from "./configs/google.auth";
import {routesInit} from "./api/routes" ;

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(
    session({
        secret:config.SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
        store: MongoStore.create({mongoUrl:config.DB_Connection_String}),
        cookie :{
            secure:false,
            expires:new Date (Date.now() + 10000),
            maxAge:10000,
        },
    })
);


app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next) => {
    res.send("<a href = 'http://localhost:8090/auth/google'> Login with Google </a>");
    next();
});



//variable declaration 
const userRouter = require ("../src/api/routes/user");
app.use ("/user",userRouter);

const recommendRouter = require ("../src/api/routes/recommend");
app.use ("/recommend",recommendRouter);

const borrowedRouter = require ("../src/api/routes/borrowed");
app.use ("/borrowed",borrowedRouter);




app.listen(PORT, () => {
    logger.info(`🌻 Sever is up and running on PORT ${PORT}`);
    connect();
    routesInit (app,passport);
    googleAuth(passport);
});


