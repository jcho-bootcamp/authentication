const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/auth-app");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});

app.listen(3000, () => console.log("Server Started on Port : 3000"));