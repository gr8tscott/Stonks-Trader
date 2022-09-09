const Router = require('express').Router()
const controller = require('../controllers/StockController')

Router.get('/stock', controller.getStock)
Router.post('/addstock', controller.createStock)
Router.delete('/:stock_id', controller.deleteStock)
Router.put('/:stock_id', controller.updateStock)
Router.get('/:watchlist_id', controller.getStocksByWatchlistId)

module.exports = Router
