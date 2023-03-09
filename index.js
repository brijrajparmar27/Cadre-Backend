require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const RootRouter = require("./Router");
app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

app.use(RootRouter);

mongoose.connect(process.env.MONGO).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Your server is running on ${process.env.PORT}`);
  });
});
