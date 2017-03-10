let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let currentDate = new Date()
  res.render('index', {
     title: 'Home',
    date: currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
   });
});

//Get the contact page
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
