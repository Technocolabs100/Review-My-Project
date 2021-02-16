console.log("connected");


//  Requiring Express, Mongodb, Mongoose, body-parser 
const express = require("express");
const app= express();
const mongoose = require("mongoose");
const bodyParser= require('body-parser'); 
const { Db } = require("mongodb");

app.use(bodyParser.urlencoded({extended: true}))


//  Connecting Mongodb
mongoose.connect('mongodb://localhost:27017/review', {useNewUrlParser: true, useUnifiedTopology: true});


// Starting Server
app.listen(3000, function() {
    console.log('listening on 3000')
  });

// Listening on Home Page  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
 });

// Creating Schema for Posts
var postSchema = new mongoose.Schema({
  title: String,
  user:String,
  likes:Number,
  loved: Number,
  dislike:Number,
  comment:Number
});

// Modelling the Schema 
var Review = mongoose.model("Review",postSchema);

// const x = new Review({
//    title : "USA",
//    user: "Shyam",
//    likes: 100,
//    loved:1000,
//  dislike:101,
//    comment:49
//  })
//  x.save(function (err) {
//    if (err) return handleError(err);
//    // saved!

//  });



//   Sorting the data on the basis of likes


var mysort = {likes: 1};

    Review.find({}, function (err, result) {

        if (err) {

            console.log("error query");

        } else {

            console.log(result);

        }

    }).sort(mysort);


//   Sorting the data on the basis of loved reactions

var mysort = {loved: 1};

    Review.find({}, function (err, result) {

        if (err) {

            console.log("error query");

        } else {

            console.log(result);

        }


    }).sort(mysort);

