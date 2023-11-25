const express =  require('express')

const mongoose = require('mongoose')
//import route
const routes = require('./route')
const cors = require('cors')
const port = 4005;

const dbUrl = "mongodb+srv://alawodepuritymoyosola:WURAOLA0411@cluster0.qxuewyu.mongodb.net/?retryWrites=true&w=majority"


//connect database
mongoose
    .connect(dbUrl, {useNewUrlParser: true})
    .then(() => {
        console.log("database connected")
   
        //create express app
        const app = express();

        //add middleware
        app.use(cors())
        app.use(express.json())

        //use route
        app.use('/api', routes)

        app.listen(port, () => {
            console.log(`Server running on Port: ${port}`)
        });
 })