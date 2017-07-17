var express = require('express');
var router = express.Router();
const { ensureLoggedIn }  = require('connect-ensure-login');

/* GET home page. */
router.get('/', (req, res) => {
  //res.render('profile/profile');
  res.render('profile');
});

router.get('/edit', (req, res) => {
    res.render('profile/edit');
});

router.get('/projects', (req, res) => {
    res.render('profile/projects');
});

router.get('/newproject', (req, res) => {
    res.render('profile/newproject');
});

module.exports = router;
