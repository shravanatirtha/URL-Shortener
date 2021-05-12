const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));
app.listen("2000", function () {
  console.log("Node server running on http://localhost:2000");
});
const uri =
  "mongodb+srv://dbuser:dbpassword@create-train.4tpds.mongodb.net/freecodecamp?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
let connection=mongoose.connection;
connection.on("connected",async ()=>{
    console.log("db connected");
});
