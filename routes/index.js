let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let currentDate = new Date()
  res.render('index', {
     title: 'Home',
    date: currentDate.getMonth() + "/" + currentDate.getDate() + "/" + currentDate.getFullYear()
   });
});

//Get the contact page
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

//Get the about page
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

//Get the projects page
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects' });
});

//Get the services page
router.get('/services', (req, res, next) => {
  res.render('services', { title: 'Services' });
});

module.exports = router;
