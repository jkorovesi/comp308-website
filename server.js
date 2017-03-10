let express = require('express');
let app = express();

//create the port constant
const port = 3000;
 
 //start listening on the port
app.listen(port);
console.log('Server listening at port: ${port}');

//ROUTING

//hello route
app.use('/hello', (req, res, next) => {
    res.redirect("/")
});

//main route for the root of my website
app.use('/', (req, res, next) => {
    res.send("Welcome!");
});

module.exports = app;