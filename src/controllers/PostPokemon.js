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

    if (!name || name.length>10 || !types || !types[0] || types.length >2) return res.status(406).send('Invalid name or invalid types')

	const pokExist = await Pokemon.findOne({ where: { name: name } });

	if (pokExist) return res.status(406).send('There is already a pokemon with that name')
	else {
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
		return (pokeCreated.addType(typeDb))?res.status(201).send('Successful creation'): res.status(500).send('Failed creation')
	}
}

module.exports = {
    createPoke
}