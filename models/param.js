const mongoose = require("mongoose");

const Schema = mongoose.Schema;

<<<<<<< HEAD:models/param.js
const ParamSchema = new Schema({
=======
const ParametersSchema = new Schema({
  ref: "User",

>>>>>>> 4a9aefe71839fef45ed139a96f1b4c2bfd22d966:models/parameters.js
  p_age: {
    type: Array,
    required: true,
  },

  p_sex: {
    type: String,
    required: true,
  },

  p_bodystyle: {
    type: String,
    required: true,
  },

  p_race: {
    type: String,
    required: true,
  },
});

const Param = mongoose.model("Param", ParamSchema);

module.exports = Param;
