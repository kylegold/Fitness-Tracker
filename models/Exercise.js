const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  "type": {
    type: String,
    required: true,
    trim: true
  },
  "name": {
    type: String,
    required: true,
    trim: true
  },
  "duration": {
    type: Number,
    required: true
  },
  "distance": {
    type: Number
  },
  "weight": {
    type: Number
  },
  "reps": {
    type: Number
  },
  "sets": {
    type: Number
  }

});

const Exercise = mongoose.model("Exercise", WorkoutSchema);

module.exports = Exercise;