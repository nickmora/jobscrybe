const express = require('express');
const mongoose = require('mongoose');
const router = require("express").Router();
const userController = require("./controllers/userController")
const logger = require("morgan");
const passport = require("passport");

const port  = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/jobscrybe_testOne');

require('./config/passport')(passport);

// MongoClient.connect({ useNewUrlParser: true })

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// API routes
const routes = require("./routes")(app, passport)



// router.route("/api/signup")
//     .post(userController.create);




app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  
  console.log(`Now listening on PORT ${port}, check it out`)
});
