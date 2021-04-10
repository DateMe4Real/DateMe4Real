const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const auth = require("./routes/auth");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb");

<<<<<<< HEAD
=======
// Express Session
// app.use(
//   session({
//     secret: "very secret this is",
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );

>>>>>>> 4a9aefe71839fef45ed139a96f1b4c2bfd22d966
// Routes
app.use("/api/auth", auth);
app.get("/", (req, res) => res.send("Good sunshine!"));

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
