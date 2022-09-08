const Router = require('express').Router()
const controller = require('../controllers/stockController')

Router.get('/stock', controller.GetStock)
Router.post('/addstock', controller.createStock)
Router.delete('/:stock_d', controller.deleteStock)
Router.put('/:stock_id', controller.updateStock)

module.exports = Router
