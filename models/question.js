const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  q: {
    type: Number,
    required: true,
  },
});

const Questionnaire = mongoose.model("Question", QuestionSchema);

module.exports = Question;
