const axios = require('axios');
const { Type } = require('../db.js');

const icons=[
	'v1670466245/CRUD%20pokemon%20NO%20DELETE/typeIcons/normal.svg',
	'v1670466363/CRUD%20pokemon%20NO%20DELETE/typeIcons/fighting.svg',
	'v1670466444/CRUD%20pokemon%20NO%20DELETE/typeIcons/flying.svg',
	'v1670466682/CRUD%20pokemon%20NO%20DELETE/typeIcons/poison.svg',
	'v1670467132/CRUD%20pokemon%20NO%20DELETE/typeIcons/ground.svg',
	'v1670467163/CRUD%20pokemon%20NO%20DELETE/typeIcons/rock.svg',
	'v1670468205/CRUD%20pokemon%20NO%20DELETE/typeIcons/bug.svg',
	'v1670469165/CRUD%20pokemon%20NO%20DELETE/typeIcons/ghost.svg',
	'v1670467214/CRUD%20pokemon%20NO%20DELETE/typeIcons/steel.svg',
	'v1670469201/CRUD%20pokemon%20NO%20DELETE/typeIcons/fire.svg',
	'v1670467205/CRUD%20pokemon%20NO%20DELETE/typeIcons/water.svg',
	'v1670469530/CRUD%20pokemon%20NO%20DELETE/typeIcons/grass.svg',
	'v1670467238/CRUD%20pokemon%20NO%20DELETE/typeIcons/electric.svg',
	'v1670467215/CRUD%20pokemon%20NO%20DELETE/typeIcons/psychic.svg',
	'v1670467276/CRUD%20pokemon%20NO%20DELETE/typeIcons/ice.svg',
	'v1670469654/CRUD%20pokemon%20NO%20DELETE/typeIcons/dragon.svg',
	'v1670467319/CRUD%20pokemon%20NO%20DELETE/typeIcons/dark.svg',
	'v1670467238/CRUD%20pokemon%20NO%20DELETE/typeIcons/fairy.svg',
]

const getTypes = async (req, res, next)=>{
	try {
	const dataApiTypes = await axios.get("https://pokeapi.co/api/v2/type?limit=18")
	
	let lu= dataApiTypes.data.results.map((ty)=>ty.name);

    for (let i = 0; i < lu.length; i++) {
        let [type, created] = await Type.findOrCreate({
	        where: {
	          name: lu[i].toUpperCase(),
	          icon: `https://res.cloudinary.com/du7lmw4vm/image/upload/${icons[i]}`
	        }
        })
    }

	let total = await Type.findAll();
	res.status(200).send(total)	

	} catch (err) {
      next(err)
  	}
}

module.exports = {
    getTypes
}
