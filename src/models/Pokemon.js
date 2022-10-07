const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, 
      unique:true,
      primaryKey: true
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://res.cloudinary.com/du7lmw4vm/image/upload/v1660016735/FANpokemon/silhouette_htizmn.png",
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue:5
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue:5
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue:5
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue:5
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue:1
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue:1
    },
    experience: {
      type: DataTypes.INTEGER,
      defaultValue:5
    },
    original: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
  },{ timestamps: false }
  );
};