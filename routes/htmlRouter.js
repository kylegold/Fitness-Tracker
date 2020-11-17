// Requiring our custom middleware for checking if a user is logged in
const Router = require("express").Router();
const path = require("path");


Router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

Router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

Router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = Router;