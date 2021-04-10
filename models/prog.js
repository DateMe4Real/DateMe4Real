const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProgSchema = new Schema({
  profile: {
    type: Boolean,
    required: true,
    default: false,
  },
  param: {
    type: Boolean,
    required: true,
    default: false,
  },
  question: {
    type: Boolean,
    required: true,
    default: false,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Prog = mongoose.model("Prog", ProgSchema);

module.exports = Prog;
