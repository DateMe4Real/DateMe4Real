const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb");

const userSeed = [
  {
    username: "WooHoo",
    uuid: 1,
  },

  {
    username: "yodabudda",
    uuid: 2,
  },
];

const profileSeed = [
  {
    sex: "male",
    dob: "01/01/1971",
    race: "White or European American",
    bodystyle: "Ectomorph",
    bio:
      "Love adventures and the outdoors, understands me when I’m hangry, isn’t afraid to talk politics, is down to watch all three Back to the Future’s with me. ",
    date: new Date(Date.now()),
  },

  {
    sex: "female",
    dob: "08/01/1985",
    race: "Asian",
    bodystyle: "Mesomorph",
    bio:
      "Love adventures and the outdoors, understands me when I’m hangry, isn’t afraid to talk politics, is down to watch all three Back to the Future’s with me. ",
    date: new Date(Date.now()),
  },
];

const parameterSeed = [
  {
    p_age: [30, 44],
    p_sex: "female",
    p_bodystyle: "Ectomorph",
    p_race: "White or European American",
  },

  {
    p_age: [18, 29],
    p_sex: "female",
    p_bodystyle: "Mesomorph",
    p_race: "White or European American",
  },
];

const questionnaireSeed = [
  {
    q1: 5,
    q2: 6,
    q3: 7,
    q4: 4,
    q5: 6,
    q6: 3,
    q7: 9,
    q8: 10,
    q9: 4,
    q10: 2,
  },
  {
    q1: 5,
    q2: 6,
    q3: 8,
    q4: 6,
    q5: 4,
    q6: 4,
    q7: 5,
    q8: 4,
    q9: 2,
    q10: 6,
  },
];

db.Profile.remove({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then((data) => {
    console.log(data.result.n + " Profiles inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Parameters.remove({})
  .then(() => db.Parameters.collection.insertMany(parameterSeed))
  .then((data) => {
    console.log(data.result.n + " Parameters inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Questionnaire.remove({})
  .then(() => db.Questionnaire.collection.insertMany(questionnaireSeed))
  .then((data) => {
    console.log(data.result.n + " Questionnaire inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " User inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
