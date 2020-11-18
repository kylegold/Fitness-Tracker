const Router = require("express").Router();
const db = require("../models");

// POST a new workout
Router.post("/workouts", (req, res) => {
  db.Workout.create(req.body, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})


// POST an exercise to previous workout plan
Router.put("/update/:id", (req, res) => {
  // Find the existing resource by ID
//   db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true })
//   .then(dbUser => {
//     res.json(dbUser);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// })
db.exercises.update(
  { _id: req.params.id },
  { $push: {  type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            distance: req.body.distance,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets } }
)});
  
//   db.exercises.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         type: req.body.type,
//         name: req.body.name,
//         duration: req.body.duration,
//         distance: req.body.distance,
//         weight: req.body.weight,
//         reps: req.body.reps,
//         sets: req.body.sets
//       }
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });
// POST new exercise

// GET combined weight of multiple exercises on the stats page

module.exports = Router;