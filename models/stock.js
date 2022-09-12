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
      Stock.belongsTo(models.Portfolio, { foreignKey: 'portfolioId' })
    }
  }
  Stock.init(
    {
      ticker: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      cost_basis: DataTypes.DECIMAL,
      watchlistId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'watchlists',
          key: 'id'
        }
      },
      portfolioId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'portfolios',
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
