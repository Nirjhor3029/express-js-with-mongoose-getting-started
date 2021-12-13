const route = require('express').Router();

const mongoose = require("mongoose");
const demoSchema = require('../schemas/demoSchema');
const demo = new mongoose.model("demo",demoSchema); // demo model by using demoSchema & model name ('demo') & collection name will be ('demos)

// All routes
route.get('/demo',(req,res)=>{
    // res.send("hello");
    res.render('demo')
});

// export the route
module.exports = route;