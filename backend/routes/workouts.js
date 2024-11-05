const express = require("express")
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../contollers/workoutController')
const Workout = require('../models/workoutModel')
const router = express.Router()


// get all request
router.get('/', getWorkouts)

// get one request
router.get('/:id', getWorkout)

// post request
router.post('/', createWorkout)

// delete request
router.delete('/:id', deleteWorkout)

// update request
router.patch('/:id', updateWorkout)


module.exports = router