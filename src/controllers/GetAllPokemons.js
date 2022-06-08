const axios = require('axios');
const { Type, Pokemon, pokemon_types } = require('../db.js');
const { Op } = require("sequelize");

const get500 = async () => { 
  try {
    let urlApiGet = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40'    
    let getPokesApi = await axios.get(urlApiGet)
    let pok50s =getPokesApi.data.results
    
    for (var i = 0; i < pok50s.length; i++) {
      let detail = await axios.get(pok50s[i].url)
      let pok = detail.data

        let [poke, created] = await Pokemon.findOrCreate({
          where: {
            name: pok.name,
            img: pok.sprites.other.dream_world.front_default,
            hp: pok.stats[0].base_stat,
            attack: pok.stats[1].base_stat,
            defense: pok.stats[2].base_stat,
            speed: pok.stats[5].base_stat,
            height: pok.height,
            weight: pok.weight,
            experience: pok.base_experience,
            original:true
          }
        })

        let typeDb = await Type.findAll({
            where:{
                name: pok.types.map(types => types.type.name)
            }
        })

        await poke.addType(typeDb)
    }

  }catch(err){
    console.log(err)
  }
}




const getAllPokemons= async ()=>{

  await get500()

  let pokesDB = await Pokemon.findAll({
    include: {
      model: Type,
      atributes: ['name'],
      through: {
        attributes: [],
      },      
    },
  });

  return pokesDB
}




const getbyName= async (namePok)=>{
     
  try{
      let results = await Pokemon.findAll({
        where: { 
          name: { 
            [Op.iLike]: `%${namePok}%` 
          } 
        },
        include: [
          {
            model: Type,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },

        ],
      });

      return (!results.length) ? 'This pokemon was not found' : results    

  }catch(err){
    console.log(err)
  }
}


const getPo = async (req, res, next)=>{
  const{ name }=req.query

  try {
    if (name) {
      let rta= await getbyName(name)
      return (rta == 'This pokemon was not found') ?res.status(404).json({ msg: rta}): res.status(200).json(rta)
      


    } else {
      res.status(200).send(await getAllPokemons())
    }


  } 
  catch (err) {
    next(err)
  }
}

module.exports = {
    getPo,
    get500,
    getAllPokemons
}
