const express = require('express');
const router = express.Router();

/* Get home page */
router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;