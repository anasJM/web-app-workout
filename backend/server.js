require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middelware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB: listening in port 4000')
        })

    })
    .catch((error) => {
        console.log(error)
    })

