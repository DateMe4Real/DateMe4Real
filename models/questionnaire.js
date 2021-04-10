const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionnaireSchema = new Schema({
  ref: "User",

  q: {
    type: Number,
    required: true,
  }

});

const Questionnaire = mongoose.model("Questionnaire", QuestionnaireSchema);

module.exports = Questionnaire;
