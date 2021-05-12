const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const urlSchema = new mongoose.Schema({
  original: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
});

exports.model = mongoose.model("URL", urlSchema);
