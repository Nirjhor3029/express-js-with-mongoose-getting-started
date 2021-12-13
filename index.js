const express = require("express");
const expressLayouts = require("express-ejs-layouts");
// import mongoose driver for MongoDB connection
const mongoose = require("mongoose");
// Import Route Handlers
// const pageRouteHandler = require("./routes/pageRouteHandler");
const demoRouteHandler = require("./routes/demoRouteHandler");


// Create App
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/todos")
.then((client)=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.error("DB Connection Error: "+err);
});

/*All Uses*/
// app.use(express.json()); // get only JSON as input 

// Static Files
app.use(express.static('public'));


// Set Template engine & Views & Layouts 
app.use(expressLayouts);
app.set('layout','./layouts/appLayout');  //default layout set to "appLayout.ejs" 
app.set('view engine','ejs');

// Use Route Middleware
// app.use('/',pageRouteHandler);
app.use('/demo',demoRouteHandler);

// Running Server
app.listen(port,()=>console.log('Server Up and Running with port : '+port));