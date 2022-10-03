const { Type, Pokemon, HallOfFame, pokemon_types } = require('../db.js');

const deletePoke = async (req, res, next) => {
  const { name } = req.params;

  try {
    const pokemonToDelete = await Pokemon.findOne({ where: { name: name } });

    if (pokemonToDelete.original) {
      res.status(400).send("This pokemon is original, you can't delete it");
    
    } else {
      await HallOfFame.destroy({ where: { pokemonId: pokemonToDelete.id } });
      await pokemonToDelete.destroy();

      res.status(200).send("Pokemon deleted from DB!");
    }

  } catch (error) {
    next(error);
  }
}

module.exports = {
    deletePoke
}