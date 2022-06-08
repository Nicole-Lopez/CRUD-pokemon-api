const axios = require('axios');
const { Type, Pokemon, HallOfFame, pokemon_types } = require('../db.js');

const createItemHall = async (req, res, next) => {
    try {
	    let  {
	    	pokemon,
	        title,
	        image,      
	    } = req.body
        
        const poki = await Pokemon.findOne({ where: { name: pokemon } });


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
