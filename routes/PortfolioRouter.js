const Router = require('express').Router()
const controller = require('../controllers/PortfolioController.js')

Router.get('/portfolio', controller.getPortfolio)
Router.post('/addportfolio', controller.createPortfolio)
Router.delete('/:portfolio_id', controller.deletePortfolio)
Router.put('/:portfolio_id', controller.updatePortfolio)
Router.get('/:user_id', controller.getPortfolioByUserId)

module.exports = Router
