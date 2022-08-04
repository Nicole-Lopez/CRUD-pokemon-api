const express = require('express');
const router = express.Router();
const { getPo } = require('../controllers/GetAllPokemons');
const { createPoke} = require('../controllers/PostPokemon');
const { deletePoke} = require('../controllers/DeletePokemon');
const { updatePoke} = require('../controllers/UpdatePokemon');

router.get('/', getPo);
router.post('/', createPoke);
router.delete("/:name", deletePoke);
router.put("/:nameP", updatePoke);

module.exports = router;