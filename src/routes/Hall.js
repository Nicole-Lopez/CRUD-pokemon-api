const express = require('express');
const router = express.Router();
const { getItemHall } = require('../controllers/GetHallItem');
const { createItemHall } = require('../controllers/PostHallItem');
const { deleteItemHall } = require('../controllers/DeleteHallItem');

router.get('/:pokemonName', getItemHall);
router.post('/:pokemonName', createItemHall);
router.delete('/:idItem', deleteItemHall);

module.exports = router;