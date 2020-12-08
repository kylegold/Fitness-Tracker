const Router = require("express").Router();
const db = require("../models");


// Get all workouts
Router.get("/workouts", (req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})

// Get all workouts
Router.get("/workouts/range", (req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})

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


// PUT an exercise to previous workout plan
// Router.put("/workouts/:id", (req, res) => {
//   // Find the existing resource by ID
//   db.Workout.findByIdAndUpdate({_id: req.params.id}, ({ $push:[ { exercises: req.body } ]}), { new: true, runValidators: true })
//   .then(dbExercises => {
//     console.log(req.body)
//     console.log(dbExercises)
//     res.json(dbExercises);
    
//   
//   .catch(err => {
//     res.json(err);
//   });
// })





Router.put('/workouts/:_id', function(req, res){

  db.Workout.findByIdAndUpdate(req.params._id, {$push: {"exercises": req.body}}, {"new": true, "upsert": true, "safe": true}, (err, data) => {
    if(data){
    console.log(data)
    console.log(req.params._id)
    console.log(req.body)
    res.status(200).json(data)
  
}else {res.json(err)}
    
  
  }
  )}

  
)


module.exports = Router;

// db.Workout.findByIdAndUpdate({_id: req.params.id}, {$push: {"exercises": req.body}}, (data, err)=>{
//   if(data){
//     res.status(200).json({"data": data})
//   }else{
//       res.status(500).json(err)
//     }

// }
// )


  // { $push: { exercises : { 
  //       type: req.body.type,
  //           name: req.body.name,
  //           duration: req.body.duration,
  //           distance: req.body.distance,
  //           weight: req.body.weight,
  //           reps: req.body.reps,
  //           sets: req.body.sets }} }


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

