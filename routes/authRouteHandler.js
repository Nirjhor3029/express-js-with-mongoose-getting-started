const route = require('express').Router();

// All routes
route.get('/test',(req,res)=>{
    res.send('Test from '+ __filename);
});

// export the route
module.exports = route;