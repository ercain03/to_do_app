'use strict';

const express = require('express');
const router = express.Router();

router.get('/todos', (req, res, next) => {
  res.send('');
});

module.exports = router;
