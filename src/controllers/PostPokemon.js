const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');

const createPoke = async (req, res, next) => {
    let  {
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
    } = req.body

	const pokExist = await Pokemon.findOne({ where: { name: name } });

	if (pokExist) {
		res.status(404).send('There is already a pokemon with that name')
	} else {
	  	console.log('Not found!');
	    let pokeCreated =await Pokemon.create({
	        name,
	        experience,
	        height,
	        img,
	        weight,
	        hp,
	        attack,
	        defense,
	        speed,
	    })

		let typeDb = await Type.findAll({
		    where:{
		        name: types
		    }
		})
		return (pokeCreated.addType(typeDb))?res.status(200).send('Successful creation'): res.status(404).send('Failed creation')
	}
}

module.exports = {
    createPoke
}