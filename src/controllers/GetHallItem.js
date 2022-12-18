const { Type, Pokemon, HallOfFame, pokemon_types } = require('../db.js');

const getItem = async (pokemon) => {
    let poki = await Pokemon.findOne({ where: { name: pokemon } });
    let itemHall = await HallOfFame.findAll({ where: {pokemonId: poki.id} });
    return itemHall
}


const getItemHall = async (req, res, next) => {
    const { pokemonName } = req.params;

    try {
        let items = await getItem(pokemonName)

        if (items[0]) {
            res.status(200).json(items)
        } else {       
            res.status(204).send('This pokemon has no pictures in the hall of fame')
        }

    } catch (error) {
        next(error)
    };
}

module.exports = {
    getItemHall,
    getItem
}