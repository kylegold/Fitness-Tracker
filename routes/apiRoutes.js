const Router = require("express").Router();
const workoutRouter = require("./workoutRouter.js");


Router.use("/", workoutRouter);


module.exports = Router;