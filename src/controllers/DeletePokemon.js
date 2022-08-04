const { Type, Pokemon, pokemon_types } = require('../db.js');

const deletePoke = async (req, res, next) => {
  const { name } = req.params;

  try {
    const pokemonToDelete = await Pokemon.findOne({ where: { name: name } });

    if (pokemonToDelete.original === false) {
	    pokemonToDelete.destroy();
	    res.status(200).send("Pokemon deleted from DB!");

    } else {
	    res.status(400).send("This pokemon is original, you can't delete it");
    }

  } catch (error) {
    next(error);
  }

}

module.exports = {
    deletePoke
}