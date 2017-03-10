let express = require('express');
 
let app = express();
const port = 3000;
 
app.listen(port);
console.log('Server listening at port: ${port}');

//hello route
app.use('/hello', (req, res, next) => {
    res.end("Hellooooo!");
    next();
});

//main route for the root of my website
app.use('/', (req, res, next) => {
    res.end("Welcome!");
    next();
});