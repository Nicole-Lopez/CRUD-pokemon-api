const express = require('express');
const router = express.Router();
const { createItemHall } = require('../controllers/PostHallItem');

router.post('/', createItemHall)

module.exports = router;