const express = require('express');
const router = express.Router();
const { getPo } = require('../controllers/GetAllPokemons');
const { createPoke} = require('../controllers/PostPokemon');
const { createItemHall} = require('../controllers/PostHallItem');


router.get('/', getPo)


router.post('/', createPoke)


router.post('/item', createItemHall)



module.exports = router;