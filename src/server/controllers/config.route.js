const express = require('express');
const router = express.Router();

const configService = require('../services/config.service');

// config routes
router.post('/reset', (req, res) => {
    configService.reset(req, res);
});

module.exports = router;