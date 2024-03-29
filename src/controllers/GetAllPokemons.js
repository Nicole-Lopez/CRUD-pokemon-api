const axios = require('axios');
const { Type, Pokemon, pokemon_types, HallOfFame } = require('../db.js');
const { Op } = require("sequelize");


const get144 = async () => { 
  try {
    let urlApiGet = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=72'    
    let getPokesApi = await axios.get(urlApiGet)
    let pok144s =getPokesApi.data.results
    
    for (let i = 0; i < pok144s.length; i++) {
      let detail = await axios.get(pok144s[i].url)
      let pok = detail.data

        let [poke, created] = await Pokemon.findOrCreate({
          where: {
            name: pok.name.charAt(0).toUpperCase() + pok.name.slice(1),
            img: pok.sprites.other.dream_world.front_default,
            hp: pok.stats[0].base_stat,
            attack: pok.stats[1].base_stat,
            defense: pok.stats[2].base_stat,
            speed: pok.stats[5].base_stat,
            height: (pok.height/10).toFixed(1),
            weight: (pok.weight/10).toFixed(1),
            experience: pok.base_experience,
            original:true
          }
        })

        let typeDb = await Type.findAll({
            where:{
                name: pok.types.map(types => types.type.name.toUpperCase())
            }
        })
        await poke.addType(typeDb)
    }

  }catch(err){
    console.log(err)
  }
}




const getAllPokemons= async ()=>{

  await get144()

  let pokesDB = await Pokemon.findAll({
    include: [
      {
        model: Type,
        atributes: ['name'],
        through: {
          attributes: [],
        },      
      },{
        model: HallOfFame,
        atributes: ['title', 'image']
      }
    ]
  });

  return pokesDB
}




const getbyName= async (namePok)=>{
     
  try{
      let results = await Pokemon.findAll({
        where: { name: namePok },
        include: [
          {
            model: Type,
            through: {
              attributes: [],
            }
          },{
            model: HallOfFame,
            atributes: ['title', 'image']
          }
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
      return (rta == 'This pokemon was not found') ?res.status(404).send(rta): res.status(200).send(rta)
      
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
    get144,
    getAllPokemons
}
