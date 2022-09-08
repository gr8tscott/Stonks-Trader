'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stock.belongsTo(models.Watchlist, { foreignKey: 'watchlistId' })
    }
  }
  Stock.init(
    {
      ticker: DataTypes.STRING,
      watchlistId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'watchlists',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Stock',
      tableName: 'stocks'
    }
  )
  return Stock
}
