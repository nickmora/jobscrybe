const express = require('express');
const mongoose = require('mongoose');
const router = require("express").Router();
const userController = require("./controllers/userController")

const port  = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/jobscrybe_testOne');

// MongoClient.connect({ useNewUrlParser: true })

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
require("./routes")(app)

// router.route("/api/signup")
//     .post(userController.create);




app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  
  console.log(`Now listening on PORT ${port}, check it out`)
});
