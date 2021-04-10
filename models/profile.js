const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  picture: {
    data: Buffer,
    contentType: String,
  },

  sex: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    trim: true,
    required: true,
  },

  race: {
    type: String,
    required: true,
  },

  bodystyle: {
    type: String,
    required: true,
  },

  algoscore: {
    type: Number,
  },

  bio: {
    type: String,
    trim: true,
    required: true,
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
