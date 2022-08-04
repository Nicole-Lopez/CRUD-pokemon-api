const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');
const { getAllPokemons } = require('../controllers/GetAllPokemons');

const createPoke = async (req, res, next) => {
    let  {
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
    } = req.body

	const project = await Pokemon.findOne({ where: { name: name } });

	if (project === null) {
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
		        name: tipos
		    }
		})
		// await pokeCreated.addType(typeDb)
		// return res.status(200).send('Successful creation')
		return (pokeCreated.addType(typeDb))?res.status(200).send('Successful creation'): res.status(404).send('Failed creation')

	} else {	  
		res.status(404).send('There is already a pokemon with that name')
	}
}



module.exports = {
    createPoke
}
