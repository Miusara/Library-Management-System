import 'dotenv/config';
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import { connect } from "./utils/DB.Connection";
import morgan from "morgan"

const app = express();
const PORT = process.env.PORT || "8088";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res) => {
    res.send("Login with Google");
});

app.listen(PORT, () => {
    logger.info(`Server is up and running on PORT ${PORT}`);
    connect();
});

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}