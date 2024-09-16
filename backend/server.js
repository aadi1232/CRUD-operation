const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute"); // Make sure the path is correct
dotenv.config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Successfully!");
    app.listen(8000, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Running successfully at port", 8000);
      }
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });
