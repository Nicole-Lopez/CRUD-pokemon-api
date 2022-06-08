const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const allTypes = require('./TypesRouter')
const pokes = require('./PokemonsRouter')
const hall = require('./Hall')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokes);
router.use('/types', allTypes);
router.use('/hall', hall);


module.exports = router;
