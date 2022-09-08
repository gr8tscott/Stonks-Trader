'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Watchlist.belongsTo(models.User, { foreignKey: 'userId' })
      Watchlist.hasMany(models.Stock, { foreignKey: 'watchlistId' })
    }
  }
  Watchlist.init(
    {
      name: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Watchlist',
      tableName: 'watchlists'
    }
  )
  return Watchlist
}
