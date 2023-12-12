const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/crudproject");
let db = mongoose.connection;

db.once("open", () => {
  console.log("connected to mongo db");
});

db.on("error", (err) => {
  console.log(err);
});

let User = require("./modles/User");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ users: ["UserOne", "UserTwo", "UserThree", "UserFour"] });
});

app.get("/user/view", (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    });
});

app.get("/user/update", (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

app.post("/user/add", (req, res) => {
  let user = new User();
  user.lastName = req.body.lastName;
  user.firstName = req.body.firstName;
  user.dateOfBirth = req.body.dateOfBirth;
  user.address1 = req.body.address1;
  user.address2 = req.body.address2;
  user.city = req.body.city;
  user.postalCode = req.body.postalCode;
  user.country = req.body.country;
  user.phoneNumber = req.body.phoneNumber;
  user.email = req.body.email;
  user.notes = req.body.notes;
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/user/edit/:id", (req, res) => {
  let updateData = {
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    dateOfBirth: req.body.dateOfBirth,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    postalCode: req.body.postalCode,
    country: req.body.country,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    notes: req.body.notes,
  };

  User.findByIdAndUpdate(req.params.id, updateData, { new: true })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error updating user" });
    });
});

app.delete("/user/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "User successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error deleting user" });
    });
});

app.listen(8000, () => {
  console.log("server started on port 5000");
});
