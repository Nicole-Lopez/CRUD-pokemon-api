const { Type, Pokemon, HallOfFame, pokemon_types } = require('../db.js');

const deleteItemHall = async (req, res, next) => {
    const { id } = req.query;

    try {
        HallOfFame.destroy({ where: { id: id } });
    	res.status(201).send('Picture removed successfully');
    } catch (error) {
        next(error)
    };
}

module.exports = {
    deleteItemHall
}