const { Type, Pokemon, HallOfFame, pokemon_types } = require('../db.js');

const createItemHall = async (req, res, next) => {
    const { pokemonName } = req.params;
    let  {
        title,
        image,      
    } = req.body

    try {
        const poki = await Pokemon.findOne({ where: { name: pokemonName } });

        const createdItem = await HallOfFame.create({
            title, image
        })

    	await poki.addHallOfFame(createdItem);
    	res.status(201).json(createdItem);

    } catch (error) {
        next(error)
    };
}

module.exports = {
    createItemHall
}