const Router = require('express').Router()
const controller = require('../controllers/WatchlistController.js')

Router.get('/watchlist', controller.getWatchlist)
Router.post('/addwatchlist', controller.createWatchlist)
Router.delete('/:watchlist_id', controller.deleteWatchlist)
Router.put('/:watchlist_id', controller.updateWatchlist)

module.exports = Router
