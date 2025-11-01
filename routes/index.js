var express = require('express');
var router = express.Router();

/* -------------------------------
   Home Page
--------------------------------*/
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home | Shivang Portfolio',
    active: 'home'
  });
});

/* -------------------------------
   About Page
--------------------------------*/
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About | Shivang Portfolio',
    active: 'about'
  });
});

/* -------------------------------
   Projects Page
--------------------------------*/
router.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects | Shivang Portfolio',
    active: 'projects'
  });
});

/* -------------------------------
   Contact Page (GET)
--------------------------------*/
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact | Shivang Portfolio',
    active: 'contact',
    submitted: false
  });
});

/* -------------------------------
   Contact Form (POST)
--------------------------------*/
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  // Simple response render (no DB/email yet)
  res.render('contact', {
    title: 'Contact | Shivang Portfolio',
    active: 'contact',
    submitted: true,
    name,
    email,
    message
  });
});

/* -------------------------------
   Export Router
--------------------------------*/
module.exports = router;
