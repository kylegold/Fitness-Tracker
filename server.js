const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const { Router } = require("express");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Requiring our routes
const htmlRoutes = require("./routes/htmlRouter");
app.use("/", htmlRoutes);
// require("./routes/api-routes.js")(app);
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});