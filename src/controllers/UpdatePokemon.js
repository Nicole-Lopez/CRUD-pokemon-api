const { Type, Pokemon, pokemon_types } = require('../db.js');

const updatePoke = async (req, res, next) => {
  const { nameP } = req.params;

  try {
    const {         
      name,
      experience,
      tipos,
      height,
      img,
      weight,
      hp,
      attack,
      defense,
      speed, 
    } = req.body;

    let updatedPokemon = await Pokemon.findOne({ where: { name: nameP } });

    if (updatedPokemon.original === false) {

      await updatedPokemon.update({
        name,
        experience,
        tipos,
        height,
        img,
        weight,
        hp,
        attack,
        defense,
        speed, 
      });


      let typesFromDb = await Type.findAll({ where: { name: tipos } });

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