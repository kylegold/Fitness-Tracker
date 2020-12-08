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




// db.Workout.find(req.params.id, (data)=>{
//   if(data){
//     db.Workout.update(req.body, req.params.id, (err, data)=>{
// if(data){ res.status(200).json({successful: "succesfully updated",
// data: data})
// }else{
//   res.status(500).json(err)
// }
// })
  
// }
// })
// })

// Router.put('/workouts/:id', function(req, res){

//   db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises:{type: req.body.type, name: req.body.name, duration: req.body.duration, distance: req.body.distance}, {"new": true, "upsert": true}}, (err, data)=> {
//     if (err){
//       console.log(err)
//     }
//     else {
//       console.log(req.params.id)
//       console.log(req.body)
//       console.log(data)
//     }
//   })

// })

module.exports = Router;

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

