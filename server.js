import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { readdirSync } from "fs";
const morgan = require("morgan");
import cookieParser from "cookie-parser";

require("dotenv").config();
var fileupload = require("express-fileupload");
const path = require("path");
//...

// create express app
const app = express();
const server = require("http").createServer(app);

const graphqlHTTP = require("express-graphql");
// connect DB
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// apply middlewares
app.use(cors());
//serve static files
app.use(express.static("images"));
app.use(fileupload());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

app.use(cookieParser());

// route - This func is for importing routes files automaticaly. so we dont need to import separately
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// port
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Server is running on port ${port}`));
