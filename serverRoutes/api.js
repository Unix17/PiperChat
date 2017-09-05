const express = require('express');
const router = express.Router();

router.get('/api', function(req, res) {
    res.send('GET handler for /dogs route.');
});

module.exports = router;