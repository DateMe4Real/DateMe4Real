const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParamSchema = new Schema({
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
