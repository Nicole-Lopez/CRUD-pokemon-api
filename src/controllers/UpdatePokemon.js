const { Type, Pokemon, pokemon_types } = require('../db.js');

const updatePoke = async (req, res, next) => {
  const { nameP } = req.params;
  const {         
    name,
    experience,
    types,
    height,
    img,
    weight,
    hp,
    attack,
    defense,
    speed, 
  } = req.body;

  try {
    let updatedPokemon = await Pokemon.findOne({ where: { name: nameP } });

    if (updatedPokemon.original === false) {
      await updatedPokemon.update({
        name,
        experience,
        types,
        height,
        img,
        weight,
        hp,
        attack,
        defense,
        speed, 
      });

      let typesFromDb = await Type.findAll({ where: { name: types } });
      await updatedPokemon.setTypes(typesFromDb);
      res.status(201).json(updatedPokemon);

    } else {
      res.status(400).send("This pokemon is original, you can't edit it");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
    updatePoke
}