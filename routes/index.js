var express = require('express');
var router = express.Router();

/* Home */
router.get('/', (req, res) => {
  res.render('index', { title: 'Home | Shivang Portfolio' });
});

/* About */
router.get('/about', (req, res) => {
  res.render('about', { title: 'About | Shivang Portfolio' });
});

/* Projects */
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects | Shivang Portfolio' });
});

/* Contact (GET) */
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact | Shivang Portfolio', submitted: false });
});

/* Contact (POST) */
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  res.render('contact', {
    title: 'Contact | Shivang Portfolio',
    submitted: true,
    name, email, message
  });
});

module.exports = router;
