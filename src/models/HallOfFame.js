const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('hallOfFame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },    
    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  },{ timestamps: false });
};

