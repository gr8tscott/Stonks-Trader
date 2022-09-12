'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Portfolio.belongsTo(models.User, { foreignKey: 'userId' })
      Portfolio.hasMany(models.Stock, { foreignKey: 'portfolioId' })
    }
  }
  Portfolio.init(
    {
      profit: DataTypes.DECIMAL,
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
      modelName: 'Portfolio',
      tableName: 'portfolios'
    }
  )
  return Portfolio
}
