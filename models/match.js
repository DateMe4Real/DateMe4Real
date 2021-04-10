const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  matches: {
    type: Boolean,
    required: true,
    default: false,
  },

  userchoice: {
    type: Boolean,
    required: true,
    default: false,
  },

  matched: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Match = mongoose.model("Match", MatchSchema);

module.exports = Match;
