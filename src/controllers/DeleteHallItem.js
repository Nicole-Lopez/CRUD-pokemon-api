const { Type, Pokemon, HallOfFame, pokemon_types } = require('../db.js');

const deleteItemHall = async (req, res, next) => {
    const { idItem } = req.body;    

    try {
        HallOfFame.destroy({ where: { id: idItem } });
    	res.status(201).send('Picture removed successfully');
    } catch (error) {
        next(error)
    };
}

module.exports = {
    deleteItemHall
}