const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
    unique: true
  },
  exercises: [
    {
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
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;